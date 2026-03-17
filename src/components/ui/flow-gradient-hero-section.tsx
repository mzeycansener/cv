/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause } from 'lucide-react';

interface LiquidGradientProps {
    title?: string;
    showPauseButton?: boolean;
    ctaText?: string;
    onCtaClick?: () => void;
}

class TouchTexture {
    size = 64; width = 64; height = 64; maxAge = 64; radius = 0.1; speed = 1 / 64;
    trail: any[] = []; last: any = null;
    canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; texture: any;
    constructor() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width; this.canvas.height = this.height;
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.texture = new THREE.Texture(this.canvas);
    }
    update() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = this.trail.length - 1; i >= 0; i--) {
            const p = this.trail[i];
            const f = p.force * this.speed * (1 - p.age / this.maxAge);
            p.x += p.vx * f; p.y += p.vy * f; p.age++;
            if (p.age > this.maxAge) this.trail.splice(i, 1);
            else this.drawPoint(p);
        }
        this.texture.needsUpdate = true;
    }
    addTouch(point: any) {
        let force = 0, vx = 0, vy = 0;
        if (this.last) {
            const dx = point.x - this.last.x, dy = point.y - this.last.y;
            if (dx === 0 && dy === 0) return;
            const d = Math.sqrt(dx * dx + dy * dy);
            vx = dx / d; vy = dy / d;
            force = Math.min((dx * dx + dy * dy) * 20000, 2.0);
        }
        this.last = { x: point.x, y: point.y };
        this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
    }
    drawPoint(p: any) {
        const pos = { x: p.x * this.width, y: (1 - p.y) * this.height };
        let intensity = p.age < this.maxAge * 0.3
            ? Math.sin((p.age / (this.maxAge * 0.3)) * (Math.PI / 2))
            : -((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) * ((1 - (p.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) - 2));
        intensity *= p.force;
        const color = `${((p.vx + 1) / 2) * 255}, ${((p.vy + 1) / 2) * 255}, ${intensity * 255}`;
        const radius = this.radius * this.width;
        this.ctx.shadowOffsetX = this.size * 5;
        this.ctx.shadowOffsetY = this.size * 5;
        this.ctx.shadowBlur = radius;
        this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255,0,0,1)";
        this.ctx.arc(pos.x - this.size * 5, pos.y - this.size * 5, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

class GradientBackground {
    mesh: any = null; uniforms: any; sceneManager: any; isPaused = false;
    constructor(sceneManager: any) {
        this.sceneManager = sceneManager;
        this.uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            // Forest Green + Light Green/White tones — strictly warm green
            uColor1: { value: new THREE.Vector3(0.070, 0.370, 0.160) }, // deep muted forest green
            uColor2: { value: new THREE.Vector3(0.100, 0.290, 0.130) }, // very dark green
            uColor3: { value: new THREE.Vector3(0.070, 0.370, 0.160) },
            uColor4: { value: new THREE.Vector3(0.090, 0.450, 0.185) }, // mid-dark green
            uColor5: { value: new THREE.Vector3(0.100, 0.290, 0.130) },
            uColor6: { value: new THREE.Vector3(0.500, 0.700, 0.540) }, // soft muted mint — NOT bright white
            uSpeed: { value: 0.45 }, uIntensity: { value: 0.72 },
            uTouchTexture: { value: null }, uGrainIntensity: { value: 0.03 },
            uDarkNavy: { value: new THREE.Vector3(0.035, 0.059, 0.098) },
            uGradientSize: { value: 0.42 }, uGradientCount: { value: 6.0 },
            uColor1Weight: { value: 0.4 }, uColor2Weight: { value: 0.9 }
        };
    }
    init() {
        const viewSize = this.sceneManager.getViewSize();
        const geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1);
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `varying vec2 vUv; void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vUv = uv; }`,
            fragmentShader: `
        uniform float uTime, uSpeed, uIntensity, uGrainIntensity, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
        uniform vec2 uResolution;
        uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6, uDarkNavy;
        uniform sampler2D uTouchTexture;
        varying vec2 vUv;
        
        float grain(vec2 uv, float t) { return fract(sin(dot(uv * uResolution * 0.5 + t, vec2(12.9898, 78.233))) * 43758.5453) * 2.0 - 1.0; }
        
        vec3 getGradientColor(vec2 uv, float time) {
          vec2 c1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
          vec2 c2 = vec2(0.5 + cos(time * uSpeed * 0.6) * 0.5, 0.5 + sin(time * uSpeed * 0.45) * 0.5);
          vec2 c3 = vec2(0.5 + sin(time * uSpeed * 0.35) * 0.45, 0.5 + cos(time * uSpeed * 0.55) * 0.45);
          vec2 c4 = vec2(0.5 + cos(time * uSpeed * 0.5) * 0.4, 0.5 + sin(time * uSpeed * 0.4) * 0.4);
          vec2 c5 = vec2(0.5 + sin(time * uSpeed * 0.7) * 0.35, 0.5 + cos(time * uSpeed * 0.6) * 0.35);
          vec2 c6 = vec2(0.5 + cos(time * uSpeed * 0.45) * 0.5, 0.5 + sin(time * uSpeed * 0.65) * 0.5);
          
          float i1 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c1));
          float i2 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c2));
          float i3 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c3));
          float i4 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c4));
          float i5 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c5));
          float i6 = 1.0 - smoothstep(0.0, uGradientSize, length(uv - c6));
          
          vec3 color = vec3(0.0);
          color += uColor1 * i1 * (0.55 + 0.45 * sin(time * uSpeed)) * uColor1Weight;
          color += uColor2 * i2 * (0.55 + 0.45 * cos(time * uSpeed * 1.2)) * uColor2Weight;
          color += uColor3 * i3 * (0.55 + 0.45 * sin(time * uSpeed * 0.8)) * uColor1Weight;
          color += uColor4 * i4 * (0.55 + 0.45 * cos(time * uSpeed * 1.3)) * uColor2Weight;
          color += uColor5 * i5 * (0.55 + 0.45 * sin(time * uSpeed * 1.1)) * uColor1Weight;
          color += uColor6 * i6 * (0.55 + 0.45 * cos(time * uSpeed * 0.9)) * uColor2Weight;
          
          color = clamp(color, vec3(0.0), vec3(1.0)) * uIntensity;
          float lum = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(lum), color, 1.15);
          color = pow(color, vec3(1.05));
          float brightness = length(color);
          color = mix(uDarkNavy, color, max(brightness * 0.9, 0.12));
          return color;
        }
        
        void main() {
          vec2 uv = vUv;
          vec4 touchTex = texture2D(uTouchTexture, uv);
          uv.x -= (touchTex.r * 2.0 - 1.0) * 0.8 * touchTex.b;
          uv.y -= (touchTex.g * 2.0 - 1.0) * 0.8 * touchTex.b;
          vec2 center = vec2(0.5);
          float dist = length(uv - center);
          float ripple = sin(dist * 20.0 - uTime * 3.0) * 0.04 * touchTex.b;
          uv += vec2(ripple);
          vec3 color = getGradientColor(uv, uTime);
          color += grain(uv, uTime) * uGrainIntensity;
          color = clamp(color, vec3(0.0), vec3(1.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `
        });
        this.mesh = new THREE.Mesh(geometry, material);
        this.sceneManager.scene.add(this.mesh);
    }
    update(delta: number) { if (!this.isPaused) this.uniforms.uTime.value += delta; }
    setTheme(isDark: boolean) {
        if (isDark) {
            this.uniforms.uColor1.value.set(0.082, 0.502, 0.235); // mid-forest green
            this.uniforms.uColor2.value.set(0.133, 0.380, 0.169); // dark forest green
            this.uniforms.uDarkNavy.value.set(0.035, 0.059, 0.098);
            this.sceneManager.scene.background = new THREE.Color(0x0f172a);
        } else {
            this.uniforms.uColor1.value.set(0.070, 0.370, 0.160); // muted forest green
            this.uniforms.uColor2.value.set(0.170, 0.600, 0.310); // calmer mid-green
            this.uniforms.uDarkNavy.value.set(0.945, 0.970, 0.950); // soft off-white green tint
            this.sceneManager.scene.background = new THREE.Color(0xf3f6f3);
        }
    }
    onResize(w: number, h: number) {
        const viewSize = this.sceneManager.getViewSize();
        if (this.mesh) { this.mesh.geometry.dispose(); this.mesh.geometry = new THREE.PlaneGeometry(viewSize.width, viewSize.height, 1, 1); }
        this.uniforms.uResolution.value.set(w, h);
    }
}

class App {
    renderer: any; camera: any; scene: any; clock: any;
    touchTexture: TouchTexture; gradientBackground: GradientBackground;
    animationId: number | null = null; container: HTMLElement;
    constructor(container: HTMLElement) {
        this.container = container;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
        this.camera.position.z = 50;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0f172a);
        this.clock = new THREE.Clock();
        this.touchTexture = new TouchTexture();
        this.gradientBackground = new GradientBackground(this);
        this.gradientBackground.uniforms.uTouchTexture.value = this.touchTexture.texture;
        this.init();
    }
    setTheme(isDark: boolean) { this.gradientBackground.setTheme(isDark); }
    setPaused(paused: boolean) { this.gradientBackground.isPaused = paused; }
    getViewSize() {
        const fov = (this.camera.fov * Math.PI) / 180;
        const height = Math.abs(this.camera.position.z * Math.tan(fov / 2) * 2);
        return { width: height * this.camera.aspect, height };
    }
    init() {
        this.gradientBackground.init();
        const c = this.container;
        const onMove = (x: number, y: number) => { this.touchTexture.addTouch({ x: x / window.innerWidth, y: 1 - y / window.innerHeight }); };
        window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
        window.addEventListener("touchmove", (e) => {
            onMove(e.touches[0].clientX, e.touches[0].clientY);
        });

        // Add resize observer instead of just window resize
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === c) {
                    this.camera.aspect = window.innerWidth / window.innerHeight;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(window.innerWidth, window.innerHeight);
                    this.gradientBackground.onResize(window.innerWidth, window.innerHeight);
                }
            }
        });

        resizeObserver.observe(c);
        c.dataset.observerId = "attached";

        this.tick();
    }
    tick() {
        const delta = Math.min(this.clock.getDelta(), 0.1);
        this.touchTexture.update();
        this.gradientBackground.update(delta);
        this.renderer.render(this.scene, this.camera);
        this.animationId = requestAnimationFrame(() => this.tick());
    }
    cleanup() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.renderer.dispose();
        if (this.container && this.renderer.domElement && this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}

export default function LiquidGradient({
    title,
    showPauseButton = true,
    ctaText,
    onCtaClick
}: LiquidGradientProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showCursor, setShowCursor] = useState(false);
    const appRef = useRef<any>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    // Platform theme detection
    useEffect(() => {
        const checkTheme = () => {
            const html = document.documentElement;
            const body = document.body;
            const isDark = html.classList.contains('dark') ||
                body.classList.contains('dark') ||
                html.getAttribute('data-theme') === 'dark' ||
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(isDark);
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', checkTheme);
        return () => { observer.disconnect(); mediaQuery.removeEventListener('change', checkTheme); };
    }, []);

    // Custom cursor
    useEffect(() => {
        const cursor = cursorRef.current;
        const dot = cursorDotRef.current;
        if (!cursor || !dot) return;
        let cursorX = 0, cursorY = 0, dotX = 0, dotY = 0, animId: number;
        const animate = () => {
            if (mousePos.current) {
                cursorX += (mousePos.current.x - cursorX) * 0.12;
                cursorY += (mousePos.current.y - cursorY) * 0.12;
                dotX += (mousePos.current.x - dotX) * 0.3;
                dotY += (mousePos.current.y - dotY) * 0.3;
                cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
                dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
            }
            animId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(animId);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        if (appRef.current) appRef.current.cleanup();
        appRef.current = new App(container);

        return () => { if (appRef.current) appRef.current.cleanup(); };
    }, []);

    useEffect(() => { if (appRef.current) appRef.current.setTheme(isDarkMode); }, [isDarkMode]);
    useEffect(() => { if (appRef.current) appRef.current.setPaused(!isPlaying); }, [isPlaying]);

    return (
        <div
            className="fixed inset-0 z-[-1] w-full h-full overflow-hidden pointer-events-none"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
        >
            <div ref={containerRef} className="absolute inset-0 z-0 w-[100vw] h-[100vh]" />

            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className={`pointer-events-none fixed z-50 w-10 h-10 border border-primary/50 text-white rounded-full transition-opacity duration-300 ${isDarkMode ? 'border-primary/50' : 'border-primary'}`}
                style={{ opacity: showCursor ? 1 : 0, left: 0, top: 0, display: 'none' }}
            />
            <div
                ref={cursorDotRef}
                className={`pointer-events-none fixed z-50 w-2 h-2 bg-primary rounded-full transition-opacity duration-300 ${isDarkMode ? 'bg-primary' : 'bg-primary/80'}`}
                style={{ opacity: showCursor ? 1 : 0, left: 0, top: 0, display: 'none' }}
            />

            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 pointer-events-none">
                <div>
                    {title && (
                        <h2 className="text-2xl font-bold text-white drop-shadow-md pointer-events-auto">
                            {title}
                        </h2>
                    )}
                </div>

                <div className="flex items-end justify-between">
                    <div className="pointer-events-auto">
                        {ctaText && onCtaClick && (
                            <button
                                className="px-6 py-2 bg-primary/20 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-primary/40 transition-colors pointer-events-auto"
                                onClick={onCtaClick}
                            >
                                {ctaText}
                            </button>
                        )}
                    </div>

                    {/* Pause/Play Button */}
                    {showPauseButton && (
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="pointer-events-auto p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors"
                            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
                        >
                            {isPlaying ? (
                                <Pause className="w-5 h-5 cursor-pointer" />
                            ) : (
                                <Play className="w-5 h-5 ml-1 cursor-pointer" />
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export { LiquidGradient as Component };

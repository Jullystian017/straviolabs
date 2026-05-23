"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  Zap,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  ChevronRight,
  Maximize,
  RotateCw,
  Scale,
  Play,
  Settings,
  Code,
  Compass,
  Monitor,
  Atom,
  LayoutDashboard,
  ShoppingCart,
  Sidebar,
  Star,
  Search,
  Sun,
  Clock,
  Bell,
  Plus,
  Filter,
  ArrowUpDown
} from "lucide-react";
import dynamic from "next/dynamic";

const Silk = dynamic(() => import("@/components/Silk"), { ssr: false });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const [activeAnimation, setActiveAnimation] = useState<string>("none");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animations
  useGSAP(
    () => {
      // 1. Initial Page Load Animation
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".nav-item", {
        y: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      })
        .from(".hero-badge", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .from(".hero-title", {
          y: 40,
          opacity: 0,
          duration: 1,
        }, "-=0.6")
        .from(".hero-cta-btn", {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
        }, "-=0.6");

      // 2. Continuous floating animation for background blobs
      gsap.to(".blob-1", {
        x: "10vw",
        y: "8vh",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-2", {
        x: "-8vw",
        y: "-10vh",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".blob-3", {
        x: "6vw",
        y: "-5vh",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. ScrollTrigger Animations for Features
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // 4. ScrollTrigger for Interactive Playground heading
      gsap.from(".playground-heading", {
        scrollTrigger: {
          trigger: ".playground-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  // Playground Animation Triggers
  const triggerPlaygroundAnim = (type: string) => {
    if (!cubeRef.current) return;

    // Kill any active animations on the cube first
    gsap.killTweensOf(cubeRef.current);

    // Reset properties to ensure clean start
    gsap.set(cubeRef.current, { rotation: 0, scale: 1, x: 0, y: 0, opacity: 1 });

    setActiveAnimation(type);

    switch (type) {
      case "spin":
        gsap.to(cubeRef.current, {
          rotation: 360,
          duration: 1.5,
          ease: "elastic.out(1, 0.4)",
          onComplete: () => setActiveAnimation("none"),
        });
        break;
      case "pulse":
        gsap.timeline({ onComplete: () => setActiveAnimation("none") })
          .to(cubeRef.current, { scale: 1.3, duration: 0.3, ease: "power2.out" })
          .to(cubeRef.current, { scale: 0.9, duration: 0.3, ease: "power2.inOut" })
          .to(cubeRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.5)" });
        break;
      case "bounce":
        gsap.timeline({ onComplete: () => setActiveAnimation("none") })
          .to(cubeRef.current, { y: -100, ease: "power2.out", duration: 0.4 })
          .to(cubeRef.current, { y: 0, ease: "bounce.out", duration: 0.8 });
        break;
      case "glitch":
        const tl = gsap.timeline({ onComplete: () => setActiveAnimation("none") });
        for (let i = 0; i < 6; i++) {
          tl.to(cubeRef.current, {
            x: () => gsap.utils.random(-25, 25),
            y: () => gsap.utils.random(-15, 15),
            scale: () => gsap.utils.random(0.95, 1.05),
            opacity: () => gsap.utils.random(0.6, 1),
            duration: 0.08,
            ease: "power1.inOut",
          });
        }
        tl.to(cubeRef.current, { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.1 });
        break;
      default:
        setActiveAnimation("none");
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen text-slate-100 overflow-hidden bg-glow-primary bg-glow-secondary bg-glow-tertiary">

      {/* Background Interactive Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-40 bg-radial from-violet-600/30 to-transparent pointer-events-none blob-1" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full filter blur-[100px] opacity-30 bg-radial from-rose-500/20 to-transparent pointer-events-none blob-2" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full filter blur-[110px] opacity-20 bg-radial from-emerald-400/25 to-transparent pointer-events-none blob-3" />

      {/* Hero & Navbar Container with Silk background */}
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">
        {/* Silk Backdrop */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <Silk
            speed={5}
            scale={0.7}
            color="#5227FF"
            noiseIntensity={1.1}
            rotation={3.15}
          />
        </div>

        {/* Elegant Plus Overlay over Silk */}
        <div className="absolute inset-0 z-[1] grid-bg opacity-100 pointer-events-none mix-blend-overlay" />

        {/* Header/Navbar */}
        <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? "pt-4 px-4 pointer-events-none" : ""} nav-item`}>
          <nav className={`mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? "max-w-[1200px] bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-3 border border-slate-200/50" 
              : "max-w-[1400px] px-8 md:px-12 py-6 bg-transparent"
          }`}>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/straviolabs.png" alt="Straviolabs Logo" className={`w-10 h-10 object-contain transition-all duration-300 ${isScrolled ? "brightness-0" : ""}`} />
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-slate-900" : "text-white"}`}>
                Straviolabs
              </span>
            </div>

            {/* Links */}
            <div className={`hidden md:flex items-center space-x-10 text-sm font-semibold transition-colors duration-300 ${isScrolled ? "text-slate-500" : "text-slate-300"}`}>
              <a href="#platform" className={`transition ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>Platform</a>
              <a href="#solutions" className={`transition ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>Solutions</a>
              <a href="#pricing" className={`transition ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>Pricing</a>
              <a href="#about" className={`transition ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>About</a>
              <a href="#blog" className={`transition ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>Blog</a>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className={`px-6 py-2.5 text-xs font-bold tracking-wider rounded transition-all flex items-center gap-2 ${
                  isScrolled 
                    ? "text-white bg-slate-900 hover:bg-slate-800" 
                    : "text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                CONTACT US <ArrowRight className={`w-3.5 h-3.5 transition-opacity ${isScrolled ? "opacity-100" : "opacity-70"}`} />
              </a>
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-[1400px] w-full px-8 md:px-12 pt-32 pb-0">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">

            {/* Left Column (Heading) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="mb-6 text-[11px] font-bold tracking-[0.15em] text-white/80 hero-badge uppercase">
                AI & SAAS INFRASTRUCTURE
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[76px] font-semibold tracking-tight text-white leading-[1.05] hero-title">
                Build software that feels precise and dependable.
              </h1>
            </div>

            {/* Right Column (Text & Buttons) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:pl-10">
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-md hero-cta-btn">
                Steel provides a structured framework for presenting AI and software platforms built around scale, precision, and reliability.
              </p>

              <div className="flex flex-row items-center gap-4 hero-cta-btn">
                <a
                  href="#get-started"
                  className="px-6 py-3.5 text-sm font-bold tracking-wide rounded text-slate-950 bg-white hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2"
                >
                  GET STARTED <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Dashboard Graphic Mockup */}
          <div className="w-full relative z-20 flex justify-center hero-cta-btn">
            <div className="w-full h-[500px] bg-[#fdfdfd] rounded-t-xl border-t border-x border-white/20 shadow-2xl overflow-hidden relative flex text-slate-800">

              {/* Sidebar */}
              <div className="w-[240px] h-full border-r border-slate-200 bg-[#fafafa] flex flex-col pt-6 pb-4">
                {/* User Profile */}
                <div className="flex items-center gap-3 px-6 mb-8">
                  <div className="w-7 h-7 rounded-full bg-slate-800" />
                  <span className="text-sm font-semibold">ByeWind</span>
                </div>

                {/* Menu Section 1 */}
                <div className="px-6 mb-6">
                  <div className="flex gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <span className="text-slate-800">Favorites</span>
                    <span>Recently</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Overview
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" /> Projects
                    </div>
                  </div>
                </div>

                {/* Menu Section 2 */}
                <div className="px-6 flex-1">
                  <div className="text-xs font-semibold text-slate-400 mb-4">Dashboards</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 bg-slate-200/50 rounded-lg text-sm font-semibold">
                      <LayoutDashboard className="w-4 h-4" /> Default
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-500 text-sm font-medium">
                      <ShoppingCart className="w-4 h-4" /> eCommerce
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-white">
                {/* Topbar */}
                <div className="h-14 border-b border-slate-200 flex items-center justify-between px-6">
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <Sidebar className="w-4 h-4" />
                    <Star className="w-4 h-4" />
                    <span className="text-slate-300">Dashboards / <span className="text-slate-800">Default</span></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1.5 bg-slate-100 rounded-md text-xs text-slate-400 flex items-center gap-2 w-48">
                      <Search className="w-3.5 h-3.5" /> Search <span className="ml-auto">⌘/</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Sun className="w-4 h-4" />
                      <Clock className="w-4 h-4" />
                      <Bell className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-base font-semibold mb-6">Order List</h3>

                  {/* Table Toolbar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Plus className="w-4 h-4" />
                      <Filter className="w-4 h-4" />
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                    <div className="px-3 py-1.5 border border-slate-200 rounded-md text-xs text-slate-400 flex items-center gap-2 w-48">
                      <Search className="w-3.5 h-3.5" /> Search
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-6 gap-4 text-xs font-semibold text-slate-400 pb-3 border-b border-slate-200 mb-4">
                    <div className="col-span-1">Order ID</div>
                    <div className="col-span-1">User</div>
                    <div className="col-span-1">Project</div>
                    <div className="col-span-1">Address</div>
                    <div className="col-span-1">Date</div>
                    <div className="col-span-1">Status</div>
                  </div>

                  {/* Table Row 1 */}
                  <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 pb-4 border-b border-slate-100">
                    <div className="col-span-1">#CM9801</div>
                    <div className="col-span-1 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-800" /> Natali Craig
                    </div>
                    <div className="col-span-1">Landing Page</div>
                    <div className="col-span-1">Meadow Lane Oakland</div>
                    <div className="col-span-1">Just now</div>
                    <div className="col-span-1 text-blue-500 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> In Progress
                    </div>
                  </div>
                </div>
              </div>

              {/* Framer badge mockup */}
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded shadow-lg text-xs font-semibold text-slate-800 flex items-center gap-2 border border-slate-100">
                <div className="w-2.5 h-2.5 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 50%, 0 100%)" }} /> Made in Framer
              </div>
            </div>
          </div>
        </header>

        {/* Glow vignette gradient overlay at the very bottom so it fades smoothly to dark background below */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040209] via-[#040209]/80 to-transparent z-30 pointer-events-none" />
      </div>

      {/* Technical Features Section */}
      <section id="features" className="relative z-10 py-24 border-t border-white/5 bg-slate-950/20 features-section">
        <div className="px-6 mx-auto max-w-7xl md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-white">
              The Architecture Stack
            </h2>
            <p className="mt-4 text-slate-400">
              Meticulously selected technologies supporting ultra-smooth visuals and robust production reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left feature-card">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-950/50 border border-violet-500/20 text-violet-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GSAP & @gsap/react</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Industry standard animation engine delivering advanced timelines, ScrollTrigger mechanisms, and flawless performance on heavy UI states.
              </p>
              <span className="text-xs font-mono text-violet-400 mt-auto">Revertable Lifecycles</span>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left feature-card">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-rose-950/50 border border-rose-500/20 text-rose-400 mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tailwind CSS v4</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                The latest iteration of Tailwind, featuring supercharged performance, fully CSS-driven configurations, and deep utility classes.
              </p>
              <span className="text-xs font-mono text-rose-400 mt-auto">CSS-First Engine</span>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-8 rounded-2xl flex flex-col items-start text-left feature-card">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Next.js 16 (App Router)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Next-generation server and client routing model, giving optimized builds, lightning-fast SSR, and clean module structures.
              </p>
              <span className="text-xs font-mono text-emerald-400 mt-auto">React 19 Ready</span>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive GSAP Animation Playground Section */}
      <section id="playground" className="relative z-10 py-24 border-t border-white/5 bg-slate-950/40 playground-section">
        <div className="px-6 mx-auto max-w-7xl md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-16 playground-heading">
            <span className="px-3 py-1 text-[11px] font-semibold tracking-wider text-violet-400 bg-violet-950/50 rounded-full border border-violet-500/30 uppercase">Interactive Canvas</span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-white mt-4">
              GSAP Control Center
            </h2>
            <p className="mt-4 text-slate-400">
              Experiment with real-time GSAP timelines. Interact with our animated glowing orb and watch the physics engine compile the frames.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Visual Canvas Block */}
            <div className="lg:col-span-7 rounded-2xl border border-white/5 bg-slate-950/90 flex flex-col items-center justify-center p-8 relative min-h-[400px] overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

              {/* Central Glowing Orb */}
              <div
                ref={cubeRef}
                className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500 shadow-[0_0_50px_rgba(139,92,246,0.5)] flex items-center justify-center cursor-pointer select-none group"
                onClick={() => triggerPlaygroundAnim("pulse")}
              >
                <Zap className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-6 flex items-center gap-2 px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-slate-400">Active State:</span>
                <span className="text-violet-400 font-semibold uppercase">{activeAnimation}</span>
              </div>
            </div>

            {/* Animation Controls Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between glass-card p-8 rounded-2xl text-left">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-violet-400 animate-spin-slow" /> Timelines & Tweens
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  Select an instruction set below to broadcast to our canvas. The tweening is generated dynamically using full hardware acceleration.
                </p>

                <div className="space-y-4">
                  {/* Btn 1 */}
                  <button
                    onClick={() => triggerPlaygroundAnim("spin")}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-900/60 hover:bg-violet-950/30 hover:border-violet-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-950/50 flex items-center justify-center text-violet-400">
                        <RotateCw className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Elastic Rotate</p>
                        <p className="text-xs text-slate-500">gsap.to(..., &#123; rotation: 360, ease: elastic &#125;)</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors" />
                  </button>

                  {/* Btn 2 */}
                  <button
                    onClick={() => triggerPlaygroundAnim("pulse")}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-900/60 hover:bg-violet-950/30 hover:border-violet-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-fuchsia-950/50 flex items-center justify-center text-fuchsia-400">
                        <Scale className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Pulsing Stagger</p>
                        <p className="text-xs text-slate-500">gsap.timeline().to(scale: 1.3).to(scale: 0.9)...</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-fuchsia-400 transition-colors" />
                  </button>

                  {/* Btn 3 */}
                  <button
                    onClick={() => triggerPlaygroundAnim("bounce")}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-900/60 hover:bg-violet-950/30 hover:border-violet-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-950/50 flex items-center justify-center text-rose-400">
                        <Play className="w-4 h-4 -rotate-90 group-hover:translate-y-[-2px] transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Gravitational Bounce</p>
                        <p className="text-xs text-slate-500">gsap.to(..., &#123; y: -100, ease: bounce.out &#125;)</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-rose-400 transition-colors" />
                  </button>

                  {/* Btn 4 */}
                  <button
                    onClick={() => triggerPlaygroundAnim("glitch")}
                    className="w-full text-left p-4 rounded-xl border border-white/5 bg-slate-900/60 hover:bg-violet-950/30 hover:border-violet-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-950/50 flex items-center justify-center text-emerald-400">
                        <Maximize className="w-4 h-4 group-hover:skew-x-6 transition-transform" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Jitter Glitch</p>
                        <p className="text-xs text-slate-500">Random coordinate offsetting via fast loops</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>GPU ACCELERATION: ACTIVE</span>
                <span>GSAP v3.12+</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-slate-950/60 text-center">
        <div className="px-6 mx-auto max-w-4xl md:px-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-white">
            Ready to Build Your Ecosystem?
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Straviolabs integrates premium front-end motion, standard responsive Tailwind code, and high-performance server logic to deliver memorable digital artifacts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerPlaygroundAnim("spin")}
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold rounded-xl bg-white text-slate-950 hover:bg-slate-200 transition-all"
            >
              Get In Touch
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4" /> View Open Source
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5 bg-slate-950 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-lg bg-violet-600/30 border border-violet-500/30 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
            </div>
            <span className="font-semibold text-slate-400">STRAVIOLABS</span>
          </div>
          <p>© {new Date().getFullYear()} Straviolabs. Crafting premium creative software. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

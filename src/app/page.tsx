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
  ChevronDown,
  Maximize,
  Wallet,
  Stethoscope,
  GraduationCap,
  Building2,
  Paintbrush,
  Code2,
  Command,
  Hexagon,
  Triangle,
  Infinity,
  Feather,
  LineChart,
  Lock,
  Globe,
  Terminal,
  TrendingUp,
  Smartphone,
  Layout,
  MonitorPlay,
  Briefcase,
  PenTool,
  Users,
  BarChart,
  Shield,
  Handshake,
  Newspaper,
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

const comparisonItems = [
  {
    problem: "New AI companies lack credibility with first-time visitors",
    solution: "Built-in trust sections that establish authority and social proof"
  },
  {
    problem: "Complex AI products are difficult to explain and sell",
    solution: "Structured layouts that translate system complexity with confidence"
  },
  {
    problem: "Abstract concepts feel hard to trust for prospects",
    solution: "Interactive components that make abstract features tangible"
  },
  {
    problem: "Traditional SaaS templates feel outdated and static",
    solution: "Modern, highly tailored aesthetics that drive engagement"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const [activeAnimation, setActiveAnimation] = useState<string>("none");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-40 bg-radial from-blue-600/30 to-transparent pointer-events-none blob-1" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full filter blur-[100px] opacity-30 bg-radial from-cyan-500/20 to-transparent pointer-events-none blob-2" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full filter blur-[110px] opacity-20 bg-radial from-indigo-500/20 to-transparent pointer-events-none blob-3" />

      {/* Hero & Navbar Container with Silk background */}
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">
        {/* Silk Backdrop */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <Silk
            speed={5}
            scale={0.7}
            color="#2563eb"
            noiseIntensity={1.1}
            rotation={3.15}
          />
        </div>

        {/* Elegant Plus Overlay over Silk */}
        <div className="absolute inset-0 z-[1] grid-bg opacity-30 pointer-events-none" />

        {/* Header/Navbar */}
        <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? "pt-4 px-4 pointer-events-none" : ""} nav-item`}>
          <nav className={`mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${isScrolled
            ? "max-w-[1250px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-2 border border-slate-200/50"
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
            <div className={`hidden md:flex items-center space-x-8 text-[13px] font-semibold transition-colors duration-300 ${isScrolled ? "text-slate-600" : "text-slate-300"}`}>

              {/* Services */}
              <div className="group relative">
                <button className={`flex items-center gap-1.5 transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                  Services <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
                    }`}>
                    {/* Grid Left */}
                    <div className="flex-1 p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8 ${isScrolled ? "bg-slate-100 text-slate-800" : "bg-white/10 text-white"}`}>
                        Services
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <MonitorPlay className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Web Design</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>App & Website Design tailored for engagement</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Smartphone className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Mobile Design</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>iOS & Android UI/UX experiences</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Code2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Web Development</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Robust full-stack Web Apps</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Paintbrush className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Branding & Redesign</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Brand Identity & aesthetic revamps</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* CTA Right */}
                    <div className="w-[260px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl p-6 flex flex-col justify-end relative overflow-hidden group/cta cursor-pointer">
                      <div className="absolute inset-0 bg-black/10 group-hover/cta:bg-transparent transition-colors" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
                      <div className="relative z-10 bg-white rounded-xl p-5 mt-40 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded bg-blue-500 text-white flex items-center justify-center"><Zap className="w-3 h-3" /></div>
                          <span className="text-[10px] font-bold text-slate-800">AI Agent</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">Hi, Anything I can help with? 😊</p>
                        <h4 className="text-[15px] font-bold text-slate-900 mb-1 mt-4 border-t border-slate-100 pt-4">Ready to get started?</h4>
                        <span className="text-sm font-bold text-[#0052cc] group-hover/cta:underline">Contact Us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="group relative">
                <button className={`flex items-center gap-1.5 transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                  Products <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
                    }`}>
                    {/* Grid Left */}
                    <div className="flex-1 p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8 ${isScrolled ? "bg-slate-100 text-slate-800" : "bg-white/10 text-white"}`}>
                        Products
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Core Platform</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Enterprise AI Infrastructure</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Integrations API</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Seamless Third-Party Sync</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <BarChart className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Data Analytics</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Real-time Insights & Reporting</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Shield className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Security Hub</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Advanced Threat Protection</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* CTA Right */}
                    <div className="w-[260px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl p-6 flex flex-col justify-end relative overflow-hidden group/cta cursor-pointer">
                      <div className="absolute inset-0 bg-black/10 group-hover/cta:bg-transparent transition-colors" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
                      <div className="relative z-10 bg-white rounded-xl p-5 mt-40 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded bg-blue-500 text-white flex items-center justify-center"><Zap className="w-3 h-3" /></div>
                          <span className="text-[10px] font-bold text-slate-800">AI Agent</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">Hi, Anything I can help with? 😊</p>
                        <h4 className="text-[15px] font-bold text-slate-900 mb-1 mt-4 border-t border-slate-100 pt-4">Ready to get started?</h4>
                        <span className="text-sm font-bold text-[#0052cc] group-hover/cta:underline">Contact Us</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Studies */}
              <a href="#case-studies" className={`transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                Case Studies
              </a>

              {/* About */}
              <a href="#about" className={`transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                About
              </a>

              {/* Contact Us */}
              <a href="#contact" className={`transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                Contact Us
              </a>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#contact"
                className={`px-6 py-2.5 text-xs font-bold tracking-wider rounded transition-all flex items-center gap-2 ${isScrolled
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
        <header className="relative z-10 flex-1 flex flex-col justify-center mx-auto max-w-[1400px] w-full px-8 md:px-12 pt-36 pb-32">

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

            {/* Left Column (Heading) */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="mb-6 text-[11px] font-bold tracking-[0.15em] text-white/80 hero-badge uppercase">
                AI & SAAS INFRASTRUCTURE
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[72px] font-semibold tracking-tight text-white leading-[1.05] hero-title">
                We build precise software <br className="hidden lg:block" /> to scale your vision.
              </h1>
            </div>

            {/* Right Column (Text & Buttons) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:pl-8">
              <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-sm hero-cta-btn">
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
        </header>
      </div>

      {/* Clean light theme sections */}
      <div className="relative bg-white text-slate-900 pt-0 pb-32 px-6 md:px-12 z-30">

        {/* Dashboard Graphic Mockup */}
        <div className="max-w-[1400px] mx-auto -translate-y-36 mb-16 relative z-40 w-full px-8 md:px-12 hero-cta-btn">
          <div className="w-full h-[640px] bg-[#fdfdfd] rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative flex text-slate-800">

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
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 py-4 border-b border-slate-100">
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

                {/* Table Row 2 */}
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 py-4 border-b border-slate-100">
                  <div className="col-span-1">#CM9802</div>
                  <div className="col-span-1 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-700" /> Kate Morrison
                  </div>
                  <div className="col-span-1">iOS App Design</div>
                  <div className="col-span-1">8472 Spruce St</div>
                  <div className="col-span-1">2 hours ago</div>
                  <div className="col-span-1 text-emerald-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Completed
                  </div>
                </div>

                {/* Table Row 3 */}
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 py-4 border-b border-slate-100">
                  <div className="col-span-1">#CM9803</div>
                  <div className="col-span-1 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-600" /> Drew Cano
                  </div>
                  <div className="col-span-1">Web Platform</div>
                  <div className="col-span-1">3948 Pine Rd</div>
                  <div className="col-span-1">Yesterday</div>
                  <div className="col-span-1 text-emerald-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Completed
                  </div>
                </div>

                {/* Table Row 4 */}
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 py-4 border-b border-slate-100">
                  <div className="col-span-1">#CM9804</div>
                  <div className="col-span-1 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-500" /> Orlando Diggs
                  </div>
                  <div className="col-span-1">Brand Identity</div>
                  <div className="col-span-1">1029 Elm St</div>
                  <div className="col-span-1">3 days ago</div>
                  <div className="col-span-1 text-amber-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pending
                  </div>
                </div>

                {/* Table Row 5 */}
                <div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-600 py-4 border-b border-slate-100">
                  <div className="col-span-1">#CM9805</div>
                  <div className="col-span-1 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-400" /> Andi Lane
                  </div>
                  <div className="col-span-1">Dashboard UI</div>
                  <div className="col-span-1">5820 Oak Ave</div>
                  <div className="col-span-1">1 week ago</div>
                  <div className="col-span-1 text-emerald-500 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Completed
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

        {/* Trusted By Marquee Section */}
        <section className="max-w-[1200px] mx-auto mb-32 border-b border-slate-100 pb-20 overflow-hidden">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-10">
            Trusted by innovative teams worldwide
          </p>
          <div className="relative w-full flex items-center justify-center h-12">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex items-center gap-16 animate-marquee whitespace-nowrap opacity-60 grayscale">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 shrink-0 px-8">
                  <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight text-slate-800"><Command className="w-6 h-6 text-slate-500" /> Acme Corp</div>
                  <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight text-slate-800"><Hexagon className="w-6 h-6 text-slate-500" /> Nexus</div>
                  <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight text-slate-800"><Triangle className="w-6 h-6 text-slate-500" /> Zenith</div>
                  <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight text-slate-800"><Infinity className="w-6 h-6 text-slate-500" /> Omni</div>
                  <div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight text-slate-800"><Feather className="w-6 h-6 text-slate-500" /> Stratus</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* The Problem Section */}
        <section className="max-w-[1200px] mx-auto mb-32">
          {/* Subtitle */}
          <div className="text-center mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-900">
              The Problem
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-center text-slate-950 mb-6 font-medium">
            Modern software is complex by nature
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-center max-w-2xl mx-auto text-base md:text-lg mb-16 leading-relaxed font-medium">
            AI and software products operate across data, systems, and automation. Steel provides a structured foundation to present that complexity with confidence — without locking you into a single narrative or industry.
          </p>

          {/* Custom Marquee Keyframes */}
          <style>{`
            @keyframes marquee-reverse {
              0% { transform: translateX(-2000px); }
              100% { transform: translateX(0); }
            }
            .animate-marquee-reverse {
              display: flex;
              width: max-content;
              animation: marquee-reverse 30s linear infinite;
            }
          `}</style>

          {/* Split Panel Visual Container */}
          <div className="w-full rounded-2xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden flex relative h-[250px] bg-slate-950">

            {/* Cinematic Central Radial Glow & Edge Darkening Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4)_0%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.92)_100%)] pointer-events-none z-20" />

            {/* Left Panel: Problem (Dark) */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-black overflow-hidden flex items-center z-10 border-r border-slate-800/30">
              {/* Plus grid background overlay */}
              <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

              {/* Glowing background blur */}
              <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-48 h-48 rounded-full bg-red-950/20 blur-3xl pointer-events-none" />

              {/* Marquee Track for Problems */}
              <div className="animate-marquee-reverse flex items-center">
                {/* 3 full copies to ensure infinite marquee width */}
                {Array(3).fill(comparisonItems).flat().map((item, idx) => (
                  <div key={`prob-${idx}`} className="w-[500px] shrink-0 flex justify-center px-3">
                    <div className="bg-red-500/10 text-red-400 border border-red-500/20 px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-[0_4px_12px_rgba(239,68,68,0.1)] w-full justify-center whitespace-nowrap">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400 font-extrabold text-xs">
                        ✕
                      </span>
                      {item.problem}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Overlapping Logo Badge with intense glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none md:pointer-events-auto">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-[0_0_50px_rgba(37,99,235,0.7)] flex items-center justify-center p-3 relative">
                {/* Pulse glow background ring */}
                <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl animate-pulse" />
                <img src="/straviobiru.png" alt="Straviolabs Blue Logo" className="w-full h-full object-contain relative z-10" />
              </div>
            </div>

            {/* Right Panel: Solution (Blue Gradient Grid) */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-800 overflow-hidden flex items-center z-10">
              {/* Plus grid background overlay */}
              <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

              {/* Marquee Track for Solutions */}
              <div className="animate-marquee-reverse flex items-center">
                {/* 3 full copies to ensure infinite marquee width */}
                {Array(3).fill(comparisonItems).flat().map((item, idx) => (
                  <div key={`sol-${idx}`} className="w-[500px] shrink-0 flex justify-center px-3">
                    <div className="bg-black text-white border border-white/15 px-6 py-3.5 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] w-full justify-center whitespace-nowrap">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white font-bold text-xs">
                        !
                      </span>
                      {item.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-[1200px] mx-auto pb-12">
          {/* Subtitle */}
          <div className="text-center mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-900">
              How It Works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-center text-slate-950 mb-16 font-medium">
            From complexity to clarity
          </h2>

          {/* 3-Column Joined Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch mb-16 rounded-[2rem] border border-slate-200/80 bg-slate-50/50 relative overflow-hidden shadow-sm">
            {/* Seamless Plus grid background for the entire container */}
            <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />

            {/* Card 01: Input */}
            <div className="p-8 md:p-10 flex flex-col justify-between min-h-[400px] relative">
              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">01</span>

                {/* Mock UI: Search/Text Input Box */}
                <div className="w-full bg-white border border-slate-200/80 rounded-xl px-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-2 mb-4 mt-16 h-16 relative">
                  <div className="w-0.5 h-5 bg-slate-400 animate-pulse" /> {/* Cursor Blinker */}
                </div>
              </div>

              {/* Info Content */}
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Input</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Introduce the problem your users face and the data or actions that start the process.
                </p>
              </div>
            </div>

            {/* Card 02: Intelligence */}
            <div className="bg-white p-8 md:p-10 flex flex-col justify-between min-h-[400px] relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.06)] border-x border-slate-100">
              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">02</span>

                {/* Visual: Glowing 3D Sphere */}
                <div className="w-full flex items-center justify-center my-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-400 relative flex items-center justify-center shadow-[0_12px_40px_rgba(37,99,235,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-300 opacity-60 blur-[1px]" />
                    <div className="absolute inset-0 rounded-full bg-radial from-white/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Info Content */}
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Intelligence</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  See how your system processes info automates decisions, or generates insights.
                </p>
              </div>
            </div>

            {/* Card 03: Output */}
            <div className="p-8 md:p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">03</span>

                {/* Mock UI: Marquee Icon Array */}
                <div className="relative w-full overflow-hidden flex items-center justify-center mb-4 mt-16 h-16">
                  {/* Left/Right fade masks */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

                  <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
                    {/* Loop icons twice for seamless marquee */}
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-4 shrink-0 px-2">
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center justify-center text-slate-600">
                          <LayoutDashboard className="w-5 h-5" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center justify-center text-slate-600">
                          <Compass className="w-5 h-5" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center justify-center text-slate-600">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center justify-center text-slate-600">
                          <Star className="w-5 h-5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Content */}
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-2">Output</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Get a full detailed answer of how to solve the problem your users face.
                </p>
              </div>
            </div>

          </div>



          {/* Services Section */}
          <section className="max-w-[1200px] mx-auto pb-32">
            {/* Subtitle */}
            <div className="text-center mb-4">
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-900">
                Our Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-center text-slate-950 mb-16 font-medium">
              End-to-end <span className="text-[#0052cc]">Solutions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,82,204,0.08)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MonitorPlay className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Web Design</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  We craft beautiful, high-converting landing pages and robust web applications tailored to your specific business needs.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,82,204,0.08)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Design</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Intuitive iOS and Android applications with flawless user experiences that keep your audience engaged on the go.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-slate-200/80 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,82,204,0.08)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Integration</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Seamlessly connect cutting-edge AI models into your existing workflows to automate tasks and unlock new capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="max-w-[1200px] mx-auto pb-32">
            {/* Subtitle */}
            <div className="text-center mb-4">
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-900">
                Case Studies
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-center text-slate-950 mb-16 font-medium">
              Proven <span className="text-[#0052cc]">Results</span>
            </h2>

            <div className="bg-white border border-slate-200/80 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col md:flex-row">
              {/* Left: Visual/Graphic */}
              <div className="md:w-1/2 bg-slate-50 p-12 relative flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200/80">
                <div className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none" />

                <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">FintechCorp</div>
                      <div className="text-xs text-slate-500">Financial Services</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-4/5"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <div className="text-3xl font-extrabold text-blue-600">+300%</div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Conversion</div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-6 w-fit">
                  <TrendingUp className="w-4 h-4" /> Success Story
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  How FintechCorp automated 80% of customer onboarding
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  By integrating our custom AI workflow, FintechCorp reduced their manual review process from 3 days to just 5 minutes, resulting in a massive boost to user acquisition and satisfaction.
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group">
                  Read Full Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>


          {/* FAQ Section */}
          <section className="max-w-[1200px] mx-auto pb-32 flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-900 mb-6 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-slate-950 font-medium">Frequently Asked<br />Questions</h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-3 w-full">
              {[
                {
                  q: "Is Straviolabs suitable for early-stage AI startups?",
                  a: "Yes. We launched our site with Straviolabs while still early-stage, and it gave us a clear structure to explain our product without needing a full marketing team."
                },
                {
                  q: "Can Straviolabs be customized to match our brand?",
                  a: "Absolutely. We updated colors, typography, and visuals quickly, and the layout still felt cohesive and premium rather than like a generic template."
                },
                {
                  q: "Does Straviolabs work for technical AI products like agents or APIs?",
                  a: "Yes, our flexible architecture allows you to easily showcase highly technical features, interactive API docs, and agent simulations."
                },
                {
                  q: "How easy is Straviolabs to edit?",
                  a: "Straviolabs is built on modern, clean code with a component-based structure, making it incredibly intuitive for developers and designers alike to modify."
                },
                {
                  q: "Does Straviolabs actually help with conversions?",
                  a: "By providing a premium, highly trustworthy aesthetic, Straviolabs instantly elevates your brand perception, which is a critical factor in driving user conversions."
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className={`transition-all duration-300 cursor-pointer overflow-hidden ${openFaqIndex === idx ? "bg-white border border-slate-200 shadow-sm rounded-xl" : "bg-slate-50 hover:bg-slate-100 rounded-xl"}`}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-slate-900 pr-8">{faq.q}</h4>
                    <div className="shrink-0">
                      <Plus className={`w-5 h-5 text-slate-900 transition-transform duration-300 ${openFaqIndex === idx ? "rotate-45" : ""}`} />
                    </div>
                  </div>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>

      {/* Bottom CTA Section */}
      <section className="relative w-full overflow-hidden py-32 bg-slate-950 flex flex-col items-center justify-center text-center">
        {/* Background Interactive Glow */}
        <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
          <Silk
            speed={3}
            scale={0.8}
            color="#2563eb"
            noiseIntensity={0.8}
            rotation={0}
          />
        </div>
        <div className="absolute inset-0 z-[1] grid-bg opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-[1000px] px-6 flex flex-col items-center">
          <div className="mb-6 text-[11px] font-bold tracking-[0.15em] text-white/80 uppercase">
            AI & SAAS INFRASTRUCTURE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.1] mb-10 max-w-4xl">
            Build software that feels precise, <br className="hidden md:block" /> powerful, and dependable.
          </h2>

          <div className="flex flex-row items-center justify-center gap-4">
            <a
              href="#get-started"
              className="px-6 py-3.5 text-xs font-bold tracking-wider rounded text-slate-950 bg-white hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2"
            >
              GET STARTED <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#book-demo"
              className="px-6 py-3.5 text-xs font-bold tracking-wider rounded text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              BOOK A DEMO <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white text-slate-900 px-6 md:px-12 py-24 border-t border-slate-100 z-30 relative w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/straviolabs.png" alt="Straviolabs Logo" className="w-8 h-8 object-contain brightness-0" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Straviolabs
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm">
              Sales, support, operations, and data - handled 24/7 by custom AI agents.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.027 0 12 0 12s0 3.973.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.973 24 12 24 12s0-3.973-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1: Company */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-sm font-bold text-slate-900 tracking-wider">Company</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                <a href="#" className="hover:text-slate-900 transition-colors">Platform</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
                <a href="#" className="hover:text-slate-900 transition-colors">About</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Blog</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="text-sm font-bold text-slate-900 tracking-wider">Solutions</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                <a href="#" className="hover:text-slate-900 transition-colors">AI Startups</a>
                <a href="#" className="hover:text-slate-900 transition-colors">SaaS Platforms</a>
                <a href="#" className="hover:text-slate-900 transition-colors">B2B Software</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Internal Tools & Automation</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Data & Intelligence Platforms</a>
                <a href="#" className="hover:text-slate-900 transition-colors">AI Agents</a>
              </div>
            </div>

            {/* Column 3: Get in Touch */}
            <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-1">
              <h4 className="text-sm font-bold text-slate-900 tracking-wider">Get in touch</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-500 font-medium">
                <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Book a call</a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-[1400px] mx-auto border-t border-slate-100 mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <span>&copy; 2026 Straviolabs. All rights reserved.</span>
          <span>
            Design by <span className="font-bold text-slate-900">Wize</span>
          </span>
        </div>
      </footer>
    </div>
  );
}

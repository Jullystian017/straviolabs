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
        <div className="absolute inset-0 z-[1] grid-bg opacity-100 pointer-events-none mix-blend-overlay" />

        {/* Header/Navbar */}
        <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled ? "pt-4 px-4 pointer-events-none" : ""} nav-item`}>
          <nav className={`mx-auto flex items-center justify-between transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? "max-w-[1050px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-6 py-2 border border-slate-200/50" 
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
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
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

              {/* Industries */}
              <div className="group relative">
                <button className={`flex items-center gap-1.5 transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                  Industries <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-[85%] left-1/2 -translate-x-1/3 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
                  }`}>
                    {/* Grid Left */}
                    <div className="flex-1 p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8 ${isScrolled ? "bg-slate-100 text-slate-800" : "bg-white/10 text-white"}`}>
                        Industries
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Wallet className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Fintech</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>AI-Powered Financial Services for Smarter Customer Engagement</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Stethoscope className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Healthcare</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Redefining Patient Care with AI-Powered Healthcare Assistants</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Edtech</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Empower Learners with Smart Educational Platforms</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Government</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Smart AI Solutions for Efficient Public Services</p>
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
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
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

              {/* Company */}
              <div className="group relative">
                <button className={`flex items-center gap-1.5 transition py-4 ${isScrolled ? "hover:text-slate-900" : "hover:text-white"}`}>
                  Company <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-[85%] left-1/2 -translate-x-3/4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className={`w-[850px] rounded-2xl p-2 flex border transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-slate-100 text-slate-800" : "bg-slate-900/90 backdrop-blur-md border-white/10 text-slate-200"
                  }`}>
                    {/* Grid Left */}
                    <div className="flex-1 p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-8 ${isScrolled ? "bg-slate-100 text-slate-800" : "bg-white/10 text-white"}`}>
                        Company
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>About Us</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Our story and mission</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Careers</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Join our growing team</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Handshake className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Partnership</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Grow together with us</p>
                          </div>
                        </a>
                        <a href="#" className="flex gap-4 group/item">
                          <div className="w-11 h-11 rounded-xl bg-[#0052cc] text-white flex items-center justify-center shrink-0 shadow-md">
                            <Newspaper className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold mb-1 transition-colors ${isScrolled ? "text-slate-900 group-hover/item:text-[#0052cc]" : "text-white group-hover/item:text-blue-400"}`}>Blog & News</h4>
                            <p className={`text-xs leading-relaxed font-medium ${isScrolled ? "text-slate-500" : "text-slate-400"}`}>Latest updates and articles</p>
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

      </div>

      {/* Clean light theme sections */}
      <div className="relative bg-white text-slate-900 py-32 px-6 md:px-12 z-30">
        
        {/* The Problem Section */}
        <section className="max-w-[1200px] mx-auto mb-32">
          {/* Subtitle */}
          <div className="text-center mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#0052cc] uppercase">
              The Problem
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-slate-950 mb-6 font-sans">
            Modern software is complex by nature
          </h2>
          
          {/* Description */}
          <p className="text-slate-500 text-center max-w-2xl mx-auto text-base md:text-lg mb-16 leading-relaxed font-medium">
            AI and software products operate across data, systems, and automation. Steel provides a structured foundation to present that complexity with confidence — without locking you into a single narrative or industry.
          </p>

          {/* Split Panel Visual Container */}
          <div className="w-full rounded-2xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row relative min-h-[380px] bg-slate-950">
            {/* Left Panel: Problem (Dark) */}
            <div className="flex-1 bg-black p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]">
              {/* Abstract floating particles or glowing background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-red-950/20 blur-3xl pointer-events-none" />
              
              {/* Badges Stack */}
              <div className="flex flex-col gap-4 w-full max-w-md relative z-10">
                {/* Badge 1: Abstract and hard to trust (cut off style / floating) */}
                <div className="self-end translate-x-12 opacity-40 bg-red-500/5 text-red-500/50 border border-red-500/10 px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 select-none whitespace-nowrap">
                  Abstract and hard to trust
                </div>
                
                {/* Badge 2: New AI companies lack credibility */}
                <div className="self-center bg-red-500/10 text-red-400 border border-red-500/20 px-5 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-[0_4px_12px_rgba(239,68,68,0.1)]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400 font-extrabold text-xs">
                    ✕
                  </span>
                  New AI companies lack credibility with first-time visitors
                </div>
              </div>
            </div>

            {/* Center Overlapping Logo Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none md:pointer-events-auto">
              <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-[0_16px_36px_rgba(0,0,0,0.15)] flex items-center justify-center p-4">
                <img src="/straviolabs.png" alt="Straviolabs Logo" className="w-12 h-12 object-contain" />
              </div>
            </div>

            {/* Right Panel: Solution (Blue Gradient Grid) */}
            <div className="flex-1 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-800 p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]">
              {/* Plus grid background overlay */}
              <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, white 10%, transparent 11%)`,
                backgroundSize: '20px 20px'
              }} />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />

              {/* Badges Stack */}
              <div className="flex flex-col gap-4 w-full max-w-md relative z-10">
                <div className="flex items-center gap-4 w-full">
                  {/* Badge 1: Feel relatable */}
                  <div className="-translate-x-12 opacity-50 bg-black text-white/50 border border-white/5 px-5 py-2.5 rounded-full text-xs font-semibold select-none whitespace-nowrap">
                    Feel relatable
                  </div>

                  {/* Badge 2: Built-in trust sections */}
                  <div className="bg-black text-white border border-white/15 px-5 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] whitespace-nowrap">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white font-bold text-xs">
                      !
                    </span>
                    Built-in trust sections that establish authority and social proof
                  </div>
                  
                  {/* Badge 3: Check cut off */}
                  <div className="opacity-50 bg-black text-white/50 border border-white/5 px-5 py-2.5 rounded-full text-xs font-semibold flex items-center justify-center w-10 h-10 select-none shrink-0">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-[1200px] mx-auto pb-12">
          {/* Subtitle */}
          <div className="text-center mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#0052cc] uppercase">
              How It Works
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-slate-950 mb-16 font-sans">
            From complexity to clarity
          </h2>

          {/* 3-Column Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
            
            {/* Card 01: Input */}
            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden group hover:border-slate-300 transition-all duration-300">
              {/* Faint plus grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />

              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">01</span>
                
                {/* Mock UI: Search/Text Input Box */}
                <div className="w-full bg-white border border-slate-200/80 rounded-xl py-3.5 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center gap-2 mb-12 mt-4 relative">
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
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.04)] z-10 group hover:shadow-[0_32px_64px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-300">
              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">02</span>
                
                {/* Visual: Glowing 3D Sphere */}
                <div className="w-full flex items-center justify-center my-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-400 relative flex items-center justify-center shadow-[0_12px_36px_rgba(37,99,235,0.4)] animate-bounce" style={{ animationDuration: '4s' }}>
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
            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-8 flex flex-col justify-between min-h-[380px] relative overflow-hidden group hover:border-slate-300 transition-all duration-300">
              {/* Faint plus grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />

              <div>
                {/* Step Indicator */}
                <span className="text-xs font-bold text-slate-400 block mb-8">03</span>
                
                {/* Mock UI: Tab Menu Array */}
                <div className="flex items-center gap-3 justify-center mb-12 mt-6">
                  {/* Circular Button 1 */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.01)] flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors">
                    <Compass className="w-4 h-4" />
                  </div>
                  {/* Circular Button 2 */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.01)] flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors">
                    <Zap className="w-4 h-4" />
                  </div>
                  {/* Circular Button 3 */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.01)] flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors">
                    <Star className="w-4 h-4" />
                  </div>
                  {/* Circular Button 4 */}
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.01)] flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-colors">
                    <LayoutDashboard className="w-4 h-4" />
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

          {/* CTA bottom button */}
          <button className="bg-black text-white px-8 py-4 rounded-xl text-xs font-extrabold tracking-widest hover:bg-slate-900 transition-all flex items-center gap-2 mt-8 mx-auto shadow-md group cursor-pointer">
            TRANSFORM YOUR OPERATIONS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>

      </div>
    </div>
  );
}

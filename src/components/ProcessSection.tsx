"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const steps = [
  {
    id: "01",
    title: "Strategy",
    description: "We define direction, structure, and positioning to support every design decision.",
    tags: ["BRAND STRATEGY", "MESSAGING", "ROADMAP"]
  },
  {
    id: "02",
    title: "Design",
    description: "We craft visually stunning and highly functional interfaces that users love.",
    tags: ["UI/UX", "PROTOTYPING", "WIREFRAMING"]
  },
  {
    id: "03",
    title: "Development",
    description: "Our engineers build robust, scalable architecture tailored to your needs.",
    tags: ["FRONTEND", "BACKEND", "INFRASTRUCTURE"]
  },
  {
    id: "04",
    title: "Implementation",
    description: "We deploy the solution smoothly and integrate it with your existing workflows.",
    tags: ["DEPLOYMENT", "INTEGRATION", "CI/CD"]
  },
  {
    id: "05",
    title: "Optimization",
    description: "Continuous monitoring and refinement to ensure peak performance.",
    tags: ["ANALYTICS", "PERFORMANCE", "SCALING"]
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !arcRef.current) return;

    // Create a ScrollTrigger that pins the container and scrubs through the timeline
    const totalSteps = steps.length;
    
    // Each step is spaced by an angle. Let's say the arc rotates 180 degrees total or maybe just enough to bring the next items up.
    // Let's use simple discrete snap or scrub.
    // If we have 5 items, we can rotate the wheel by -45 degrees per step for example.
    const rotationPerStep = 45;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalSteps * 100}%`, // scroll length depends on number of steps
        pin: true,
        scrub: 1, // smooth scrubbing
        onUpdate: (self) => {
          // Calculate which step is active based on progress (0 to 1)
          const progress = self.progress;
          const index = Math.min(
            totalSteps - 1,
            Math.floor(progress * totalSteps)
          );
          setActiveStepIndex(index);
        }
      }
    });

    // Animate the rotation of the arc
    tl.to(arcRef.current, {
      rotation: -(totalSteps - 1) * rotationPerStep,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  const activeStep = steps[activeStepIndex];

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#fafafa] text-slate-900 overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background decorations */}
      <div className="absolute inset-0 grid-bg-light opacity-20 pointer-events-none" />

      {/* Top Title */}
      <div className="absolute top-24 left-0 right-0 text-center z-20">
        <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-slate-500 mb-4 block">
          PROCESS
        </span>
        <h2 className="text-4xl md:text-6xl font-medium font-sans tracking-tight text-slate-950">
          A collaborative approach
        </h2>
      </div>

      {/* The Arc Graphic */}
      {/* We make a huge circle that acts as the arc */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] md:w-[1600px] md:h-[1600px] z-10 pointer-events-none">
        <div 
          ref={arcRef}
          className="w-full h-full rounded-full border-[1px] border-slate-200 relative"
          style={{ transformOrigin: "center center" }}
        >
          {/* Place markers along the top edge of the circle */}
          {steps.map((step, idx) => {
            // Position them along the circumference
            // Center top is -90 degrees in CSS rotation (if 0 is right)
            // But we can just rotate each marker from the center
            const rotation = idx * 45; // 45 degrees apart
            return (
              <div 
                key={step.id}
                className="absolute top-0 left-1/2 w-0 h-full flex justify-center"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "center center"
                }}
              >
                {/* The Marker */}
                <div className="absolute top-[-24px] flex flex-col items-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 bg-[#fafafa] px-2">
                    STEP
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-md transition-colors duration-300 ${
                    activeStepIndex === idx 
                      ? "bg-orange-500 text-white" 
                      : "bg-white text-slate-400 border border-slate-200"
                  }`}
                  style={{
                    // Counter-rotate so the text stays upright
                    // The parent is rotated by 'rotation', and the arc is rotated by timeline
                    // This can be tricky. A simpler way is to just let the numbers rotate or counter-rotate via state.
                    // For now, we will let them rotate with the wheel, but counter rotate the text slightly if needed.
                  }}>
                    <div style={{ transform: `rotate(${-rotation}deg)` }}>
                      {step.id}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center Content for the Active Step */}
      <div className="relative z-30 mt-32 max-w-lg text-center flex flex-col items-center">
        
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 transition-all duration-300">
          {activeStep.title}
        </h3>
        
        <p className="text-slate-500 mb-8 min-h-[60px] text-lg px-6">
          {activeStep.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 border-t border-b border-slate-200/50 py-4 w-full">
          {activeStep.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="text-xs font-bold tracking-[0.15em] text-slate-400 uppercase">
                {tag}
              </span>
              {i < activeStep.tags.length - 1 && (
                <span className="text-slate-300">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-[0_4px_14px_rgba(249,115,22,0.3)]">
          Start your project
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center z-20">
        <div className="text-xs font-bold text-slate-400 tracking-[0.2em] mb-3">
          0{activeStepIndex + 1}/05
        </div>
        <div className="flex gap-2">
          {steps.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeStepIndex === idx ? "bg-orange-500" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Register GSAP ScrollTrigger for scroll-based animations
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Animate all elements with data-animate attribute
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((el) => {
        const type = el.getAttribute("data-animate");
        const delay = parseFloat(el.getAttribute("data-delay") || "0");
        const fromVars: Record<string, unknown> = { opacity: 0, duration: 0.8, delay, ease: "power3.out" };

        switch (type) {
          case "fade-up":
            fromVars.y = 40;
            break;
          case "fade-down":
            fromVars.y = -40;
            break;
          case "fade-left":
            fromVars.x = 60;
            break;
          case "fade-right":
            fromVars.x = -60;
            break;
          case "scale":
            fromVars.scale = 0.9;
            break;
          case "fade":
          default:
            break;
        }

        gsap.from(el, {
          ...fromVars,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    };

    init();
  }, []);

  return null;
}

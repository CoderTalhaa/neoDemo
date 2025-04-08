"use client";
import Scene from "@/components/three/Scene";
import Contact from "@/components/ui/Contact";
import Marque from "@/components/ui/Marque";
import Section1 from "@/components/ui/Section1";
import Section2 from "@/components/ui/Section2";
import SerText from "@/components/ui/SerText";
import Services from "@/components/ui/Services";
import Button from "@/components/utils/Button";
import LoadingScreen from "@/components/utils/loadingScreen/LoadingScreen";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useTalhaStore from "@/store/useStore";
import { useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const { isLoading, setIsLoading } = useTalhaStore();

  const isMobile = useMediaQuery("(max-width: 768px)", false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: isMobile ? 0.1 : 0.06,
      smooth: true,
      wheelMultiplier: isMobile ? 1.2 : 0.5,
      touchMultiplier: 1.0,
    });

    lenis.stop();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const handleLoadingCompletion = () => {
      setIsLoading(false);
      lenis.scrollTo(0, { immediate: true });
      lenis.start();
    };

    if (!isLoading) handleLoadingCompletion();

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, [isLoading]);

  const section1 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: section1,
    offset: ["start 30%", "end end"],
  });

  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 800,
    damping: 20,
    mass: 0.1,
  });

  const section2 = useRef(null);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2,
    offset: ["start 50%", "end end"],
  });

  const smoothScrollY2 = useSpring(scrollYProgress2, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      {/* <FireflyCanvas/> */}

      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      <Scene scrollY={scrollYProgress} scrollY2={smoothScrollY2} />

      <main className="relative min-h-screen bg-bg bg-custom-gradient overflow-hidden">
        {/* Content on top of firefly */}
        <div className="container flex flex-col items-center justify-center h-[90vh] relative  logo">
          <h2 className="absolute z-0 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 ~text-xl/4xl font-nunito font-bold text-center">
            Embracing Todays Technology
          </h2>
          <div
            className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-button hover:bg-opacity-80 text-base md:text-lg mt-1 md:mt-0 text-white font-medium md:py-2.5 md:px-6 py-1 px-2 rounded-full transition-colors duration-200"
            onClick={() => {
              const element = document.getElementById("websiteDesignHosting");
              if (element) {
                const offsetTop = element.offsetTop + 1400;
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
          >
            Get Started
          </div>

          <div className="absolute top-[93%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex gap-2 items-center">
            <div>
              <p className="~text-lg/3xl font-primary text-center">Scroll</p>
            </div>
            <div className="scrolldown mt-5" style={{ "--color": "skyblue" }}>
              <div className="chevrons">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
              </div>
            </div>
            <p className="~text-lg/3xl font-primary text-center">Down</p>
          </div>
        </div>

        <Marque />
      </main>

      <SerText />
      <div ref={section1} id="websiteDesignHosting" className="relative">
        <Section1 />
        <Services scrollY={scrollYProgress} />
      </div>

      <div ref={section2} className="relative ">
        <Section2 scrollY={smoothScrollY2} />
      </div>
      <Contact />
    </>
  );
}

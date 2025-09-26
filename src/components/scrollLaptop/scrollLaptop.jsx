// ScrollLaptop.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import laptopImage from "../../assets/blanklaptop.webp";
import crmImage from "../../assets/ziplofyscreen.png";

const ScrollLaptop = () => {
  const ref = useRef(null);
  
  // Hook into scroll within this container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // starts when bottom of element hits viewport, ends when top leaves
  });

  // Map scroll progress [0 to 1] => scale [0.5 to 1]
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="  flex items-center justify-center px-10">
      <div ref={ref} className="relative p-4">
        {/* Laptop Frame */}
        <img
          src={laptopImage}
          alt="Laptop Frame"
          className="w-full h-full object-contain z-10 relative"
        />

        {/* CRM Image inside laptop */}
        <motion.img
          src={crmImage}
          alt="CRM Screen"
          className="absolute top-[6%] left-[6%] w-[88%] h-[100%] object-contain z-0 rounded-md"
          style={{ scale }}
        />
      </div>
    </div>
  );
};

export default ScrollLaptop;

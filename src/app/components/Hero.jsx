'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Background moves at 50% speed of scroll (Parallax)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen ..."> 
      
      {/* Apply the parallax to the background blobs */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* ... existing content ... */}
      </motion.div>

    </section>
  )
}
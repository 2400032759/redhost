"use client";

import * as React from 'react';
import { motion } from 'framer-motion';

type TestimonialCardProps = {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  image?: string;
};

function getClientX(e: MouseEvent | TouchEvent | PointerEvent): number {
  if ("clientX" in e) return e.clientX;
  if ("touches" in e && e.touches.length > 0) return e.touches[0].clientX;
  if ("changedTouches" in e && e.changedTouches.length > 0) return e.changedTouches[0].clientX;
  return 0;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, image }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0"
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        // @ts-ignore
        dragRef.current = getClientX(e);
      }}
      onDragEnd={(e) => {
        // @ts-ignore
        if (dragRef.current - getClientX(e) > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[320px] w-[90vw] max-w-[350px] sm:h-[450px] sm:w-[350px] select-none place-content-center space-y-4 sm:space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-4 sm:p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={image ? image : `https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&h=128&q=80&img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-20 w-20 sm:h-32 sm:w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
  <span className="text-center text-base sm:text-lg italic text-accent font-rajdhani font-semibold bg-black/60 px-3 py-2 rounded-md shadow-md" style={{textShadow: '0 2px 8px #0008'}}>"{testimonial}"</span>
  <span className="text-center text-xs sm:text-sm font-bold text-primary font-orbitron bg-black/50 px-2 py-1 rounded shadow" style={{textShadow: '0 2px 8px #0008'}}>{author}</span>
    </motion.div>
  );
}

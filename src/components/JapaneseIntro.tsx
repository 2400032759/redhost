import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";

const JapaneseIntro = ({ onComplete }: { onComplete: () => void }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // 0s: Init Text
        // 1.5s: Writing Start
        // 4.5s: Fill
        // 6s: Exit
        const timers = [
            setTimeout(() => setStep(1), 500),
            setTimeout(() => setStep(2), 4500), // Fill
            setTimeout(() => setStep(3), 6000), // Exit
            setTimeout(() => onComplete(), 7000),
        ];
        return () => timers.forEach((t) => clearTimeout(t));
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Background: Soft Ambient Neon Glow + Hologram Lines */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Ambient Glow - Blue/Cyan for Silicon Valley feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />

                {/* Subtle Holographic Grid (Soft Lines) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            {/* Floating Soft Particles - Cyan/White */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full blur-[1px]"
                        initial={{ x: Math.random() * 100 + "vw", y: Math.random() * 100 + "vh", opacity: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: "-=30px",
                            x: (Math.random() - 0.5) * 20 + "px"
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Trust Header - Blue/Clean */}
            <div className="absolute top-10 md:top-16 left-0 w-full text-center z-30">
                <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-cyan-400/80 font-orbitron tracking-widest text-sm md:text-base uppercase mb-2 flex justify-center items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    Initializing Premium Workspace...
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white/50 font-sans tracking-wide text-xs md:text-sm flex justify-center items-center gap-3"
                >
                    <ShieldCheck className="w-3 h-3 text-cyan-500/70" />
                    Secure. Verified. Enterprise-Grade.
                </motion.p>
            </div>

            {/* Main Content */}
            <div className="relative z-20 w-full max-w-6xl px-4 flex flex-col items-center">

                {/* THE WRITING ANIMATION */}
                <svg viewBox="0 0 800 200" className="w-full max-w-4xl h-auto overflow-visible">
                    <defs>
                        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Japanese: ようこそ (Welcome) - White/Blue */}
                    <motion.text
                        x="50%"
                        y="30%"
                        textAnchor="middle"
                        className="text-4xl font-serif fill-transparent stroke-cyan-500/50"
                        style={{ fontSize: "40px", fontWeight: "bold", letterSpacing: "10px", filter: "url(#soft-glow)" }}
                        strokeWidth="1"
                        initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
                        animate={step >= 1 ? { strokeDashoffset: 0 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        ようこそ
                    </motion.text>

                    {/* English: REDHOST - Starts White/Blue -> Turns Red (Brand) */}
                    <motion.text
                        x="50%"
                        y="70%"
                        textAnchor="middle"
                        className="text-8xl font-black font-orbitron fill-transparent stroke-white/80"
                        style={{ fontSize: "80px", filter: "url(#soft-glow)" }}
                        strokeWidth="2"
                        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
                        animate={step >= 1 ? { strokeDashoffset: 0 } : {}}
                        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                    >
                        REDHOST
                    </motion.text>

                    {/* Fill Animation - Brand Red */}
                    {step >= 2 && (
                        <motion.text
                            x="50%"
                            y="70%"
                            textAnchor="middle"
                            className="text-8xl font-black font-orbitron fill-red-600 stroke-none"
                            style={{ fontSize: "80px", filter: "url(#soft-glow)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            REDHOST
                        </motion.text>
                    )}
                </svg>

                {/* Tagline */}
                <motion.p
                    className="mt-6 text-white/70 font-sans text-lg md:text-xl tracking-wide text-center"
                    initial={{ opacity: 0 }}
                    animate={step >= 1 ? { opacity: 1, transition: { delay: 3.5 } } : {}}
                >
                    Powered by Japanese Precision. Engineered for Digital Dominance.
                </motion.p>

            </div>

            {/* Security Footer */}
            <div className="absolute bottom-6 left-0 w-full text-center z-30">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center gap-1"
                >
                    <p className="text-[10px] md:text-xs text-white/30 font-sans uppercase tracking-widest flex items-center gap-2">
                        <Lock className="w-3 h-3" /> RedHost Secure Framework • 256-bit Protection Active
                    </p>
                </motion.div>
            </div>

            {/* Smooth Transition Out (White/Light Flash instead of glitch) */}
            {step === 3 && (
                <motion.div
                    className="absolute inset-0 z-50 bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            )}

        </motion.div>
    );
};

export default JapaneseIntro;

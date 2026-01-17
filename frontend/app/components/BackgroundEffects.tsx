"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BackgroundEffects() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    scaleX,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary), var(--accent))',
                    transformOrigin: '0%',
                    zIndex: 1000
                }}
            />

            {/* Interactive Grid Background */}
            <motion.div
                className="grid-bg"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.2 }}
            />

            {/* Dynamic Glow Orbs */}
            <motion.div
                className="glow-orb"
                style={{ top: '-100px', right: '-100px' }}
                animate={{
                    x: mousePos.x * -1.5,
                    y: mousePos.y * -1.5,
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="glow-orb"
                style={{ bottom: '-100px', left: '-100px', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)' }}
                animate={{
                    x: mousePos.x * 1.5,
                    y: mousePos.y * 1.5,
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </>
    );
}

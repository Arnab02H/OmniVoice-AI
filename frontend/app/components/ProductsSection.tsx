"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Mic, CheckCircle2, Headphones, TrendingUp, Sparkles, Languages, Info, ArrowRight, Zap, BarChart3, Globe, Volume2, Radio } from "lucide-react";
import { useState, useEffect } from "react";

interface ProductsSectionProps {
    setStep: (step: number) => void;
}

export default function ProductsSection({ setStep }: ProductsSectionProps) {
    const [showToast, setShowToast] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleLearnMore = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const products = [
        {
            title: "OmniVoice Connect",
            icon: <Mic size={isMobile ? 32 : 40} />,
            subtitle: "For Individuals (B2C)",
            description: "Your personal voice companion. OmniVoice Connect translates real-time speech, synthesizes natural audio, and manages your voice interactions seamlessly.",
            features: [
                { text: "Real-time voice translation", icon: <Languages size={16} /> },
                { text: "Smart noise cancellation", icon: <Zap size={16} /> },
                { text: "Natural voice synthesis", icon: <Volume2 size={16} /> },
                { text: "Multi-device voice sync", icon: <Globe size={16} /> }
            ],
            color: "var(--primary)",
            gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)"
        },
        {
            title: "OmniVoice Suite",
            icon: <LayoutDashboard size={isMobile ? 32 : 40} />,
            subtitle: "For Business (B2B)",
            description: "A comprehensive enterprise suite for voice automation. Deploy intelligent IVRs, automated support agents, and analyze every interaction with precision.",
            features: [
                { text: "AI Voice Agent Generator", icon: <Sparkles size={16} /> },
                { text: "Enterprise VOIP Gateway", icon: <Radio size={16} /> },
                { text: "Voice sentiment analytics", icon: <BarChart3 size={16} /> },
                { text: "Global voice scalability", icon: <Globe size={16} /> }
            ],
            color: "#10b981",
            gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                paddingTop: isMobile ? '6rem' : '8rem',
                minHeight: '100vh',
                width: '100%',
                background: 'var(--background)',
                color: 'var(--foreground)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: isMobile ? '200px' : '400px', height: isMobile ? '200px' : '400px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15 }}></div>
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: isMobile ? '200px' : '400px', height: isMobile ? '200px' : '400px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15 }}></div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 1.25rem 4rem 1.25rem' : '0 2rem 6rem 2rem', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', marginBottom: '1.25rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)' }}
                    >
                        <Sparkles size={14} /> THE OMNIVOICE ECOSYSTEM
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: isMobile ? '2.25rem' : 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.05em', lineHeight: 1.1 }}
                    >
                        Two powerful ways to <br />
                        <span className="gradient-text">Handle Voice</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: isMobile ? '1.1rem' : '1.25rem', opacity: 0.6, maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}
                    >
                        Whether you're an individual looking for a voice companion or a business owner aiming for automation, OmniVoice.AI scales to your needs.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: isMobile ? '1.5rem' : '2.5rem',
                    perspective: '1000px'
                }}>
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 50, opacity: 0, rotateX: 10 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.8 }}
                            onMouseEnter={() => !isMobile && setHoveredIdx(idx)}
                            onMouseLeave={() => !isMobile && setHoveredIdx(null)}
                            className="glass-card"
                            style={{
                                padding: isMobile ? '2rem 1.5rem' : '3.5rem 3rem',
                                borderRadius: isMobile ? '30px' : '40px',
                                border: `1px solid ${hoveredIdx === idx ? product.color : 'rgba(255,255,255,0.1)'}`,
                                background: 'rgba(255,255,255,0.02)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: isMobile ? '1.5rem' : '2rem',
                                position: 'relative',
                                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                transform: hoveredIdx === idx ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
                                boxShadow: hoveredIdx === idx ? `0 20px 40px -12px ${product.color}20` : 'none',
                                cursor: 'default'
                            }}
                        >
                            {/* Gradient Background Blobs */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: product.gradient,
                                opacity: hoveredIdx === idx ? 0.4 : 0.1,
                                transition: 'opacity 0.5s ease',
                                borderRadius: isMobile ? '30px' : '40px',
                                zIndex: -1
                            }}></div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                <div style={{
                                    width: isMobile ? '60px' : '80px',
                                    height: isMobile ? '60px' : '80px',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: (hoveredIdx === idx || (isMobile && idx === hoveredIdx)) ? 'white' : product.color,
                                    background: (hoveredIdx === idx || (isMobile && idx === hoveredIdx)) ? product.color : 'rgba(255,255,255,0.05)',
                                    transition: 'all 0.4s ease',
                                    boxShadow: hoveredIdx === idx ? `0 0 20px ${product.color}40` : 'none'
                                }}>
                                    {product.icon}
                                </div>
                                <div style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 800,
                                    color: product.color,
                                    letterSpacing: '2px',
                                    opacity: 0.8
                                }}>
                                    {product.subtitle}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.03em', lineHeight: 1.2 }}>{product.title}</h3>
                                <p style={{ opacity: 0.7, lineHeight: 1.6, fontSize: isMobile ? '0.95rem' : '1.1rem' }}>{product.description}</p>
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 800, fontSize: '0.85rem', marginBottom: '1.25rem', opacity: 1, textTransform: 'uppercase', letterSpacing: '1px' }}>Capabilities:</div>
                                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0.8rem' : '1.2rem' }}>
                                    {product.features.map((feature, fIdx) => (
                                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', opacity: 0.9, fontWeight: 500 }}>
                                            <div style={{ color: product.color, flexShrink: 0 }}>{feature.icon}</div>
                                            <span>{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLearnMore}
                                style={{
                                    width: '100%',
                                    padding: '1.1rem',
                                    borderRadius: '16px',
                                    background: (hoveredIdx === idx || isMobile) ? 'white' : 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    color: (hoveredIdx === idx || isMobile) ? 'black' : 'white',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    marginTop: '1.5rem'
                                }}
                            >
                                {isMobile ? "See Full Details" : "Explore Further"} <ArrowRight size={20} />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: isMobile ? '4rem' : '6rem' }}>
                    <div style={{ opacity: 0.4, fontSize: '0.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '30px', height: '1px', background: 'white' }}></div>
                        READY TO BEGIN?
                        <div style={{ width: '30px', height: '1px', background: 'white' }}></div>
                    </div>
                    <button
                        className="btn-primary"
                        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', width: isMobile ? '100%' : 'auto', borderRadius: '100px', boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Get Started
                    </button>
                    <p style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.95rem', cursor: 'pointer', fontWeight: 600 }} onClick={() => setStep(0)}>
                        ← Back Home
                    </p>
                </div>
            </div>

            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        style={{
                            position: 'fixed',
                            bottom: isMobile ? '1.5rem' : '3rem',
                            left: '50%',
                            zIndex: 1000,
                            padding: isMobile ? '0.8rem 1.5rem' : '1.2rem 2.5rem',
                            background: 'rgba(20, 20, 25, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--primary)',
                            borderRadius: '100px',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            fontWeight: 700,
                            fontSize: isMobile ? '0.85rem' : '1rem',
                            width: isMobile ? '90%' : 'auto',
                            justifyContent: 'center'
                        }}
                    >
                        <Info size={isMobile ? 18 : 22} color="var(--primary)" />
                        Coming Soon to OmniVoice.AI! 🚀
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .glass-card:hover {
                    border-color: rgba(255,255,255,0.3) !important;
                }
            `}</style>
        </motion.section>
    );
}

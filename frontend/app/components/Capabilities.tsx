"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, Radio, Volume2, TrendingUp, Settings, Activity, Sparkles, Play, ChevronDown, Rocket, Headphones, Heart, Truck, MessageSquare, Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Capabilities() {
    const [selectedCase, setSelectedCase] = useState(4); // Default to Logistics
    const [isMobile, setIsMobile] = useState(false);
    const [showLangMenu, setShowLangMenu] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const indianLanguages = [
        { name: 'Hindi', flag: '🇮🇳' },
        { name: 'Bengali', flag: '🇮🇳' },
        { name: 'Telugu', flag: '🇮🇳' },
        { name: 'Marathi', flag: '🇮🇳' },
        { name: 'Tamil', flag: '🇮🇳' },
        { name: 'Gujarati', flag: '🇮🇳' },
        { name: 'Kannada', flag: '🇮🇳' },
        { name: 'Odia', flag: '🇮🇳' },
        { name: 'Malayalam', flag: '🇮🇳' },
        { name: 'Punjabi', flag: '🇮🇳' }
    ];

    const useCases = [
        {
            label: 'Debt Collection',
            icon: <Volume2 size={13} />,
            tag: 'FRUSTRATED',
            transcript: 'चार महीने हो गए... और अभी भी पेमेंट नहीं आया।',
            lang: 'Hindi',
            color: '#ef4444'
        },
        {
            label: 'Customer Support',
            icon: <Headphones size={13} />,
            tag: 'HELPFUL',
            transcript: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? क्या आपको ऑर्डर में समस्या है?',
            lang: 'Hindi',
            color: '#10b981'
        },
        {
            label: 'AI Companionship',
            icon: <Heart size={13} />,
            tag: 'COMFORTING',
            transcript: 'Hey there! I am here to listen whenever you need a friend.',
            lang: 'English',
            color: '#ec4899'
        },
        {
            label: 'Sales & Leads',
            icon: <Rocket size={13} />,
            tag: 'EXCITED',
            transcript: 'Our new plan is perfect for your business! Want to see a demo?',
            lang: 'English',
            color: '#6366f1'
        },
        {
            label: 'Logistics AI',
            icon: <Truck size={13} />,
            tag: 'SHOUTING',
            transcript: 'শোনো, তোমার পার্সেল আসছে [cough] , রেডি হয়ে থেকো',
            lang: 'Bengali',
            color: '#f97316'
        }
    ];

    return (
        <section id="capabilities" style={{
            padding: isMobile ? '2rem 1rem' : '4rem 2rem',
            background: '#050507',
            position: 'relative',
            overflow: 'hidden',
            width: '100%'
        }}>
            {/* Ambient Background Glows */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3.5rem' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.2rem', fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.5px' }}
                    >
                        <Radio size={12} className="animate-pulse" /> LIVE VOICE INTELLIGENCE
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: isMobile ? '1.8rem' : '2.8rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.1 }}
                    >
                        Experience the <span className="gradient-text">Future of Voice</span>
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '250px 1fr',
                    gap: isMobile ? '1.5rem' : '2rem',
                    alignItems: 'center'
                }}>

                    {/* Left: Phone Mockup (Reduced Size) */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                width: isMobile ? '220px' : '230px',
                                height: isMobile ? '430px' : '460px',
                                background: '#000',
                                borderRadius: '40px',
                                border: '1px solid #1a1a1f',
                                boxShadow: '0 30px 80px rgba(0,0,0,0.8), inset 0 0 0 7px #08080a',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ position: 'absolute', inset: '6px', borderRadius: '34px', overflow: 'hidden', background: '#020205' }}>
                                <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem 1.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>

                                    <div style={{ alignSelf: 'center', marginBottom: '1.5rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Mic size={16} color="white" />
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedCase}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            style={{ flex: 1 }}
                                        >
                                            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                {useCases[selectedCase].lang} Mode
                                            </div>

                                            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'white', lineHeight: 1.4 }}>
                                                {useCases[selectedCase].transcript}
                                            </div>

                                            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.6rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.8)' }}>
                                                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981' }} />
                                                    Emotion: Aware
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.6rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.8)' }}>
                                                    <Activity size={10} color="var(--primary)" />
                                                    Latency: 42ms
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div style={{ marginTop: 'auto' }}>
                                        <div style={{ width: '100%', padding: '0.5rem', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>
                                            <Settings size={11} /> AI Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '18px', background: '#000', borderRadius: '9px', zIndex: 100 }}></div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive Card (Compact Size) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(20, 20, 25, 0.7)',
                            borderRadius: '28px',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            padding: isMobile ? '1.5rem' : '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: isMobile ? '1.5rem' : '2rem',
                            position: 'relative',
                            minHeight: isMobile ? 'auto' : '440px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(15px)'
                        }}
                    >
                        {/* Transcription Section */}
                        <div style={{ display: 'flex', gap: isMobile ? '0.8rem' : '2rem', alignItems: 'flex-start' }}>
                            {!isMobile && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '90px', flexShrink: 0, paddingTop: '8px' }}>
                                    <motion.div
                                        key={`tag1-${selectedCase}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '6px',
                                            background: `${useCases[selectedCase].color}12`,
                                            border: `1px solid ${useCases[selectedCase].color}30`,
                                            color: useCases[selectedCase].color,
                                            fontSize: '0.65rem',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {useCases[selectedCase].tag}
                                    </motion.div>
                                    <motion.div
                                        key={`tag2-${selectedCase}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        style={{
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '6px',
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            color: useCases[selectedCase].color,
                                            fontSize: '0.65rem',
                                            fontWeight: 900,
                                            textAlign: 'center'
                                        }}
                                    >
                                        /{useCases[selectedCase].tag}
                                    </motion.div>
                                </div>
                            )}

                            <div style={{ flex: 1 }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedCase}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            fontSize: isMobile ? '1.3rem' : '2.1rem',
                                            fontWeight: 800,
                                            lineHeight: 1.25,
                                            color: 'white'
                                        }}
                                    >
                                        {isMobile && (
                                            <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: '5px', background: `${useCases[selectedCase].color}12`, border: `1px solid ${useCases[selectedCase].color}30`, color: useCases[selectedCase].color, fontSize: '0.6rem', fontWeight: 900, marginRight: '0.6rem', verticalAlign: 'middle' }}>{useCases[selectedCase].tag}</span>
                                        )}
                                        {useCases[selectedCase].transcript.split('[cough]').map((part, idx, arr) => (
                                            <span key={idx}>
                                                {part}
                                                {idx < arr.length - 1 && (
                                                    <span style={{ color: '#64748b', fontStyle: 'italic', fontWeight: 500, fontSize: '0.85em', margin: '0 0.5rem' }}>[cough]</span>
                                                )}
                                            </span>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Use Case Selection */}
                        <div className="hide-scroll" style={{
                            display: 'flex',
                            gap: '0.7rem',
                            overflowX: 'auto',
                            paddingBottom: '0.4rem'
                        }}>
                            {useCases.map((uc, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => setSelectedCase(i)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '0.6rem 1.1rem',
                                        borderRadius: '12px',
                                        background: selectedCase === i ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                                        border: `1.2px solid ${selectedCase === i ? 'var(--primary)' : 'rgba(255,255,255,0.08)'}`,
                                        color: selectedCase === i ? 'white' : 'rgba(255,255,255,0.5)',
                                        fontSize: '0.8rem',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <span style={{ color: selectedCase === i ? 'var(--primary)' : 'inherit' }}>{uc.icon}</span>
                                    {uc.label}
                                </motion.button>
                            ))}
                        </div>

                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', width: '100%' }}></div>

                        {/* Language Selector & Actions */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1.2rem',
                            marginTop: 'auto'
                        }}>
                            <div style={{ position: 'relative' }}>
                                <motion.div
                                    onClick={() => setShowLangMenu(!showLangMenu)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1rem', borderRadius: '100px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'white', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    <Globe size={14} color="var(--primary)" />
                                    {useCases[selectedCase].lang}
                                    <ChevronDown size={12} style={{ transform: showLangMenu ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                                </motion.div>

                                <AnimatePresence>
                                    {showLangMenu && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: -240 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            style={{ position: 'absolute', bottom: '100%', left: 0, width: '180px', background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '0.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 1000, marginBottom: '0.8rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem' }}
                                        >
                                            {indianLanguages.map((lang) => (
                                                <div key={lang.name} onClick={() => setShowLangMenu(false)} style={{ padding: '0.4rem', borderRadius: '6px', fontSize: '0.75rem', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }} className="lang-item">
                                                    <span>{lang.flag}</span> {lang.name}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div style={{ display: 'flex', gap: '0.8rem' }}>
                                <motion.button
                                    style={{ padding: '0.7rem 1.4rem', borderRadius: '100px', border: '1.2px solid rgba(255, 255, 255, 0.1)', background: 'transparent', color: 'white', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                                >
                                    Try for free
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ padding: '0.7rem 1.8rem', borderRadius: '100px', background: 'white', color: 'black', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
                                >
                                    <Play size={15} fill="black" /> Play Demo
                                </motion.button>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }
                .hide-scroll {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .lang-item:hover {
                    background: rgba(255, 255, 255, 0.05);
                }
            `}</style>
        </section>
    );
}

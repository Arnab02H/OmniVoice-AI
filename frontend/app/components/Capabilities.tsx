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
            color: '#ef4444',
            avatar: '/jake-head.png',
            avatarName: 'Jake',
        },
        {
            label: 'Customer Support',
            icon: <Headphones size={13} />,
            tag: 'HELPFUL',
            transcript: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? क्या आपको ऑर्डर में समस्या है?',
            lang: 'Hindi',
            color: '#10b981',
            avatar: '/samantha-head.png',
            avatarName: 'Samantha',
        },
        {
            label: 'AI Companionship',
            icon: <Heart size={13} />,
            tag: 'COMFORTING',
            transcript: 'Hey there! I am here to listen whenever you need a friend.',
            lang: 'English',
            color: '#ec4899',
            avatar: '/samantha-head.png',
            avatarName: 'Samantha',
        },
        {
            label: 'Sales & Leads',
            icon: <Rocket size={13} />,
            tag: 'EXCITED',
            transcript: 'Our new plan is perfect for your business! Want to see a demo?',
            lang: 'English',
            color: '#6366f1',
            avatar: '/patrick-head.png',
            avatarName: 'Patrick',
        },
        {
            label: 'Logistics AI',
            icon: <Truck size={13} />,
            tag: 'SHOUTING',
            transcript: 'শোনো, তোমার পার্সেল আসছে [cough] , রেডি হয়ে থেকো',
            lang: 'Bengali',
            color: '#f97316',
            avatar: '/jake-head.png',
            avatarName: 'Jake',
        }
    ];

    return (
        <section id="capabilities" style={{
            padding: isMobile ? '2rem 1rem' : '4rem 2rem',
            background: '#050507',
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            boxSizing: 'border-box'
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
                    gridTemplateColumns: isMobile ? '1fr' : 'minmax(260px, 320px) minmax(0, 1fr)',
                    gap: isMobile ? '1.5rem' : '3rem',
                    alignItems: 'center',
                    width: '100%'
                }}>

                    {/* Left: AI Avatar visualization */}
                    <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{
                                width: '100%',
                                height: isMobile ? '320px' : '460px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                background: 'transparent'
                            }}
                        >
                            {/* Avatar face glowing image */}
                            <div style={{ position: 'relative', width: isMobile ? '180px' : '230px', height: isMobile ? '220px' : '280px', marginTop: '10px' }}>
                                {/* Soft glow aura behind head */}
                                <div style={{
                                    position: 'absolute',
                                    top: '40%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '150px',
                                    height: '150px',
                                    background: 'rgba(255,255,255,0.15)',
                                    filter: 'blur(40px)',
                                    borderRadius: '50%',
                                    zIndex: 0
                                }}></div>
                                {/* Talking Face Mesh Animation */}
                                <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
                                    {/* Top Half of Face (Static/Breathing) */}
                                    <motion.img
                                        key={`avatar-top-${selectedCase}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1, y: [0, 1, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        src={useCases[selectedCase].avatar}
                                        alt={useCases[selectedCase].avatarName}
                                        style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            width: '100%', height: '100%',
                                            objectFit: 'contain',
                                            clipPath: 'inset(0 0 33% 0)', // Cuts off the bottom 33%
                                            WebkitClipPath: 'inset(0 0 33% 0)'
                                        }}
                                    />

                                    {/* Bottom Half of Face (Jaw/Mouth - Talking Animation) */}
                                    <motion.img
                                        key={`avatar-bot-${selectedCase}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1, y: [0, 3, 1, 4, 0, 2, 5, 1, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                        src={useCases[selectedCase].avatar}
                                        alt={useCases[selectedCase].avatarName}
                                        style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            width: '100%', height: '100%',
                                            objectFit: 'contain',
                                            clipPath: 'inset(67% 0 0 0)', // Cuts off the top 67%
                                            WebkitClipPath: 'inset(67% 0 0 0)'
                                        }}
                                    />
                                </div>
                                {/* Overlay fade bottom into darkness */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: '-50px',
                                    right: '-50px',
                                    height: '150px',
                                    background: 'linear-gradient(to top, #050507 30%, transparent)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}></div>
                            </div>

                            {/* Avatar details block */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 10, paddingBottom: '20px' }}>
                                <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.5px' }}>
                                    {useCases[selectedCase].label}
                                </h3>
                                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.5, maxWidth: '280px', marginBottom: '1.8rem' }}>
                                    Automate your {useCases[selectedCase].label.toLowerCase()} knowing our voice AI agents will transfer calls to humans when needed
                                </p>

                                <button style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    padding: '0.6rem 1.4rem',
                                    borderRadius: '100px',
                                    color: '#d4d4d8',
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                }}>
                                    <Play size={14} fill="#a1a1aa" color="#a1a1aa" /> {useCases[selectedCase].avatarName}
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive Card (Large Dark Canvas) */}
                    <div
                        style={{
                            background: '#0d0d12',
                            borderRadius: '32px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: isMobile ? '1.5rem' : '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            minHeight: isMobile ? 'auto' : '460px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
                            width: '100%',
                            boxSizing: 'border-box',
                            overflow: 'hidden'
                        }}
                    >
                        {/* 1. Header layout: Tag on left, HUGE Transcript text centered/right */}
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1.5rem', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                            {/* Frustrated Tag Block */}
                            {!isMobile && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
                                    <motion.div
                                        key={`tag1-${selectedCase}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '6px',
                                            background: `${useCases[selectedCase].color}10`,
                                            border: `1px solid ${useCases[selectedCase].color}40`,
                                            color: useCases[selectedCase].color,
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        {useCases[selectedCase].tag}
                                    </motion.div>
                                    <motion.div
                                        key={`tag2-${selectedCase}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.4 }}
                                        style={{
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '6px',
                                            background: 'transparent',
                                            border: `1px solid ${useCases[selectedCase].color}20`,
                                            color: useCases[selectedCase].color,
                                            fontSize: '0.65rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase'
                                        }}
                                    >
                                        /{useCases[selectedCase].tag}
                                    </motion.div>
                                </div>
                            )}

                            {/* Main Transcript Statement */}
                            <div style={{ flex: 1 }}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedCase}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            fontSize: isMobile ? '1.6rem' : 'clamp(1.5rem, 2.5vw, 2.2rem)',
                                            fontWeight: 900,
                                            lineHeight: 1.15,
                                            color: 'white',
                                            letterSpacing: '-0.02em',
                                            paddingLeft: isMobile ? '0' : '0.5rem',
                                            marginTop: isMobile ? '0' : '-10px',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        }}
                                    >
                                        {isMobile && (
                                            <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: '5px', background: `${useCases[selectedCase].color}12`, border: `1px solid ${useCases[selectedCase].color}30`, color: useCases[selectedCase].color, fontSize: '0.6rem', fontWeight: 900, marginRight: '0.6rem', verticalAlign: 'middle', marginBottom: '0.5rem' }}>{useCases[selectedCase].tag}</span>
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

                        {/* Animated Tone Orb + Glass Pill Widget */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '0.5rem',
                            marginBottom: '1rem',
                            position: 'relative',
                            minHeight: '160px'
                        }}>
                            {/* Blue Gradient Orb */}
                            <motion.div
                                animate={{ rotate: [0, 90, 180, 360], scale: [1, 1.05, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    width: '130px',
                                    height: '130px',
                                    background: 'linear-gradient(135deg, #0ea5e9, #3b82f6, #8b5cf6)',
                                    borderRadius: '50%',
                                    zIndex: 0,
                                    boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.3), 0 0 50px rgba(59, 130, 246, 0.7)'
                                }}
                            />
                            {/* Outer Orb Glow */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute',
                                    width: '160px',
                                    height: '160px',
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0) 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(20px)',
                                    zIndex: -1
                                }}
                            />

                            {/* Frosted Glass Pill Array */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    background: 'rgba(238, 242, 255, 0.85)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255, 255, 255, 0.6)',
                                    borderRadius: '16px',
                                    padding: isMobile ? '0.6rem 0.8rem' : '0.8rem 1.2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: isMobile ? '0.8rem' : '1.8rem',
                                    zIndex: 1,
                                    width: isMobile ? '90%' : 'auto',
                                    justifyContent: isMobile ? 'space-between' : 'flex-start',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,1)'
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                    <span style={{ fontSize: '1.2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                                        {useCases[selectedCase].tag === 'HELPFUL' ? '😇' :
                                            useCases[selectedCase].tag === 'FRUSTRATED' ? '😤' :
                                                useCases[selectedCase].tag === 'COMFORTING' ? '😌' :
                                                    useCases[selectedCase].tag === 'EXCITED' ? '🤩' : '🚚'}
                                    </span>
                                    <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
                                        Tone: {useCases[selectedCase].tag.charAt(0) + useCases[selectedCase].tag.slice(1).toLowerCase()}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    {/* Animated Waveform */}
                                    <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '18px' }}>
                                        {[0.5, 0.8, 1, 0.6, 1, 0.8, 0.5].map((val, i) => (
                                            <motion.div
                                                key={`wave-${i}`}
                                                animate={{ height: ['4px', `${val * 18}px`, '4px'] }}
                                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                                                style={{ width: '2px', background: '#94a3b8', borderRadius: '2px' }}
                                            />
                                        ))}
                                    </div>
                                    {/* Pause Button */}
                                    <div style={{
                                        width: '26px',
                                        height: '26px',
                                        background: '#3b82f6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 3px 10px rgba(59, 130, 246, 0.4)',
                                        cursor: 'pointer'
                                    }}>
                                        <div style={{ display: 'flex', gap: '2.5px' }}>
                                            <div style={{ width: '3px', height: '9px', background: 'white', borderRadius: '1.5px' }}></div>
                                            <div style={{ width: '3px', height: '9px', background: 'white', borderRadius: '1.5px' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* 2. Horizontal Use Case Selection Pills */}
                        <div className="hide-scroll" style={{
                            display: 'flex',
                            gap: '0.8rem',
                            overflowX: 'auto',
                            paddingBottom: '0.4rem',
                            marginTop: '0.8rem',
                            marginBottom: '1.2rem'
                        }}>
                            {useCases.map((uc, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => setSelectedCase(i)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '0.7rem 1.4rem',
                                        borderRadius: '16px',
                                        background: selectedCase === i ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                        border: `1.5px solid ${selectedCase === i ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                                        color: selectedCase === i ? 'white' : 'rgba(255,255,255,0.4)',
                                        fontSize: '0.85rem',
                                        fontWeight: 800,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.7rem',
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <span style={{ color: selectedCase === i ? 'var(--primary)' : 'inherit', opacity: selectedCase === i ? 1 : 0.6 }}>{uc.icon}</span>
                                    {uc.label}
                                </motion.button>
                            ))}
                        </div>

                        <div style={{ height: '1px', background: 'rgba(255,255,255,0.03)', width: '100%', margin: 'auto 0 1.2rem 0' }}></div>

                        {/* 3. Bottom Action Bar (Language + Demo Buttons) */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1.2rem',
                        }}>
                            {/* Language Selector */}
                            <div style={{ position: 'relative' }}>
                                <motion.div
                                    onClick={() => setShowLangMenu(!showLangMenu)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.6rem 1.2rem', borderRadius: '100px', background: 'transparent', border: '1.5px solid rgba(255, 255, 255, 0.15)', color: 'white', fontSize: '0.85rem', fontWeight: 800, cursor: 'pointer' }}
                                >
                                    <Globe size={16} color="var(--primary)" />
                                    {useCases[selectedCase].lang}
                                    <ChevronDown size={14} style={{ transform: showLangMenu ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
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

                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <motion.button
                                    style={{ padding: '0.8rem 1.8rem', borderRadius: '100px', border: '1.5px solid rgba(255, 255, 255, 0.6)', background: 'transparent', color: 'white', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer' }}
                                >
                                    Try for free
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{ padding: '0.8rem 2.2rem', borderRadius: '100px', background: 'white', color: 'black', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
                                >
                                    <Play size={16} fill="black" /> Play Demo
                                </motion.button>
                            </div>
                        </div>
                    </div>
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
        </section >
    );
}

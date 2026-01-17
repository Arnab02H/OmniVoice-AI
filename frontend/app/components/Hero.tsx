"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, Volume2, Waves, Radio, Globe, ArrowRight, Sparkles, Signal, Wifi, Battery, Headphones, CheckCircle2, User, Phone, MessageSquare, Clock, Play, Truck, Rocket, Heart, Zap, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { track } from "@vercel/analytics";

interface HeroProps {
    setStep: (step: number) => void;
}

const industries = [
    "Insurance",
    "Collections",
    "Sales & Marketing",
    "Automotive",
    "Telecom",
    "BPO/Contact Centers",
    "Real Estate",
    "Retail & E-Commerce",
    "Logistics"
];

export default function Hero({ setStep }: HeroProps) {
    const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
    const [callState, setCallState] = useState<'connecting' | 'active'>('connecting');
    const [callTime, setCallTime] = useState(0);
    const [selectedCase, setSelectedCase] = useState(0);

    const useCases = [
        {
            label: 'Collections',
            icon: <Volume2 size={10} />,
            color: '#10b981',
            colSpan: 1,
            transcript: [
                { tag: 'frustrated', text: 'चार महीने हो गए...', subtext: 'और अभी भी पेमेंट नहीं आया।' },
                { tag: 'sigh', text: 'ये सब अब सच में बहुत ज़ाया हो रहा है।' }
            ]
        },
        {
            label: '24x7 Agents',
            icon: <Headphones size={10} />,
            color: '#6366f1',
            colSpan: 1,
            transcript: [
                { tag: 'helpful', text: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?', subtext: 'क्या आपको ऑर्डर में समस्या है?' },
                { tag: 'processing', text: 'मैं अभी आपके विवरण की जांच कर रहा हूँ।' }
            ]
        },
        {
            label: 'Sales Assist',
            icon: <Rocket size={10} />,
            color: '#f59e0b',
            colSpan: 1,
            transcript: [
                { tag: 'excited', text: 'हमारे पास आपके लिए एक शानदार ऑफर है!', subtext: 'क्या आप इसे अभी देखना चाहेंगे?' },
                { tag: 'pitch', text: 'यह आपके व्यवसाय को 2x बढ़ाने में मदद करेगा।' }
            ]
        },
        {
            label: 'Logistics AI',
            icon: <Truck size={10} />,
            color: '#10b981',
            colSpan: 1,
            transcript: [
                { tag: 'tracking', text: 'आपका पैकेज दिल्ली हब से निकल चुका है।', subtext: 'यह कल शाम तक आप तक पहुँच जाएगा।' },
                { tag: 'update', text: 'लाइव लोकेशन आपके मोबाइल पर भेज दी गई है।' }
            ]
        },
        {
            label: 'Workflow Bots',
            icon: <Heart size={10} />,
            color: '#ec4899',
            colSpan: 2,
            transcript: [
                { tag: 'automated', text: 'शेड्यूलिंग पूरी हो गई है।', subtext: 'सभी मीटिंग इनवाइट्स भेज दिए गए हैं।' },
                { tag: 'notified', text: 'टीम को अपडेट कर दिया गया है।' }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndustryIndex((prev) => (prev + 1) % industries.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (callState === 'connecting') {
            timer = setTimeout(() => {
                setCallState('active');
            }, 6000);
        } else {
            // Stay in active state for 15 seconds, then reset to start the loop again
            timer = setTimeout(() => {
                setCallState('connecting');
                setCallTime(0);
            }, 15000);
        }
        return () => clearTimeout(timer);
    }, [callState]);

    useEffect(() => {
        if (callState === 'active') {
            const timer = setInterval(() => {
                setCallTime(prev => prev + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [callState]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <section
            id="home"
            className="hero-section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '8rem 2rem 4rem 2rem',
                position: 'relative'
            }}
        >
            {/* Background Floating Icons */}
            <div className="bg-animations" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
                {[
                    { Icon: Mic, top: '20%', left: '10%', size: 40, delay: 0 },
                    { Icon: Volume2, top: '70%', left: '5%', size: 30, delay: 1 },
                    { Icon: Waves, top: '15%', left: '85%', size: 35, delay: 0.5 },
                    { Icon: Radio, top: '60%', left: '90%', size: 45, delay: 1.5 },
                    { Icon: Headphones, top: '80%', left: '80%', size: 25, delay: 2 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            y: [0, -30, 0],
                            rotate: [0, 20, 0]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: "easeInOut"
                        }}
                        style={{ position: 'absolute', top: item.top, left: item.left, color: 'var(--primary)' }}
                    >
                        <item.Icon size={item.size} />
                    </motion.div>
                ))}
            </div>

            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'center', width: '100%' }}>
                <div className="hero-content" style={{ textAlign: 'left', paddingLeft: "0" }}>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hero-badge"
                        style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '100px', background: 'var(--primary-glow)', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.5px', textTransform: 'none' }}
                    >
                        <CheckCircle2 size={14} />
                        <span>AI Voice Automation for Every Industry. Simplified.</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-title"
                        style={{
                            fontSize: 'clamp(1.8rem, 5vw, 3.25rem)',
                            lineHeight: 1.2,
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            color: '#fff'
                        }}
                    >
                        Next-Gen Voice AI That Speaks, Listens, and Solves Problems <br className="hero-title-br" />
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>for </span>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndustryIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="gradient-text"
                                style={{ display: 'inline-block' }}
                            >
                                {industries[currentIndustryIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                        style={{
                            fontSize: '1.15rem',
                            opacity: 0.7,
                            marginBottom: '2.5rem',
                            maxWidth: '650px',
                            lineHeight: 1.7,
                            color: '#e2e8f0'
                        }}
                    >
                        Our platform provides natural, emotion-aware AI voice agents that manage support, sales, collections, scheduling, reminders, and more—across every industry and in 20+ languages.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-buttons"
                        style={{ marginBottom: '3rem' }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary hero-btn"
                            onClick={() => {
                                track('get_started_hero');
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get Started <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-card hero-btn hero-btn-secondary"
                            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Watch Demo <Sparkles size={18} />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        style={{
                            marginBottom: '3rem',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', pointerEvents: 'none' }}>
                            <motion.div
                                animate={{ x: [0, -1000] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    display: 'flex',
                                    gap: '2.5rem',
                                    whiteSpace: 'nowrap',
                                    color: 'var(--primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    opacity: 0.6,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                {Array(3).fill(null).map((_, i) => (
                                    <span key={i} style={{ display: 'flex', gap: '2.5rem' }}>
                                        {industries.map((ind) => (
                                            <span key={ind} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ width: '4px', height: '4px', background: 'var(--primary)', borderRadius: '50%' }} />
                                                {ind}
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hero-stats"
                    >
                        <div>
                            <h4>99.9%</h4>
                            <p>Reliability</p>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div>
                            <h4>20+</h4>
                            <p>Languages</p>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div>
                            <h4>1M+</h4>
                            <p>Calls Handled</p>
                        </div>
                    </motion.div>
                </div>

                <div className="hero-animation" style={{ transform: 'translateY(-50px)', position: 'relative' }}>
                    {/* Phone 1: Scanner View */}
                    <motion.div
                        initial={{ x: -100, opacity: 0, rotateY: 20, rotateX: 10, rotateZ: -10 }}
                        animate={{ x: 0, opacity: 1, rotateY: 15, rotateX: 5, rotateZ: -8 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{
                            width: '260px',
                            height: '540px',
                            background: '#000',
                            borderRadius: '40px',
                            border: '2px solid #333',
                            boxShadow: '-20px 40px 80px rgba(0,0,0,0.6), inset 0 0 0 8px #111',
                            position: 'relative',
                            overflow: 'visible',
                            flexShrink: 0,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Physical Side Buttons */}
                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#08080a' }}>
                            {/* Premium AI Voice Wallpaper */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2024&auto=format&fit=crop')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.4,
                                filter: 'blur(10px) brightness(0.7) blue(100px)',
                                zIndex: 0
                            }}></div>

                            {/* Ambient Glow Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 80%)',
                                zIndex: 0
                            }}></div>

                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: 'white', zIndex: 110 }}>9:41</div>
                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: 'white', zIndex: 110 }}>
                                <Signal size={10} strokeWidth={2.5} />
                                <Wifi size={10} strokeWidth={2.5} />
                                <Battery size={12} strokeWidth={2.5} style={{ transform: 'rotate(0deg)' }} />
                            </div>
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                            {/* Call Interface */}
                            <div style={{ padding: '3.5rem 1.2rem', height: '100%', display: 'flex', flexDirection: 'column', color: 'white' }}>
                                <AnimatePresence mode="wait">
                                    {callState === 'connecting' ? (
                                        <motion.div
                                            key="connecting"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            style={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', paddingTop: '2.5rem' }}
                                        >
                                            <div style={{ position: 'relative', width: '90px', height: '90px', margin: '0 auto 1.2rem' }}>
                                                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--primary-glow)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <User size={45} color="var(--primary)" />
                                                </div>
                                                <motion.div
                                                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                    style={{ position: 'absolute', inset: -2, borderRadius: '50%', border: '2px solid var(--primary)' }}
                                                />
                                            </div>

                                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem', color: '#fff' }}>OmniVoice.AI</h3>
                                            <motion.p
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                style={{ fontSize: '0.75rem', color: 'var(--primary)', letterSpacing: '4px', fontWeight: 800 }}
                                            >
                                                INCOMING...
                                            </motion.p>

                                            <div style={{ marginTop: 'auto', marginBottom: '3.5rem' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '3rem', opacity: 0.8 }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <Clock size={20} />
                                                        <span style={{ fontSize: '0.6rem', fontWeight: 600 }}>Remind Me</span>
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                                        <MessageSquare size={20} />
                                                        <span style={{ fontSize: '0.6rem', fontWeight: 600 }}>Message</span>
                                                    </div>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 1rem' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                                        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ff3b30', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(255, 59, 48, 0.3)' }}>
                                                            <Phone size={24} style={{ transform: 'rotate(135deg)', color: 'white' }} />
                                                        </div>
                                                        <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Decline</span>
                                                    </div>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                                        <motion.div
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 0.6, repeat: Infinity }}
                                                            style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#34c759', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(52, 199, 89, 0.3)' }}
                                                        >
                                                            <Phone size={24} style={{ color: 'white' }} />
                                                        </motion.div>
                                                        <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Accept</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="active"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}
                                        >
                                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-glow)', border: '2px solid var(--primary)', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                                    <User size={30} color="var(--primary)" style={{ margin: 'auto' }} />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: '2px solid var(--primary)' }}
                                                    />
                                                </div>
                                                <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.3rem' }}>OmniVoice.AI</h3>
                                                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px' }}>
                                                    {formatTime(callTime)}
                                                </p>
                                            </div>

                                            {/* Active Visualizer Area */}
                                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                                    {Array(24).fill(null).map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{
                                                                height: [20, Math.random() * 60 + 10, 20]
                                                            }}
                                                            transition={{
                                                                duration: 0.3 + Math.random() * 0.4,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }}
                                                            style={{
                                                                width: '3.5px',
                                                                background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                                                                borderRadius: '4px',
                                                                opacity: 0.9
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Bottom Call Controls */}
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem', padding: '0 1rem' }}>
                                                {[
                                                    { Icon: Mic, label: 'Mute' },
                                                    { Icon: Headphones, label: 'Speaker' },
                                                    { Icon: Volume2, label: 'Audio' },
                                                    { Icon: Globe, label: 'Translate' },
                                                    { Icon: Radio, label: 'Record' },
                                                    { Icon: Phone, label: 'End', color: '#ff3b30', rotate: 135 }
                                                ].map((ctrl, idx) => (
                                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                                                        <div style={{
                                                            width: '44px',
                                                            height: '44px',
                                                            borderRadius: '50%',
                                                            background: ctrl.color || 'rgba(255,255,255,0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            cursor: 'pointer'
                                                        }}>
                                                            <ctrl.Icon size={18} style={{ transform: ctrl.rotate ? `rotate(${ctrl.rotate}deg)` : 'none' }} />
                                                        </div>
                                                        <span style={{ fontSize: '0.55rem', fontWeight: 600, opacity: 0.6 }}>{ctrl.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}></div>
                        </div>
                    </motion.div>

                    {/* Loopy Arrow Connector */}
                    <div style={{ position: 'absolute', zIndex: 15, width: '100px', height: '100px', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 }}>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.2))' }}>
                            <motion.path
                                d="M 15 60 C 25 60, 35 20, 50 20 C 70 20, 60 80, 48 80 C 35 80, 40 45, 85 55"
                                stroke="var(--foreground)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 78 51 L 85 55 L 78 59"
                                stroke="var(--foreground)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                            />
                        </svg>
                    </div>

                    {/* Phone 2: Analysis View */}
                    <motion.div
                        initial={{ x: 100, opacity: 0, rotateY: -20, rotateX: 10, rotateZ: 10 }}
                        animate={{ x: 0, opacity: 1, rotateY: -15, rotateX: 5, rotateZ: 8 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        style={{
                            width: '260px',
                            height: '540px',
                            background: '#000',
                            borderRadius: '40px',
                            border: '2px solid #333',
                            boxShadow: '20px 40px 80px rgba(0,0,0,0.6), inset 0 0 0 8px #111',
                            position: 'relative',
                            overflow: 'visible',
                            flexShrink: 0,
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <div style={{ position: 'absolute', left: '-3px', top: '100px', width: '3px', height: '30px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', left: '-3px', top: '140px', width: '3px', height: '60px', background: '#333', borderRadius: '2px 0 0 2px' }}></div>
                        <div style={{ position: 'absolute', right: '-3px', top: '130px', width: '3px', height: '80px', background: '#333', borderRadius: '0 2px 2px 0' }}></div>

                        <div style={{ position: 'absolute', inset: '8px', borderRadius: '36px', overflow: 'hidden', background: '#020205' }}>
                            {/* High-Vibrancy Cosmic Background */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `
                                    radial-gradient(circle at 15% 25%, rgba(56, 189, 248, 0.3) 0%, transparent 45%),
                                    radial-gradient(circle at 85% 15%, rgba(99, 102, 241, 0.35) 0%, transparent 55%),
                                    radial-gradient(circle at 50% 85%, rgba(168, 85, 247, 0.3) 0%, transparent 65%),
                                    #020205
                                `,
                                zIndex: 0
                            }}></div>

                            <motion.div
                                animate={{ opacity: [0.15, 0.35, 0.15] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                style={{
                                    position: 'absolute',
                                    inset: -50,
                                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")',
                                    backgroundSize: '160px',
                                    zIndex: 0
                                }}
                            ></motion.div>

                            <div style={{ position: 'absolute', top: '14px', left: '20px', fontSize: '0.65rem', fontWeight: 700, color: 'white', zIndex: 110 }}>9:41</div>
                            <div style={{ position: 'absolute', top: '14px', right: '20px', display: 'flex', alignItems: 'center', gap: '4px', color: 'white', zIndex: 110 }}>
                                <Signal size={10} strokeWidth={2.5} />
                                <Wifi size={10} strokeWidth={2.5} />
                                <Battery size={12} strokeWidth={2.5} />
                            </div>
                            <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: 'black', borderRadius: '10px', zIndex: 100 }}></div>

                            {/* Main Transcription Interface */}
                            <div style={{ padding: '3.5rem 1rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'white', position: 'relative', zIndex: 10 }}>

                                {/* High-End Transcription Card */}
                                <motion.div
                                    key={selectedCase}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        padding: '1.25rem 0.8rem',
                                        borderRadius: '24px',
                                        background: 'rgba(255, 255, 255, 0.04)',
                                        border: '1px solid rgba(255, 255, 255, 0.12)',
                                        boxShadow: '0 0 40px rgba(99, 102, 241, 0.1), inset 0 0 20px rgba(255,255,255,0.02)',
                                        backdropFilter: 'blur(16px)',
                                        textAlign: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '0.5rem', background: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe', padding: '2px 6px', borderRadius: '6px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>&lt;{useCases[selectedCase].transcript[0].tag}&gt;</span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}>{useCases[selectedCase].transcript[0].text}</span>
                                            {useCases[selectedCase].transcript[0].subtext && <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'white' }}>{useCases[selectedCase].transcript[0].subtext}</span>}
                                            <span style={{ fontSize: '0.5rem', background: 'rgba(168, 85, 247, 0.2)', color: '#d8b4fe', padding: '2px 6px', borderRadius: '6px', fontWeight: 800, textTransform: 'uppercase' }}>&lt;{useCases[selectedCase].transcript[0].tag}&gt;</span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '0.5rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '2px 6px', borderRadius: '6px', fontWeight: 800 }}>&lt;{useCases[selectedCase].transcript[1].tag}&gt;</span>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'rgba(255,255,255,0.95)' }}>{useCases[selectedCase].transcript[1].text}</span>
                                            <span style={{ fontSize: '0.5rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '2px 6px', borderRadius: '6px', fontWeight: 800 }}>&lt;/{useCases[selectedCase].transcript[1].tag}&gt;</span>
                                        </div>
                                    </div>

                                    <p style={{ fontSize: '0.62rem', opacity: 0.5, letterSpacing: '0.2px', fontWeight: 500 }}>Meet the AI that handles conversations you don't want to.</p>
                                </motion.div>

                                {/* Refined Clickable Use Case Pills */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', justifyContent: 'center' }}>
                                    {useCases.map((pill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + i * 0.05 }}
                                            onClick={() => setSelectedCase(i)}
                                            style={{
                                                padding: '0.45rem 0.6rem',
                                                borderRadius: '14px',
                                                background: selectedCase === i ? pill.color : 'rgba(255, 255, 255, 0.05)',
                                                border: selectedCase === i ? '1px solid white' : '1px solid rgba(255, 255, 255, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.35rem',
                                                fontSize: '0.58rem',
                                                fontWeight: 800,
                                                gridColumn: pill.colSpan === 2 ? 'span 2' : 'auto',
                                                justifyContent: pill.colSpan === 2 ? 'center' : 'flex-start',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                color: selectedCase === i ? 'white' : 'inherit'
                                            }}
                                        >
                                            <span style={{ color: selectedCase === i ? 'white' : pill.color, display: 'flex' }}>{pill.icon}</span>
                                            <span style={{ opacity: selectedCase === i ? 1 : 0.9 }}>{pill.label}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Main CTAs with Enhanced Design */}
                                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                                    <motion.button
                                        whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(99, 102, 241, 0.5)' }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            width: '100%',
                                            padding: '0.9rem',
                                            borderRadius: '16px',
                                            background: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
                                            color: 'white',
                                            fontWeight: 800,
                                            fontSize: '0.78rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.6rem',
                                            boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Play size={15} fill="white" /> Play Demo
                                    </motion.button>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 960px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                        gap: 3rem !important;
                    }
                    .hero-content {
                        padding-right: 0 !important;
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                    }
                    .hero-badge {
                        margin: 0 auto 1.5rem auto !important;
                    }
                    .hero-subtitle {
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .hero-buttons {
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 1rem;
                        display: flex;
                    }
                    .hero-stats {
                        justify-content: center;
                    }
                    .hero-animation {
                        transform: none !important;
                        display: flex;
                        justify-content: center;
                        scale: 0.9;
                    }
                }
                @media (max-width: 600px) {
                    .hero-section {
                        padding-top: 6rem !important;
                    }
                    .hero-title {
                        font-size: 2.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

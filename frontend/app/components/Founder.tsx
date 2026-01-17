"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mic, ShieldCheck, ArrowRight, Sparkles, User, Linkedin } from "lucide-react";
import { useState } from "react";
import { track } from "@vercel/analytics";

interface FounderProps {
    setStep: (step: number) => void;
}

export default function Founder({ setStep }: FounderProps) {
    const [activeTab, setActiveTab] = useState<'story' | 'vision'>('story');

    return (
        <section id="founder" style={{ padding: 'clamp(8rem, 15vh, 10rem) 1.5rem 4rem 1.5rem', maxWidth: '1400px', margin: '0 auto', overflow: 'visible', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="founder-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(320px, 45vw, 600px), 1fr))',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'center',
                width: '100%'
            }}>

                {/* Left: Text Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="founder-content"
                    style={{ width: '100%' }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.1, fontWeight: 800 }}
                    >
                        Meet the <span className="gradient-text">Visionary</span><br />
                        Behind the Innovation
                    </motion.h2>

                    {/* LinkedIn Badge - Enhanced Responsive */}
                    <motion.a
                        href="https://www.linkedin.com/in/arnab-bera-65a452229/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('founder_linkedin_click')}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '16px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--glass-border)',
                            backdropFilter: 'blur(12px)',
                            marginBottom: '1.5rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            width: 'fit-content',
                            boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                            maxWidth: '100%'
                        }}
                    >
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            flexShrink: 0
                        }}>
                            <img src="/arnab_profile_pic.jpeg" alt="Arnab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem', minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground)' }}>
                                <span style={{ whiteSpace: 'nowrap' }}>Arnab Bera</span>
                                <Linkedin size={12} fill="#0077b5" color="#0077b5" style={{ flexShrink: 0 }} />
                                <span style={{ fontSize: '0.75rem', color: 'var(--foreground)', opacity: 0.6, fontWeight: 500, whiteSpace: 'nowrap' }}>1.6k+ followers</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--foreground)', opacity: 0.5, fontWeight: 400 }}>
                                Building OmniVoice.AI • CMI Student
                            </div>
                        </div>
                    </motion.a>

                    {/* Interactive Tabs */}
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', maxWidth: '100%' }}>
                        <button
                            onClick={() => setActiveTab('story')}
                            style={{
                                padding: '0.6rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'story' ? '2px solid var(--primary)' : '2px solid transparent',
                                color: activeTab === 'story' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'story' ? 700 : 500,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <User size={16} /> The Story
                        </button>
                        <button
                            onClick={() => setActiveTab('vision')}
                            style={{
                                padding: '0.6rem 1rem',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'vision' ? '2px solid var(--primary)' : '2px solid transparent',
                                color: activeTab === 'vision' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: activeTab === 'vision' ? 700 : 500,
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <Sparkles size={16} /> The Vision
                        </button>
                    </div>

                    <div style={{ minHeight: '200px', position: 'relative', width: '100%' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'story' ? (
                                <motion.div
                                    key="story"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.6, opacity: 0.9 }}
                                >
                                    <p>Hey, I'm <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Arnab</span>, Founder of OmniVoice.AI.</p>
                                    <p>My journey began with a simple realization: voice communication should be universal and intelligent. With OmniVoice.AI, I'm leveraging advanced AI to handle every type of voice interaction, making technology more natural and accessible for everyone.</p>

                                    {/* Informative Stats Chips */}
                                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                        {['VOIP Ready', 'Neural Voice', 'AI Analytics'].map((stat, i) => (
                                            <motion.span
                                                key={stat}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                style={{
                                                    padding: '0.4rem 0.8rem',
                                                    background: 'var(--primary-glow)',
                                                    border: '1px solid var(--primary)',
                                                    borderRadius: '100px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    color: 'var(--primary)'
                                                }}
                                            >
                                                {stat}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <p>Join me in redefining the future of global dining, powered by AI that cares about what's on your plate.</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="vision"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.6, opacity: 0.9 }}
                                >
                                    <p>I aim to create a voice platform that understands human intent as deeply as we do.</p>
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        style={{
                                            position: 'relative',
                                            padding: '2rem',
                                            paddingLeft: '2.5rem',
                                            background: 'var(--card-bg)',
                                            borderRadius: '24px',
                                            border: '1px solid var(--glass-border)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <div style={{ position: 'absolute', top: '1rem', left: '1rem', opacity: 0.2 }}>
                                            <Sparkles size={24} color="var(--primary)" />
                                        </div>
                                        <p style={{
                                            fontWeight: 600,
                                            color: 'var(--foreground)',
                                            fontStyle: 'italic',
                                            fontSize: '1.1rem',
                                            lineHeight: 1.7
                                        }}>
                                            "We aren't just processing audio; we're enabling seamless human-to-AI and human-to-human communication through intelligent voice orchestration."
                                        </p>
                                        <div style={{ marginTop: '1rem', textAlign: 'right', opacity: 0.6, fontSize: '0.9rem', fontWeight: 700 }}>
                                            — Arnab Bera
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{ marginTop: '2rem', padding: '0.8rem 2.2rem', fontSize: '1rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        onClick={() => {
                            track('book_consultation_founder');
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Book a Consultation <ArrowRight size={18} />
                    </motion.button>
                </motion.div>

                {/* Right: Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="founder-image-container"
                    style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', perspective: '1000px' }}
                >
                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="founder-badge"
                        style={{
                            position: 'absolute',
                            top: '8%',
                            right: '5%',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(23, 23, 26, 0.8)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                        }}
                    >
                        <Mic size={14} className="gradient-text" />
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px' }}>FOUNDER</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="founder-image-box"
                        style={{
                            width: '100%',
                            maxWidth: '440px',
                            height: 'clamp(380px, 45vh, 500px)',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            border: '1px solid var(--glass-border)',
                            boxShadow: '0 30px 100px rgba(0,0,0,0.5)',
                            position: 'relative',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        <img src="/arnab_profile_pic.jpeg" alt="Arnab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%)' }}></div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="founder-badge"
                        style={{
                            position: 'absolute',
                            bottom: '8%',
                            left: '5%',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(23, 23, 26, 0.8)',
                            backdropFilter: 'blur(16px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                        }}
                    >
                        <ShieldCheck size={14} color="#10b981" />
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.5px' }}>DATA SCIENTIST</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

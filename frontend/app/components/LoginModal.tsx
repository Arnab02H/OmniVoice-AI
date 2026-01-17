"use client";

import { motion } from "framer-motion";
import { X, Mail, Lock, Github, Chrome, ArrowRight, User } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
        }}>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(12px)',
                }}
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '450px',
                    background: '#0a0a0c',
                    borderRadius: '32px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                    padding: '3rem 2.5rem',
                    overflow: 'hidden',
                }}
            >
                {/* Decorative background flare */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                    opacity: 0.1,
                    pointerEvents: 'none',
                }} />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                    <X size={20} style={{ margin: 'auto' }} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                    }}>
                        <User size={32} color="white" />
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Welcome Back</h2>
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.95rem' }}>Login to your OmniVoice.AI account</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Email Field */}
                    <div style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: '#fff',
                                fontSize: '0.95rem',
                                outline: 'none',
                                transition: 'all 0.2s ease'
                            }}
                            className="login-input"
                        />
                    </div>

                    {/* Password Field */}
                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.4 }} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '12px',
                                color: '#fff',
                                fontSize: '0.95rem',
                                outline: 'none',
                                transition: 'all 0.2s ease'
                            }}
                            className="login-input"
                        />
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <a href="#" style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Forgot Password?</a>
                    </div>

                    <button
                        className="btn-primary"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            fontWeight: 700,
                            marginTop: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        Sign In <ArrowRight size={18} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.3)' }}>Or continue with</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            <Github size={18} /> GitHub
                        </button>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                            <Chrome size={18} /> Google
                        </button>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '1rem' }}>
                        Don't have an account? <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign up</a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

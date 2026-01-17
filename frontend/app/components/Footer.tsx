"use client";

import { Mic, Twitter, Instagram, Github, Mail, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer style={{ background: 'var(--card-bg)', borderTop: '1px solid var(--glass-border)', padding: '3rem 2rem' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2rem'
            }}>
                {/* Left: Logo & Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '0.4rem', borderRadius: '8px' }}>
                            <Mic size={18} color="white" />
                        </div>
                        <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>OmniVoice.<span className="gradient-text">AI</span></span>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.8rem', maxWidth: '250px' }}>
                        All-in-one AI voice platform for seamless interactions.
                    </p>
                </div>

                {/* Center: Links with Pipes */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontSize: '0.85rem',
                    color: 'var(--foreground)',
                    opacity: 0.7
                }}>
                    <a href="#about">About</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="#contact">Contact us</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="#pricing">Pricing</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="#terms">Terms and Conditions</a>
                    <span style={{ opacity: 0.3 }}>|</span>
                    <a href="#privacy">Privacy Policy</a>
                </div>

                {/* Right: Social Icons */}
                <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                    <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#E4405F' }}><Instagram size={20} /></motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#" style={{ color: 'var(--foreground)' }}><Twitter size={20} /></motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#0077b5' }}><Linkedin size={20} /></motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#FF0000' }}><Youtube size={20} /></motion.a>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div style={{
                maxWidth: '1200px',
                margin: '2.5rem auto 0 auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--glass-border)',
                textAlign: 'center',
                opacity: 0.4,
                fontSize: '0.8rem',
                fontStyle: 'italic'
            }}>
                Copyright © 2026 OmniVoice.AI | All rights reserved
            </div>
        </footer>
    );
}

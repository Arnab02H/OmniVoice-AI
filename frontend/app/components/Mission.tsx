"use client";

import { motion } from "framer-motion";
import { Mic, ShieldCheck, Globe } from "lucide-react";

export default function Mission() {
    const features = [
        { title: "Voice Precision", icon: Mic, desc: "Ultra-low latency transcription and synthesis that feels natural and instantaneous." },
        { title: "Secure Audio", icon: ShieldCheck, desc: "Enterprise-grade encryption for all voice data, ensuring privacy and compliance." },
        { title: "Universal Access", icon: Globe, desc: "Breaking language barriers with real-time translation for over 150 languages." }
    ];

    return (
        <section id="our-mission" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                >
                    Our <span className="gradient-text">Mission</span>
                </motion.h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', opacity: 0.6, fontSize: '1.1rem', lineHeight: 1.6 }}>
                    We believe that voice is the most natural way to interact with technology.
                    OmniVoice.AI aims to empower every individual and business to communicate
                    across languages and platforms with unprecedented ease and clarity.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card"
                        style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <feature.icon size={26} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.4rem' }}>{feature.title}</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

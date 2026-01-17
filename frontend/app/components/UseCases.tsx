"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const cases = [
    {
        id: 1,
        title: "Collection",
        description: "Automate payment reminders, follow-ups, and reduce manual intervention with empathetic AI agents.",
        tags: ["Payment reminders", "Negotiation"],
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Sales & Marketing",
        description: "Enhance lead generation, qualification, and personalized outreach to boost conversion rates effectively.",
        tags: ["Lead nurturing", "Campaign automation"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Customer Support",
        description: "Improve support efficiency with automated responses, call routing, and 24/7 intelligent assistance.",
        tags: ["24/7 assistance", "Smart routing"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    }
];

export default function UseCases() {
    return (
        <section id="use-cases" style={{
            padding: '6rem 2rem',
            background: '#050507',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                pointerEvents: 'none',
                opacity: 0.5,
                zIndex: 0
            }}></div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Section */}
                <div style={{ maxWidth: '750px', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            color: '#818cf8',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            fontSize: '0.7rem'
                        }}
                    >
                        <Sparkles size={14} /> Usecase
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            lineHeight: 1.2,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, #fff, #94a3b8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Tailored AI solutions for your specific usecases
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            color: '#94a3b8',
                            lineHeight: 1.6,
                            maxWidth: '600px'
                        }}
                    >
                        Empowering innovation with customized intelligence that adapts to your unique needs.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {cases.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            style={{
                                position: 'relative',
                                height: '420px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                cursor: 'pointer',
                                background: '#121216'
                            }}
                        >
                            {/* Background Image */}
                            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    className="card-image"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.95) 100%)'
                                }}></div>
                            </div>

                            {/* Content */}
                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '2rem'
                            }}>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    marginBottom: '0.8rem'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.8)',
                                    lineHeight: 1.5,
                                    marginBottom: '1.5rem'
                                }}>
                                    {item.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                    {item.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '100px',
                                            background: 'rgba(255,255,255,0.1)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            fontSize: '0.75rem',
                                            color: '#e2e8f0',
                                            backdropFilter: 'blur(5px)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .card-image {
                    transform: scale(1);
                }
                div:hover .card-image {
                    transform: scale(1.05);
                }
                @media (max-width: 768px) {
                    #use-cases {
                        padding: 4rem 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
}

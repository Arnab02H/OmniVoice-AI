"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const industries = [
    {
        id: 1,
        title: "Banking & Finance",
        description: "Streamline collections with AI-powered communication and financial planning.",
        tags: ["Automated follow-ups", "Collections"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "BPO / Contact Center",
        description: "Boost efficiency with AI-powered voice automation, chat handling, and analytics.",
        tags: ["Call automation", "Agent assistance"],
        image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Insurance",
        description: "Enhance customer service and claims processing with AI-driven insights.",
        tags: ["Claims automation", "24/7 support"],
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Telecom",
        description: "Improve customer engagement, billing support, and network inquiries.",
        tags: ["Plan suggestion", "Issue resolution"],
        image: "https://images.unsplash.com/photo-1558494949-ef2a0debc72e?auto=format&fit=crop&q=80&w=800",
    }
];

export default function Industries() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="industries" style={{
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

            <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

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
                            background: 'rgba(168, 85, 247, 0.1)',
                            border: '1px solid rgba(168, 85, 247, 0.2)',
                            color: '#a855f7',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}
                    >
                        <Sparkles size={14} /> Industries
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
                        Tailored AI solutions for your specific industry needs
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
                        Industry-specific AI solutions designed to optimize workflows, enhance decision-making, and accelerate growth.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div style={{ position: 'relative' }}>
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(20, 20, 20, 0.8)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                        className="nav-btn"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'rgba(20, 20, 20, 0.8)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                        }}
                        className="nav-btn"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Scrollable Cards Area */}
                    <div
                        ref={scrollRef}
                        className="hide-scroll"
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            overflowX: 'auto',
                            padding: '1rem 0.5rem',
                            scrollSnapType: 'x mandatory'
                        }}
                    >
                        {industries.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    flex: '0 0 320px',
                                    height: '480px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: '#121216',
                                    scrollSnapAlign: 'start',
                                    cursor: 'pointer'
                                }}
                                className="industry-card"
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
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.95) 100%)'
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
                                        fontWeight: 800,
                                        color: 'white',
                                        marginBottom: '0.8rem',
                                        lineHeight: 1.1
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'rgba(255,255,255,0.8)',
                                        lineHeight: 1.5,
                                        marginBottom: '1.5rem',
                                        minHeight: '4.5em' // visual balance
                                    }}>
                                        {item.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                                        {item.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                padding: '0.3rem 0.7rem',
                                                borderRadius: '100px',
                                                background: 'rgba(255,255,255,0.1)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                fontSize: '0.7rem',
                                                color: '#e2e8f0',
                                                backdropFilter: 'blur(5px)',
                                                fontWeight: 600
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}>
                                        Explore Solutions <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                .industry-card:hover .card-image {
                    transform: scale(1.05);
                }
                .nav-btn:hover {
                    background: rgba(255,255,255,0.1) !important;
                }
                @media (max-width: 768px) {
                    #industries {
                        padding: 4rem 1rem !important;
                    }
                    .nav-btn {
                        display: none !important; /* Hide arrows on mobile, use swipe */
                    }
                }
            `}</style>
        </section>
    );
}

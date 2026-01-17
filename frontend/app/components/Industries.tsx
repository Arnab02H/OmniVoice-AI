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
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "BPO / Contact Center",
        description: "Boost efficiency with AI-powered voice automation, chat handling, and analytics.",
        tags: ["Call automation", "Agent assistance"],
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
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
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 5,
        title: "Healthcare",
        description: "Automate appointment reminders and patient follow-ups with empathy.",
        tags: ["Scheduling", "Patient care"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 6,
        title: "Retail & E-commerce",
        description: "Drive sales with personalized product recommendations and order tracking.",
        tags: ["Order updates", "Personalization"],
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800",
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

            {/* Ambient Background Glow */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

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
                            background: 'rgba(20, 20, 20, 0.6)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
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
                            background: 'rgba(20, 20, 20, 0.6)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease'
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
                            scrollSnapType: 'x mandatory',
                            paddingBottom: '2rem' // space for hover effect
                        }}
                    >
                        {industries.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.01,
                                    boxShadow: '0 20px 40px -6px rgba(168, 85, 247, 0.15)'
                                }}
                                style={{
                                    flex: '0 0 320px',
                                    height: '480px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    background: '#121216',
                                    scrollSnapAlign: 'start',
                                    cursor: 'pointer'
                                }}
                                className="industry-card group"
                            >
                                {/* Gradient Border via pseudo-element simulation */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '-1px',
                                    borderRadius: '25px',
                                    padding: '1px',
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'exclude',
                                    pointerEvents: 'none',
                                    zIndex: 10
                                }}></div>

                                {/* Background Image */}
                                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        className="card-image transition-transform duration-700 ease-out"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.95) 100%)'
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
                                        lineHeight: 1.1,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'rgba(255,255,255,0.85)',
                                        lineHeight: 1.5,
                                        marginBottom: '1.5rem',
                                        minHeight: '4.5em'
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
                                                fontWeight: 600,
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div
                                        className="explore-btn"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            transform: 'translateX(0)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        Explore Solutions <ArrowRight size={16} className="arrow-icon" />
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
                    transform: scale(1.1);
                }
                .industry-card:hover .explore-btn {
                    transform: translateX(5px);
                }
                .industry-card:hover .arrow-icon {
                    transform: translateX(3px);
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                .nav-btn:hover {
                    background: rgba(255,255,255,0.1) !important;
                    transform: translateY(-50%) scale(1.1) !important;
                    border-color: rgba(255,255,255,0.3) !important;
                }
                @media (max-width: 768px) {
                    #industries {
                        padding: 4rem 1rem !important;
                    }
                    .nav-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}

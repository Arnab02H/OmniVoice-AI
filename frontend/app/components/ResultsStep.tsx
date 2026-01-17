"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

interface ResultsStepProps {
    analysisResults: any[];
    isAnalyzing: boolean;
    downloadJSON: () => void;
}

export default function ResultsStep({ analysisResults, isAnalyzing, downloadJSON }: ResultsStepProps) {
    const [showImageIdx, setShowImageIdx] = useState<number | null>(null);
    const [imageError, setImageError] = useState<boolean>(false);

    // Reset error when switching dishes
    const handleShowImage = (idx: number) => {
        setImageError(false);
        setShowImageIdx(idx);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Voice Analysis</h2>
                    <p style={{ opacity: 0.6 }}>Insights based on your audio stream.</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={downloadJSON} className="glass-card" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--glass-border)', borderRadius: '12px', fontWeight: 600, cursor: 'pointer' }}>
                        <Download size={18} /> Export JSON
                    </button>
                    <button className="btn-primary" onClick={() => window.location.reload()}>
                        New Session
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {analysisResults.map((dish: any, i: number) => {
                    const isShowingImage = showImageIdx === i;

                    return (
                        <motion.div
                            key={i}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                border: dish.is_recommended ? '2px solid var(--primary)' : '1px solid var(--card-border)',
                                background: dish.is_recommended ? 'rgba(var(--primary-rgb), 0.05)' : 'var(--card-bg)',
                                position: 'relative',
                                minHeight: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {dish.is_recommended && !isShowingImage && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '20px',
                                    background: 'var(--primary)',
                                    color: 'black',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    zIndex: 10
                                }}>
                                    RECOMMENDED
                                </div>
                            )}

                            {isShowingImage ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                                >
                                    <div style={{ position: 'relative', width: '100%', borderRadius: '12px', overflow: 'hidden', height: '280px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {!imageError && (
                                            <motion.div
                                                initial={{ opacity: 0.5 }}
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                                style={{ position: 'absolute', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}
                                            >
                                                Generating Fast Image...
                                            </motion.div>
                                        )}

                                        {imageError ? (
                                            <div style={{ textAlign: 'center', padding: '1rem' }}>
                                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⌛</div>
                                                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Generation taking too long.</p>
                                                <button
                                                    onClick={() => { setImageError(false); const img = document.getElementById(`dish-img-${i}`) as HTMLImageElement; if (img) img.src = `${dish.image_url}&retry=${Date.now()}`; }}
                                                    style={{ marginTop: '0.5rem', padding: '0.4rem 1rem', background: 'var(--primary)', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 700 }}
                                                >
                                                    Retry
                                                </button>
                                            </div>
                                        ) : (
                                            <img
                                                id={`dish-img-${i}`}
                                                src={dish.image_url}
                                                alt={dish.dish_name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 1, opacity: 0, transition: 'opacity 0.5s ease' }}
                                                onLoad={(e) => {
                                                    e.currentTarget.style.opacity = '1';
                                                    const parent = e.currentTarget.parentElement;
                                                    const loader = parent?.querySelector('div');
                                                    if (loader) loader.style.display = 'none';
                                                }}
                                                onError={() => setImageError(true)}
                                            />
                                        )}
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>{dish.dish_name}</h3>
                                        <button
                                            onClick={() => setShowImageIdx(null)}
                                            className="btn-secondary"
                                            style={{ width: '100%', marginTop: 'auto', padding: '0.75rem', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                                        >
                                            Back to Results
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{dish.dish_name}</h3>
                                        <div style={{ textAlign: 'right' }}>
                                            {dish.price && (
                                                <div className="gradient-text" style={{ fontWeight: 800, fontSize: '1.2rem' }}>{dish.price}</div>
                                            )}
                                            {dish.calories && (
                                                <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>{dish.calories} cal</div>
                                            )}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                                        {dish.translated_name && dish.translated_name !== dish.dish_name && (
                                            <div style={{ fontSize: '0.95rem', fontStyle: 'italic', opacity: 0.8, color: 'var(--secondary)' }}>
                                                "{dish.translated_name}"
                                            </div>
                                        )}
                                        {dish.original_language && (
                                            <span style={{ fontSize: '0.75rem', opacity: 0.5, padding: '0.1rem 0.5rem', border: '1px solid var(--glass-border)', borderRadius: '6px' }}>
                                                {dish.original_language}
                                            </span>
                                        )}
                                    </div>

                                    <div style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
                                        {dish.description}
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
                                        {dish.safety_score && (
                                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>
                                                Safety: {dish.safety_score}/10
                                            </span>
                                        )}
                                        {dish.dietary_tags?.map((tag: string) => (
                                            <span key={tag} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                                {tag}
                                            </span>
                                        ))}

                                        <button
                                            onClick={() => handleShowImage(i)}
                                            className="view-dish-btn"
                                            style={{
                                                marginLeft: 'auto',
                                                fontSize: '0.8rem',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '100px',
                                                background: 'linear-gradient(135deg, var(--primary), #fff)',
                                                color: 'black',
                                                border: 'none',
                                                fontWeight: 800,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <span style={{ fontSize: '1.1rem' }}>🖼️</span> View Dish
                                        </button>
                                    </div>

                                    {dish.match_reason && (
                                        <div style={{
                                            marginTop: 'auto',
                                            padding: '1.25rem',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: '12px',
                                            fontSize: '0.9rem',
                                            borderLeft: `3px solid ${dish.is_recommended ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`
                                        }}>
                                            <span style={{ fontWeight: 600, color: dish.is_recommended ? 'var(--primary)' : 'inherit', display: 'block', marginBottom: '0.25rem' }}>AI Voice Analysis Insight: </span>
                                            {dish.match_reason}
                                        </div>
                                    )}
                                </>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <style jsx>{`
                .view-dish-btn:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.5);
                }
                .back-btn:hover {
                    background: rgba(255,255,255,0.2) !important;
                }
            `}</style>
        </motion.div>
    );
}

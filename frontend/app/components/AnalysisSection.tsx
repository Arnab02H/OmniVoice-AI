"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Upload, ChevronDown, Check, ArrowUp, Plus, X, Mic, Image as ImageIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AnalysisSectionProps {
    files: File[];
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cuisine: string;
    setCuisine: (val: string) => void;
    spiceLevel: string;
    setSpiceLevel: (val: string) => void;
    dietaryConstraints: string[];
    toggleConstraint: (tag: string) => void;
    runAnalysis: () => void;
    isAnalyzing: boolean;
    setStep: (step: number) => void;
    analysisResults?: any[];
    budgetSensitivity: string;
    setBudgetSensitivity: (val: string) => void;
    targetLanguage: string;
    setTargetLanguage: (val: string) => void;
    error: string | null;
}

export default function AnalysisSection({
    files,
    handleFileChange,
    cuisine,
    setCuisine,
    spiceLevel,
    setSpiceLevel,
    dietaryConstraints,
    toggleConstraint,
    runAnalysis,
    isAnalyzing,
    setStep,
    analysisResults = [],
    budgetSensitivity,
    setBudgetSensitivity,
    targetLanguage,
    setTargetLanguage,
    error
}: AnalysisSectionProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [filter, setFilter] = useState<'all' | 'recommended'>('recommended');
    const [showInputBar, setShowInputBar] = useState(true);
    const [dishImages, setDishImages] = useState<{ [key: string]: string }>({});
    const [loadingImages, setLoadingImages] = useState<{ [key: string]: boolean }>({});
    const lastScrollY = useRef(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const currentScrollY = e.currentTarget.scrollTop;
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setShowInputBar(false);
        } else {
            setShowInputBar(true);
        }
        lastScrollY.current = currentScrollY;
    };

    // Auto-scroll when results arrive
    useEffect(() => {
        if (analysisResults.length > 0 || isAnalyzing) {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [analysisResults, isAnalyzing]);

    // Update preview when file is selected
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            handleFileChange(e);
        }
    };

    const clearFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const fetchDishImage = async (dishName: string, translatedName?: string) => {
        const nameToSearch = translatedName || dishName;
        if (dishImages[nameToSearch] || loadingImages[nameToSearch]) return;

        setLoadingImages(prev => ({ ...prev, [nameToSearch]: true }));
        try {
            const response = await fetch(`http://localhost:8000/search-image?dish_name=${encodeURIComponent(nameToSearch)}`);
            if (response.ok) {
                const data = await response.json();
                setDishImages(prev => ({ ...prev, [nameToSearch]: data.image_url }));
            }
        } catch (err) {
            console.error("Failed to fetch image:", err);
        } finally {
            setLoadingImages(prev => ({ ...prev, [nameToSearch]: false }));
        }
    };

    return (
        <motion.section
            key="chat-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '100%',
                background: 'var(--background)',
                paddingTop: '8rem', // Space for Navbar
                boxSizing: 'border-box',
                position: 'relative'
            }}
        >
            <style jsx>{`
                .chat-container {
                    flex: 1;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                    padding: 0 1rem 220px 1rem; /* Increased padding */
                    position: relative;
                    scrollbar-width: none; /* Hide scrollbar for cleaner look */
                }

                .chat-container::-webkit-scrollbar {
                    display: none;
                }

                .input-bar-container {
                    position: fixed;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    max-width: 800px;
                    z-index: 50;
                }

                .chat-input-box {
                    background: var(--card-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-radius: 1.5rem;
                    padding: 0.75rem;
                    display: flex;
                    align-items: flex-end;
                    gap: 0.75rem;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    transition: border-color 0.2s;
                }
                
                .chat-input-box:focus-within {
                    border-color: var(--primary);
                }

                .preferences-area {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    min-height: 48px;
                    justify-content: center;
                }

                .pref-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    align-items: center;
                }

                .pref-chip {
                    font-size: 0.75rem;
                    padding: 0.3rem 0.8rem;
                    border-radius: 100px;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    color: var(--foreground);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .pref-chip.active {
                    background: rgba(var(--primary-rgb), 0.1); /* Fallback if var not set, using hard color */
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }

                .send-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }

                .send-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background: var(--glass-border);
                }

                .image-preview {
                    width: 60px;
                    height: 60px;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                    flex-shrink: 0;
                    border: 1px solid var(--glass-border);
                }
                
                .upload-trigger {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--glass-bg);
                    border: 1px solid var(--glass-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--foreground);
                    transition: all 0.2s;
                    flex-shrink: 0;
                    margin-bottom: 4px; /* Align with bottom of input */
                }

                .upload-trigger:hover {
                    background: var(--glass-border);
                }

                /* Mobile Adaptations */
                @media (max-width: 768px) {
                    .input-bar-container {
                        bottom: 1rem;
                        width: 95%;
                    }
                    .chat-input-box {
                        padding: 0.5rem;
                    }
                }

                /* Hide scrollbar for chips */
                .hide-scroll::-webkit-scrollbar {
                    display: none;
                }

                .hover-scale {
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                    border-color: rgba(var(--primary-rgb), 0.5) !important;
                }
                .hover-scale:active {
                    transform: scale(0.95);
                }
            `}</style>

            {/* Main Content Area (Results or Empty) */}
            <div className="chat-container" onScroll={handleScroll}>
                {files.length === 0 && analysisResults.length === 0 && (
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.6,
                        minHeight: '400px'
                    }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: '0 10px 30px var(--primary-glow)'
                        }}>
                            <Mic color="white" size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>How can I help you communicate?</h2>
                        <p style={{ textAlign: 'center', maxWidth: '400px', color: 'var(--foreground)' }}>Upload an audio file or connect a voice stream below to set your preferences for AI-powered processing.</p>
                    </div>
                )}

                {isAnalyzing && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="animate-spin" style={{ width: '40px', height: '40px', border: '3px solid var(--glass-border)', borderTop: '3px solid var(--primary)', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>Processing audio & generating insights...</p>
                    </div>
                )}

                {error && (
                    <div style={{
                        margin: '1rem auto',
                        padding: '1rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        borderRadius: '12px',
                        color: '#ef4444',
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                {/* Results Grid - Keeping it clean, no images */}
                {!isAnalyzing && analysisResults.length > 0 && (
                    <div style={{ width: '100%', paddingBottom: '2rem' }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            marginBottom: '1.5rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--foreground)', fontWeight: 800 }}>Analysis Results</h3>
                                <div style={{ display: 'flex', gap: '0.6rem' }}>
                                    <button onClick={() => setStep(2)} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--foreground)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '100px', cursor: 'pointer', transition: 'all 0.2s ease' }}>Report</button>
                                    <button onClick={runAnalysis} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', padding: '0.5rem 1rem', borderRadius: '100px', cursor: 'pointer' }}>Retry</button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }} className="hide-scroll">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setFilter('recommended')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.6rem 1.2rem',
                                        background: filter === 'recommended' ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'rgba(255,255,255,0.05)',
                                        borderRadius: '100px',
                                        border: filter === 'recommended' ? 'none' : '1px solid var(--glass-border)',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        boxShadow: filter === 'recommended' ? '0 4px 15px var(--primary-glow)' : 'none',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    ✨ Key Voice Insights
                                </motion.button>
                                <button
                                    onClick={() => setFilter('all')}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        background: filter === 'all' ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)',
                                        border: filter === 'all' ? '1px solid white' : '1px solid var(--glass-border)',
                                        borderRadius: '100px',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    All Items ({analysisResults.length})
                                </button>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
                            {analysisResults
                                .filter(dish => filter === 'all' || dish.is_recommended)
                                .map((dish, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="glass-card"
                                        style={{
                                            padding: '1.25rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.5rem',
                                            border: dish.is_recommended ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                            background: dish.is_recommended ? 'rgba(var(--primary-rgb), 0.05)' : 'var(--card-bg)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                                                {dish.dish_name}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                {dish.price && (
                                                    <div style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 800, background: 'rgba(var(--primary-rgb), 0.1)', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
                                                        {dish.price}
                                                    </div>
                                                )}
                                                {dish.calories && (
                                                    <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.2rem' }}>
                                                        {dish.calories} kcal
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '-0.2rem' }}>
                                            {dish.translated_name && dish.translated_name !== dish.dish_name && (
                                                <div style={{ fontSize: '0.85rem', fontStyle: 'italic', opacity: 0.7, color: 'var(--secondary)', fontWeight: 500 }}>
                                                    {dish.translated_name}
                                                </div>
                                            )}
                                            {dish.original_language && (
                                                <span style={{ fontSize: '0.65rem', opacity: 0.5, padding: '0.1rem 0.4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {dish.original_language}
                                                </span>
                                            )}
                                        </div>

                                        <p style={{ fontSize: '0.9rem', color: 'var(--foreground)', opacity: 0.8, lineHeight: 1.5, flex: 1, marginTop: '0.5rem' }}>
                                            {dish.description}
                                        </p>

                                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                            {dish.safety_score && (
                                                <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid var(--glass-border)', color: 'var(--foreground)', opacity: 0.8 }}>
                                                    Safety: {dish.safety_score}/10
                                                </span>
                                            )}
                                            {dish.dietary_tags?.map((tag: string) => (
                                                <span key={tag} style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'rgba(var(--primary-rgb), 0.1)', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {dish.match_reason && (
                                            <div style={{
                                                fontSize: '0.8rem',
                                                padding: '0.8rem',
                                                background: 'rgba(255,255,255,0.03)',
                                                borderRadius: '12px',
                                                marginTop: '0.5rem',
                                                borderLeft: `3px solid ${dish.is_recommended ? 'var(--primary)' : 'rgba(255,255,255,0.1)'}`,
                                                lineHeight: 1.4
                                            }}>
                                                <span style={{ fontWeight: 700, color: dish.is_recommended ? 'var(--primary)' : 'inherit', opacity: 1, display: 'block', marginBottom: '0.2rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Voice Analysis Insight</span>
                                                <span style={{ opacity: 0.9 }}>{dish.match_reason}</span>
                                            </div>
                                        )}

                                        {/* View Image Section */}
                                        <div style={{ marginTop: '0.8rem' }}>
                                            {dishImages[dish.translated_name || dish.dish_name] ? (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    style={{
                                                        width: '100%',
                                                        height: '180px',
                                                        borderRadius: '12px',
                                                        overflow: 'hidden',
                                                        border: '1px solid var(--glass-border)',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <img
                                                        src={dishImages[dish.translated_name || dish.dish_name]}
                                                        alt={dish.dish_name}
                                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            const name = dish.translated_name || dish.dish_name;
                                                            setDishImages(prev => {
                                                                const next = { ...prev };
                                                                delete next[name];
                                                                return next;
                                                            });
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '8px',
                                                            right: '8px',
                                                            background: 'rgba(0,0,0,0.6)',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '50%',
                                                            width: '24px',
                                                            height: '24px',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <button
                                                    onClick={() => fetchDishImage(dish.dish_name, dish.translated_name)}
                                                    disabled={loadingImages[dish.translated_name || dish.dish_name]}
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.6rem',
                                                        borderRadius: '10px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid var(--glass-border)',
                                                        color: 'white',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '0.5rem',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease'
                                                    }}
                                                >
                                                    {loadingImages[dish.translated_name || dish.dish_name] ? (
                                                        <div className="animate-spin" style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.2)', borderTop: '2px solid white', borderRadius: '50%' }}></div>
                                                    ) : (
                                                        <ImageIcon size={16} />
                                                    )}
                                                    {loadingImages[dish.translated_name || dish.dish_name] ? 'Searching...' : 'View Audio Waveform'}
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Fixed Chat Input Area - Redesigned for Premium Look */}
            <div style={{
                position: 'fixed',
                bottom: '1rem',
                left: '50%',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                width: 'min(95%, 900px)',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                transform: `translateX(-50%) translateY(${showInputBar ? '0' : '150%'})`,
                opacity: showInputBar ? 1 : 0
            }}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-card"
                    style={{
                        padding: isMobile ? '0.7rem' : '0.8rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.8rem',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(180deg, rgba(20, 20, 25, 0.95) 0%, rgba(15, 15, 18, 0.98) 100%)',
                        backdropFilter: 'blur(30px)',
                        borderRadius: '28px',
                        overflow: 'hidden'
                    }}
                >
                    {/* Top Row: Selectors (Horizontal Scroll for Mobile) */}
                    <div className="hide-scroll" style={{
                        display: 'flex',
                        gap: '0.6rem',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        padding: '0.2rem',
                    }}>
                        {/* Cuisine */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <select
                                value={cuisine}
                                onChange={e => setCuisine(e.target.value)}
                                style={{
                                    appearance: 'none',
                                    background: cuisine ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(255,255,255,0.05)',
                                    border: cuisine ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '0.5rem 2.2rem 0.5rem 1rem',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    height: '42px',
                                    minWidth: '135px',
                                    outline: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <option value="" style={{ background: '#111' }}>Cuisine?</option>
                                <option value="italian" style={{ background: '#111' }}>Italian</option>
                                <option value="chinese" style={{ background: '#111' }}>Chinese</option>
                                <option value="indian" style={{ background: '#111' }}>Indian</option>
                                <option value="japanese" style={{ background: '#111' }}>Japanese</option>
                                <option value="mexican" style={{ background: '#111' }}>Mexican</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: 12, opacity: 0.6, pointerEvents: 'none', color: cuisine ? 'var(--primary)' : 'white' }} />
                        </div>

                        {/* Spice */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <select
                                value={spiceLevel}
                                onChange={e => setSpiceLevel(e.target.value)}
                                style={{
                                    appearance: 'none',
                                    background: spiceLevel && spiceLevel !== "Medium" ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(255,255,255,0.05)',
                                    border: spiceLevel && spiceLevel !== "Medium" ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '0.5rem 2.2rem 0.5rem 1rem',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    height: '42px',
                                    minWidth: '135px',
                                    outline: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <option value="Medium" style={{ background: '#111' }}>Spice?</option>
                                <option value="Low" style={{ background: '#111' }}>Low</option>
                                <option value="Medium" style={{ background: '#111' }}>Medium</option>
                                <option value="High" style={{ background: '#111' }}>High</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: 12, opacity: 0.6, pointerEvents: 'none', color: spiceLevel && spiceLevel !== "Medium" ? 'var(--primary)' : 'white' }} />
                        </div>

                        {/* Budget */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <select
                                value={budgetSensitivity}
                                onChange={e => setBudgetSensitivity(e.target.value)}
                                style={{
                                    appearance: 'none',
                                    background: budgetSensitivity !== "Normal" ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(255,255,255,0.05)',
                                    border: budgetSensitivity !== "Normal" ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '0.5rem 2.2rem 0.5rem 1rem',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    height: '42px',
                                    minWidth: '135px',
                                    outline: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <option value="Normal" style={{ background: '#111' }}>Budget?</option>
                                <option value="Value" style={{ background: '#111' }}>Value</option>
                                <option value="Standard" style={{ background: '#111' }}>Standard</option>
                                <option value="Premium" style={{ background: '#111' }}>Premium</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: 12, opacity: 0.6, pointerEvents: 'none', color: budgetSensitivity !== "Normal" ? 'var(--primary)' : 'white' }} />
                        </div>

                        {/* Language */}
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <select
                                value={targetLanguage}
                                onChange={e => setTargetLanguage(e.target.value)}
                                style={{
                                    appearance: 'none',
                                    background: targetLanguage !== "English" ? 'rgba(var(--primary-rgb), 0.15)' : 'rgba(255,255,255,0.05)',
                                    border: targetLanguage !== "English" ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '0.5rem 2.2rem 0.5rem 1rem',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    height: '42px',
                                    minWidth: '135px',
                                    outline: 'none',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <option value="English" style={{ background: '#111' }}>Language?</option>
                                <option value="English" style={{ background: '#111' }}>English</option>
                                <option value="Spanish" style={{ background: '#111' }}>Spanish</option>
                                <option value="French" style={{ background: '#111' }}>French</option>
                                <option value="German" style={{ background: '#111' }}>German</option>
                                <option value="Hindi" style={{ background: '#111' }}>Hindi</option>
                                <option value="Bengali" style={{ background: '#111' }}>Bengali</option>
                                <option value="Japanese" style={{ background: '#111' }}>Japanese</option>
                                <option value="Chinese" style={{ background: '#111' }}>Chinese</option>
                                <option value="Arabic" style={{ background: '#111' }}>Arabic</option>
                                <option value="Russian" style={{ background: '#111' }}>Russian</option>
                                <option value="Portuguese" style={{ background: '#111' }}>Portuguese</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: 12, opacity: 0.6, pointerEvents: 'none', color: targetLanguage !== "English" ? 'var(--primary)' : 'white' }} />
                        </div>

                        <div style={{ flex: 1, minWidth: '10px' }} /> {/* Spacer */}
                    </div>

                    {/* Bottom Row: Dietary Tags & Action */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        {/* File Upload/Preview */}
                        <div style={{ position: 'relative' }}>
                            {previewUrl ? (
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    border: '1px solid var(--primary)',
                                    position: 'relative'
                                }}>
                                    <img src={previewUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Preview" />
                                    <button
                                        onClick={clearFile}
                                        style={{
                                            position: 'absolute', top: 0, right: 0,
                                            background: 'rgba(0,0,0,0.8)', border: 'none',
                                            color: 'white', width: '16px', height: '16px',
                                            fontSize: '10px', cursor: 'pointer', display: 'flex',
                                            alignItems: 'center', justifyContent: 'center'
                                        }}
                                    >
                                        <X size={10} />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        flexShrink: 0
                                    }}
                                >
                                    <Plus size={20} />
                                </div>
                            )}
                            <input ref={fileInputRef} type="file" multiple onChange={onFileChange} accept="image/*" style={{ display: 'none' }} />
                        </div>

                        {/* Dietary Tags (Horizontal Scroll) */}
                        <div className="hide-scroll" style={{
                            flex: 1,
                            display: 'flex',
                            gap: '0.4rem',
                            overflowX: 'auto',
                            padding: '0.1rem'
                        }}>
                            {['Veg', 'Non-Veg', 'Allergies', 'Vegan', 'Nut-Free', 'Dairy-Free', 'GF'].map(tag => (
                                <motion.button
                                    key={tag}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleConstraint(tag)}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '100px',
                                        fontSize: '0.8rem',
                                        whiteSpace: 'nowrap',
                                        background: dietaryConstraints.includes(tag) ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                        border: dietaryConstraints.includes(tag) ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        fontWeight: 600
                                    }}
                                >
                                    {tag}
                                </motion.button>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={files.length > 0 ? { scale: 1.1 } : {}}
                            whileTap={files.length > 0 ? { scale: 0.9 } : {}}
                            animate={files.length > 0 && !isAnalyzing ? {
                                boxShadow: [
                                    "0 0 0px rgba(99, 102, 241, 0)",
                                    "0 0 20px rgba(99, 102, 241, 0.4)",
                                    "0 0 0px rgba(99, 102, 241, 0)"
                                ]
                            } : {}}
                            transition={{ repeat: Infinity, duration: 2 }}
                            onClick={runAnalysis}
                            disabled={isAnalyzing || files.length === 0}
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: isAnalyzing ? 'rgba(255,255,255,0.1)' : files.length > 0 ? 'var(--primary)' : 'white',
                                color: files.length > 0 ? 'white' : 'black',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: files.length > 0 ? 'pointer' : 'not-allowed',
                                opacity: files.length > 0 ? 1 : 0.3,
                                flexShrink: 0
                            }}
                        >
                            {isAnalyzing ? (
                                <div className="animate-spin" style={{ width: '18px', height: '18px', border: '2px solid rgba(0,0,0,0.1)', borderTop: '2px solid #fff', borderRadius: '50%' }}></div>
                            ) : (
                                <ArrowUp size={20} strokeWidth={3} />
                            )}
                        </motion.button>
                    </div>

                    {/* Disclaimer inside for cleaner look */}
                    <div style={{
                        fontSize: '0.6rem',
                        opacity: 0.3,
                        textAlign: 'center',
                        marginTop: '0.4rem',
                        color: 'white',
                        letterSpacing: '0.02em'
                    }}>
                        Linguine AI can make mistakes. Please verify important dietary info.
                    </div>
                </motion.div>
            </div>

        </motion.section >
    );
}

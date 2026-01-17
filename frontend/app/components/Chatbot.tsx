"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Sparkles, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
    role: 'user' | 'bot';
    content: string;
}

const FAQ_DATA = [
    {
        questions: ["what is omnivoice ai", "what is this website"],
        answer: "OmniVoice.AI is an all-in-one AI voice platform that handles every type of voice interaction—from real-time translation to voice automation."
    },
    {
        questions: ["how does it work", "steps"],
        answer: "Simply connect your voice stream or upload audio. Our AI handles real-time transcription, translation, and intelligent response generation."
    },
    {
        questions: ["translate", "language", "other languages"],
        answer: "Yes, I can translate menu cards from most languages into English instantly."
    },
    {
        questions: ["type", "typing", "manually"],
        answer: "No. Simply upload a photo of the menu card. I handle the rest of the parsing and translation for you."
    },
    {
        questions: ["suggest", "recommendation", "dish suggestion"],
        answer: "Yes, I recommend dishes based on your cuisine choice, dietary preference, health goals, and spice tolerance."
    },
    {
        questions: ["vegetarian", "non-vegetarian", "vegan", "veg"],
        answer: "Yes. I support vegetarian, non-vegetarian, vegan, and other specific dietary preferences."
    },
    {
        questions: ["healthy", "balanced", "diet", "weight"],
        answer: "Absolutely. You can choose healthy, balanced, or indulgent food preferences when you set up your profile."
    },
    {
        questions: ["spice", "spicy", "chili"],
        answer: "Yes. You can choose low, medium, or high spice tolerance to filter the results."
    },
    {
        questions: ["allergy", "allergies", "nuts", "dairy", "gluten", "seafood"],
        answer: "You can mention allergies like nuts, dairy, gluten, or seafood, and I’ll identify and avoid those dishes for you."
    },
    {
        questions: ["local", "specialties", "authentic"],
        answer: "Yes. I can prioritize local and authentic dishes from the menu so you get the true experience."
    },
    {
        questions: ["explain", "ingredients", "cooking style"],
        answer: "Yes. I can explain ingredients, cooking style, and health aspects of any dish on the menu."
    },
    {
        questions: ["country", "travel", "abroad"],
        answer: "Yes. OmniVoice.AI is designed for global communication, breaking language barriers in real-time."
    },
    {
        questions: ["first-time", "traveler", "confidence"],
        answer: "Definitely. Linguine AI helps you order confidently without language barriers, making it perfect for first-time travelers."
    },
    {
        questions: ["internet", "offline", "data"],
        answer: "Yes. An internet connection is required for high-accuracy translation and personalized recommendations."
    },
    {
        questions: ["another menu", "multiple", "upload again"],
        answer: "Yes. You can upload multiple menu cards anytime. Just go back to the upload step!"
    },
    {
        questions: ["different", "unique", "better"],
        answer: "What makes OmniVoice.AI different is its ultra-low latency and neural voice synthesis that feels completely natural."
    }
];

const SUGGESTED_QUESTIONS = [
    "What is OmniVoice.AI?",
    "How does it work?",
    "Voice automation info?",
    "What makes it different?"
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', content: "Hi! I'm OmniVoice Bot. How can I help you with your voice interactions today?" }
    ]);
    const [input, setInput] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkVisibility = () => {
            const isAnalyzePage = window.location.hash === '#analyze-menu';
            const isMobile = window.innerWidth <= 768;
            if (isAnalyzePage && isMobile) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        checkVisibility();
        window.addEventListener('hashchange', checkVisibility);
        window.addEventListener('resize', checkVisibility);
        return () => {
            window.removeEventListener('hashchange', checkVisibility);
            window.removeEventListener('resize', checkVisibility);
        };
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (providedInput?: string) => {
        const textToSend = providedInput || input;
        if (!textToSend.trim()) return;

        const userMsg = textToSend.toLowerCase().trim();
        const newMessages: Message[] = [...messages, { role: 'user', content: textToSend }];
        setMessages(newMessages);
        if (!providedInput) setInput("");

        // Simple matching logic
        setTimeout(() => {
            let botAnswer = "I'm not sure about that. Try asking about how OmniVoice.AI works, voice automation, or our unique features!";

            for (const item of FAQ_DATA) {
                if (item.questions.some(q => userMsg.includes(q.toLowerCase()))) {
                    botAnswer = item.answer;
                    break;
                }
            }

            setMessages(prev => [...prev, { role: 'bot', content: botAnswer }]);
        }, 600);
    };

    if (!isVisible) return null;

    return (
        <div className="chatbot-container" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            fontFamily: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass-card chatbot-window"
                        style={{
                            width: '350px',
                            height: '500px',
                            marginBottom: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            border: '1px solid var(--glass-border)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.2rem', background: 'var(--primary)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <div style={{ width: '40px', height: '40px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                                    <img src="/bot-mascot-transparent.png" alt="bot" style={{ width: '120%', height: '120%', objectFit: 'contain', mixBlendMode: 'screen', borderRadius: '50%' }} />
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>OmniVoice Support</h4>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>Online & ready to help</span>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    setMessages([
                                        { role: 'bot', content: "Hi! I'm OmniVoice Bot. How can I help you with your voice interactions today?" }
                                    ]);
                                    setIsOpen(false);
                                }}
                                style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.2)' }}
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '80%',
                                        display: 'flex',
                                        gap: '0.6rem',
                                        flexDirection: msg.role === 'user' ? 'row-reverse' : 'row'
                                    }}
                                >
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: msg.role === 'user' ? 'var(--secondary)' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        overflow: 'hidden'
                                    }}>
                                        {msg.role === 'user' ? (
                                            <User size={16} color="white" />
                                        ) : (
                                            <img src="/bot-mascot-transparent.png" alt="bot" style={{ width: '140%', height: '140%', objectFit: 'contain', mixBlendMode: 'screen', borderRadius: '50%' }} />
                                        )}
                                    </div>
                                    <div style={{
                                        padding: '0.8rem 1rem',
                                        borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                                        background: msg.role === 'user' ? 'var(--secondary)' : 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)',
                                        fontSize: '0.85rem',
                                        lineHeight: 1.4,
                                        color: 'white'
                                    }}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Suggested Questions */}
                            {messages.length === 1 && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                                    {SUGGESTED_QUESTIONS.map((q, i) => (
                                        <motion.button
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            onClick={() => handleSend(q)}
                                            style={{
                                                padding: '0.5rem 0.8rem',
                                                borderRadius: '100px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid var(--glass-border)',
                                                color: 'white',
                                                fontSize: '0.75rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease'
                                            }}
                                            whileHover={{ background: 'var(--primary)', borderColor: 'var(--primary)' }}
                                        >
                                            {q}
                                        </motion.button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div style={{ padding: '1.2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.8rem' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about OmniVoice.AI..."
                                style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '100px',
                                    padding: '0.7rem 1.2rem',
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    outline: 'none'
                                }}
                            />
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleSend()}
                                style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    border: 'none',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <Send size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    if (isOpen) {
                        setMessages([
                            { role: 'bot', content: "Hi! I'm OmniVoice Bot. How can I help you with your voice interactions today?" }
                        ]);
                    }
                    setIsOpen(!isOpen);
                }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
                {isOpen ? <X size={28} /> : (
                    <img src="/bot-mascot-transparent.png" alt="bot" style={{ width: '60px', height: '60px', objectFit: 'contain', mixBlendMode: 'screen', borderRadius: '50%' }} />
                )}
                {!isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                            position: 'absolute',
                            top: -2,
                            right: -2,
                            width: '18px',
                            height: '18px',
                            background: '#ef4444',
                            borderRadius: '50%',
                            border: '3px solid #000',
                            zIndex: 1
                        }}
                    />
                )}
            </motion.button>
        </div>
    );
}

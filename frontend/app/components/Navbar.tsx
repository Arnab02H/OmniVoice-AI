import { motion, AnimatePresence } from "framer-motion";
import { Mic, Sun, Moon, X, Menu, ChevronDown, LayoutGrid, Bot, Mic2, AudioLines, ArrowRight, Landmark, HeartPulse, Box, Headset, Phone, ShoppingBag, HandCoins, Handshake, Megaphone } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { track } from "@vercel/analytics";
import LoginModal from "./LoginModal";

interface NavbarProps {
    isDarkMode: boolean;
    setIsDarkMode: (val: boolean) => void;
    setStep: (step: number) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode, setStep }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        { name: 'Products', href: '#products', hasDropdown: true },
        { name: 'Industries', href: '#usecases', hasDropdown: true },
        { name: 'UseCases', href: '#usecases', hasDropdown: true },
        { name: 'Contact', href: '#contact', hasChevron: false },
        { name: 'About US', href: '#founder', hasChevron: false }
    ];

    return (
        <>
            <nav className="glass-card" style={{
                position: 'fixed',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 200,
                padding: '0.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '100px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setStep(0)}>
                    <div className="logo-icon-box" style={{
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        padding: '0.5rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Mic size={20} color="white" />
                    </div>
                    <span className="logo-text" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.5px' }}>OmniVoice.<span className="gradient-text">AI</span></span>
                </div>

                <div className="desktop-menu" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    {menuItems.map((item) => (
                        <div key={item.name} style={{ position: 'relative' }} ref={item.hasDropdown && activeDropdown === item.name ? dropdownRef : null}>
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (item.hasDropdown) {
                                        e.preventDefault();
                                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                                    }
                                }}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '50px',
                                    background: activeDropdown === item.name ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                                    color: activeDropdown === item.name ? '#fff' : 'inherit'
                                }}
                                onMouseEnter={(e) => {
                                    if (!activeDropdown) e.currentTarget.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    if (!activeDropdown) e.currentTarget.style.opacity = '0.7';
                                }}
                            >
                                {item.name}
                                {(item.hasDropdown || item.hasChevron) && (
                                    <ChevronDown
                                        size={14}
                                        style={{
                                            transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                            opacity: 0.5
                                        }}
                                    />
                                )}
                            </a>

                            <AnimatePresence>
                                {activeDropdown === item.name && item.hasDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                        style={{
                                            position: 'absolute',
                                            top: '160%',
                                            left: item.name === 'Products' ? '0' : '-100px',
                                            width: item.name === 'Products' ? '480px' : '580px',
                                            background: 'rgba(10, 10, 12, 0.98)',
                                            borderRadius: '24px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8)',
                                            padding: '10px',
                                            zIndex: 300,
                                            display: 'flex',
                                            overflow: 'hidden',
                                            backdropFilter: 'blur(40px)'
                                        }}
                                    >
                                        {item.name === 'Products' && (
                                            <>
                                                {/* Left Side */}
                                                <div style={{
                                                    flex: '1',
                                                    background: 'rgba(255, 255, 255, 0.03)',
                                                    padding: '2rem 1.75rem',
                                                    borderRadius: '18px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '1.25rem',
                                                    justifyContent: 'center'
                                                }}>
                                                    <div style={{
                                                        width: '48px',
                                                        height: '48px',
                                                        background: 'rgba(255, 255, 255, 0.05)',
                                                        borderRadius: '12px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'var(--primary)',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)'
                                                    }}>
                                                        <LayoutGrid size={24} />
                                                    </div>
                                                    <div>
                                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff', letterSpacing: '-0.02em' }}>AI Products</h3>
                                                        <p style={{ fontSize: '0.85rem', opacity: 0.5, lineHeight: '1.5', fontWeight: 400 }}>
                                                            Cutting-edge AI solutions for your business.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Right Side */}
                                                <div style={{ flex: '1.2' }}>
                                                    <DropdownLink
                                                        icon={<Bot size={20} />}
                                                        title="Voice AI Agents"
                                                        href="#products"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.1}
                                                    />
                                                    <DropdownLink
                                                        icon={<AudioLines size={20} />}
                                                        title="Text-to-Speech (TTS)"
                                                        href="#products"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.15}
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {item.name === 'Industries' && (
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', padding: '0.5rem' }}>
                                                <div>
                                                    <DropdownLink
                                                        icon={<Landmark size={20} />}
                                                        title="Banking & Financial Services"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.05}
                                                    />
                                                    <DropdownLink
                                                        icon={<HeartPulse size={20} />}
                                                        title="Insurance"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.1}
                                                    />
                                                    <DropdownLink
                                                        icon={<Box size={20} />}
                                                        title="Logistics"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.15}
                                                    />
                                                </div>
                                                <div>
                                                    <DropdownLink
                                                        icon={<Headset size={20} />}
                                                        title="BPO / Contact Center"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.1}
                                                    />
                                                    <DropdownLink
                                                        icon={<Phone size={20} />}
                                                        title="Telecom"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.15}
                                                    />
                                                    <DropdownLink
                                                        icon={<ShoppingBag size={20} />}
                                                        title="Retail & E-commerce"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.2}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {item.name === 'UseCases' && (
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', padding: '0.5rem' }}>
                                                <div>
                                                    <DropdownLink
                                                        icon={<HandCoins size={20} />}
                                                        title="Collection"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.05}
                                                    />
                                                    <DropdownLink
                                                        icon={<Handshake size={20} />}
                                                        title="Customer Support"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.1}
                                                    />
                                                </div>
                                                <div>
                                                    <DropdownLink
                                                        icon={<Megaphone size={20} />}
                                                        title="Sales & Marketing"
                                                        href="#usecases"
                                                        onClick={() => setActiveDropdown(null)}
                                                        delay={0.1}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            cursor: 'pointer',
                            color: 'var(--foreground)',
                            transition: 'var(--transition)'
                        }}
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </div>
                    <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }} onClick={() => {
                        track('login_click_nav');
                        setIsLoginOpen(true);
                    }}>
                        Login
                    </button>
                </div>

                <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            <style jsx>{`
                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                }
                @media (max-width: 900px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block;
                    }
                }
            `}</style>

            <AnimatePresence>
                {isLoginOpen && (
                    <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass-card"
                        style={{ position: 'fixed', top: '6rem', left: '5%', width: '90%', zIndex: 150, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        {menuItems.map((item) => (
                            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                {item.name}
                            </a>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '1rem', fontWeight: 600 }}>Theme</span>
                            <div
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    cursor: 'pointer',
                                    color: 'var(--foreground)',
                                    transition: 'var(--transition)'
                                }}
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </div>
                        </div>
                        <button className="btn-primary" onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}>
                            Login
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function DropdownLink({ icon, title, href, onClick, delay = 0 }: { icon: React.ReactNode, title: string, href: string, onClick: () => void, delay?: number }) {
    return (
        <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.3 }}
            href={href}
            onClick={onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer'
            }}
            onMouseEnter={(e: React.MouseEvent) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'rgba(255, 255, 255, 0.05)';
                target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e: React.MouseEvent) => {
                const target = e.currentTarget as HTMLElement;
                target.style.background = 'transparent';
                target.style.transform = 'translateX(0px)';
            }}
        >
            <div style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8,
                color: 'var(--primary)'
            }}>
                {icon}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>{title}</div>
            </div>
            <ArrowRight size={14} style={{ opacity: 0.3 }} />
        </motion.a>
    );
}

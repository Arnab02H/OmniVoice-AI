"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Using Web3Forms - A free service to receive emails from forms
            // No backend required, just a public access key.
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "ea0695fe-5fd3-42a0-a450-45d0bc35eac7",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Message from OmniVoice.AI Contact Form: ${formData.name}`,
                    from_name: "OmniVoice AI Robot",
                }),
            });

            const result = await response.json();
            console.log("Web3Forms Response:", result);

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                // Auto-reset after 7 seconds
                setTimeout(() => setStatus("idle"), 7000);
            } else {
                console.error("Web3Forms Error:", result.message);
                setStatus("error");
                // If the error message indicates unverified email, we can help the user
                if (result.message?.includes("verify")) {
                    alert("Important: Please check your inbox (genaiedu2025@gmail.com) and click the activation link from Web3Forms to enable this form.");
                }
            }
        } catch (error) {
            console.error("Submission Network Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" style={{ padding: '6rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}
            >
                <AnimatePresence mode="wait">
                    {status === "success" ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                        >
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: '#10b981' }}>
                                <CheckCircle2 size={48} />
                            </div>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>Message Sent!</h3>
                            <p style={{ opacity: 0.7, maxWidth: '400px' }}>Your message has been delivered to <strong>genaiedu2025@gmail.com</strong>. We'll get back to you soon!</p>
                            <button
                                onClick={() => setStatus("idle")}
                                style={{ marginTop: '1rem', background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--foreground)', padding: '0.6rem 1.5rem', borderRadius: '100px', cursor: 'pointer' }}
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div key="form">
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Get in Touch</h2>
                            <p style={{ opacity: 0.6, marginBottom: '2rem' }}>
                                Have questions? Email us at <a href="mailto:genaiedu2025@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>genaiedu2025@gmail.com</a>
                            </p>

                            {status === "error" && (
                                <p style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '0.9rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                                    Oops! Something went wrong. Please check your connection or email us directly.
                                </p>
                            )}

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', opacity: 0.7 }}>Message</label>
                                    <textarea
                                        required
                                        rows={3}
                                        placeholder="How can we help?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white', outline: 'none', resize: 'none' }}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn-primary"
                                    style={{ alignSelf: 'center', padding: '1rem 3rem', minWidth: '200px', justifyContent: 'center' }}
                                >
                                    {status === "loading" ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

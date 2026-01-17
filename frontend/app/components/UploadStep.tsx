"use client";

import { motion } from "framer-motion";
import { Upload } from "lucide-react";

interface UploadStepProps {
    files: File[];
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setStep: (step: number) => void;
}

export default function UploadStep({ files, handleFileChange, setStep }: UploadStepProps) {
    return (
        <motion.section
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ paddingTop: '10rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
        >
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Upload Menu Photos</h2>
            <p style={{ opacity: 0.6, marginBottom: '3rem' }}>Snap a photo or upload high-quality images of the restaurant menu.</p>

            <div
                className="glass-card"
                style={{
                    padding: '5rem 2rem',
                    borderStyle: 'dashed',
                    borderWidth: '2px',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    position: 'relative'
                }}
            >
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0,
                        cursor: 'pointer'
                    }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Upload size={32} className="gradient-text" />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            {files.length > 0 ? `${files.length} Image(s) Selected` : 'Drop Menu Images Here'}
                        </h3>
                        <p style={{ opacity: 0.5 }}>Supports multi-page menus (JPG, PNG, PDF)</p>
                    </div>
                </div>
            </div>
            <button
                onClick={() => setStep(0)}
                style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.5 }}
            >
                &larr; Back to Home
            </button>
        </motion.section>
    );
}

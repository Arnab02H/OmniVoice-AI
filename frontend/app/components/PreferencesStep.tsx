"use client";

import { motion } from "framer-motion";
import { Filter } from "lucide-react";

interface PreferencesStepProps {
    cuisine: string;
    setCuisine: (val: string) => void;
    spiceLevel: string;
    setSpiceLevel: (val: string) => void;
    dietaryConstraints: string[];
    toggleConstraint: (tag: string) => void;
    runAnalysis: () => void;
    isAnalyzing: boolean;
    prevStep: () => void;
}

export default function PreferencesStep({
    cuisine,
    setCuisine,
    spiceLevel,
    setSpiceLevel,
    dietaryConstraints,
    toggleConstraint,
    runAnalysis,
    isAnalyzing,
    prevStep
}: PreferencesStepProps) {
    return (
        <motion.section
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{ paddingTop: '10rem', maxWidth: '800px', margin: '0 auto' }}
        >
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                    onClick={prevStep}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.5 }}
                >
                    &larr; Back
                </button>
                <h2 style={{ fontSize: '2rem' }}>Personalize Your Experience</h2>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Preferred Cuisine</label>
                            <select
                                value={cuisine}
                                onChange={(e) => setCuisine(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'white' }}
                            >
                                <option value="">Any Regional Specifics...</option>
                                <option value="italian">Italian</option>
                                <option value="chinese">Chinese</option>
                                <option value="indian">Indian</option>
                                <option value="japanese">Japanese</option>
                                <option value="mexican">Mexican</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Spice Tolerance</label>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {['Low', 'Medium', 'High'].map(level => (
                                    <button
                                        key={level}
                                        onClick={() => setSpiceLevel(level)}
                                        style={{
                                            flex: 1,
                                            padding: '0.5rem',
                                            borderRadius: '0.5rem',
                                            border: `1px solid ${spiceLevel === level ? 'var(--primary)' : 'var(--glass-border)'}`,
                                            background: spiceLevel === level ? 'var(--primary-glow)' : 'var(--glass-bg)',
                                            color: 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', opacity: 0.7 }}>Dietary Constraints</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['Vegetarian', 'Vegan', 'Gluten-Free', 'Nut-Free', 'Dairy-Free'].map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleConstraint(tag)}
                                        style={{
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '2rem',
                                            border: `1px solid ${dietaryConstraints.includes(tag) ? 'var(--primary)' : 'var(--glass-border)'}`,
                                            background: dietaryConstraints.includes(tag) ? 'var(--primary-glow)' : 'var(--glass-bg)',
                                            color: 'white',
                                            cursor: 'pointer',
                                            fontSize: '0.85rem',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            className="btn-primary"
                            style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            onClick={runAnalysis}
                            disabled={isAnalyzing}
                        >
                            {isAnalyzing ? 'Analyzing...' : 'Analyze Menu'}
                            {isAnalyzing ? <div className="loader" /> : <Filter size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

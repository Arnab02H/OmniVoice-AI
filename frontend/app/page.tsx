"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import UseCases from "./components/UseCases";
import Industries from "./components/Industries";
import Mission from "./components/Mission";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnalysisSection from "./components/AnalysisSection";
import ResultsStep from "./components/ResultsStep";
import ProductsSection from "./components/ProductsSection";
import { track } from "@vercel/analytics";

export default function Home() {
    const [step, setStepState] = useState(0); // 0 = Landing, 1 = Analysis, 2 = Results, 3 = Products

    // Custom setStep to sync with URL hash
    const setStep = (newStep: number | ((prev: number) => number)) => {
        setStepState(prev => {
            const val = typeof newStep === 'function' ? newStep(prev) : newStep;
            if (val === 3) {
                window.location.hash = 'products';
            } else if (val === 0) {
                window.location.hash = 'home';
            }
            return val;
        });
    };

    useEffect(() => {
        // Handle initial hash and back/forward navigation
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#products') {
                setStepState(3);
            } else {
                setStepState(0);
            }
        };

        // Check on mount
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [files, setFiles] = useState<File[]>([]);
    const [cuisine, setCuisine] = useState("");
    const [spiceLevel, setSpiceLevel] = useState("Medium");
    const [dietaryConstraints, setDietaryConstraints] = useState<string[]>([]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [budgetSensitivity, setBudgetSensitivity] = useState("Normal");
    const [targetLanguage, setTargetLanguage] = useState("English");
    const [analysisResults, setAnalysisResults] = useState<any[]>([]);

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }, [isDarkMode]);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    const toggleConstraint = (tag: string) => {
        setDietaryConstraints(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const runAnalysis = async () => {
        setIsAnalyzing(true);
        setError(null);
        track('analysis_started');
        const formData = new FormData();
        files.forEach(file => formData.append("images", file));
        formData.append("cuisine", cuisine);
        formData.append("spice_level", spiceLevel);
        formData.append("dietary_constraints", JSON.stringify(dietaryConstraints));
        formData.append("budget_sensitivity", budgetSensitivity);
        formData.append("target_language", targetLanguage);

        try {
            const response = await fetch("http://localhost:8000/analyze-menu", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Analysis failed");
            }

            if (data && Array.isArray(data.dishes)) {
                setAnalysisResults(data.dishes);
                track('analysis_success', { dishCount: data.dishes.length });
            } else {
                setError("No dishes found or invalid format.");
                track('analysis_no_results');
            }
        } catch (err: any) {
            console.error("Analysis failed:", err);
            setError(err.message || "Something went wrong.");
            setAnalysisResults([]);
            track('analysis_error', { error: err.message });
        } finally {
            setIsAnalyzing(false);
        }
    };

    const downloadJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(analysisResults, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "menu_analysis.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        track('download_json');
    };

    return (
        <main style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            <Navbar
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setStep={setStep}
            />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <div key="landing">
                        <Hero setStep={setStep} />
                        <Capabilities />
                        <Industries />
                        <UseCases />
                        <Mission />
                        <Founder setStep={setStep} />
                        <Contact />
                        <Footer />
                    </div>
                )}


                {step === 3 && (
                    <ProductsSection setStep={setStep} />
                )}
            </AnimatePresence>
        </main >
    );
}

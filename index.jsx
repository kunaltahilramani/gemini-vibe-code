import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Palette, Bot, PenSquare, Image, MessageSquare, Sun, Moon, ArrowRight, Upload, X, Users, GitMerge, Wand2, LayoutTemplate, FileText, ClipboardCheck } from 'lucide-react';

// Main App Component
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    if (!isLoggedIn) {
        return <LandingPage onLogin={() => setIsLoggedIn(true)} toggleTheme={toggleTheme} theme={theme} />;
    }

    return <Dashboard toggleTheme={toggleTheme} theme={theme} />;
};

// Landing Page Component
const LandingPage = ({ onLogin, toggleTheme, theme }) => {
    const tools = [
        { name: "Chroma AI", description: "Generate accessible color palettes from a word, color, or image.", icon: <Palette className="w-8 h-8 text-indigo-400" /> },
        { name: "Typograph AI", description: "Discover and preview perfect font pairings for your projects.", icon: <PenSquare className="w-8 h-8 text-sky-400" /> },
        { name: "Inspo AI", description: "Create inspiring mood boards from a single keyword or theme.", icon: <Image className="w-8 h-8 text-emerald-400" /> },
        { name: "Critique AI", description: "Get instant feedback and analysis on your UI/UX designs.", icon: <Bot className="w-8 h-8 text-rose-400" /> },
        { name: "Copy AI", description: "Generate compelling microcopy for buttons, modals, and more.", icon: <MessageSquare className="w-8 h-8 text-amber-400" /> },
        { name: "PersonaGen AI", description: "Instantly create detailed user personas from a simple description.", icon: <Users className="w-8 h-8 text-cyan-400" /> },
        { name: "Flow Architect", description: "Visualize user flows and information architecture automatically.", icon: <GitMerge className="w-8 h-8 text-fuchsia-400" /> },
        { name: "IconForge AI", description: "Design unique, SVG-style icons with a text prompt.", icon: <Wand2 className="w-8 h-8 text-lime-400" /> },
        { name: "Layout AI", description: "Explore different wireframe layouts for your screen components.", icon: <LayoutTemplate className="w-8 h-8 text-orange-400" /> },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold tracking-tighter">
                        UX<span className="text-indigo-500">Forge</span>
                    </h1>
                    <div className="flex items-center space-x-4">
                         <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button onClick={onLogin} className="hidden md:inline-block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400">Login</button>
                        <button onClick={onLogin} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>

            <main className="pt-24">
                <section className="container mx-auto px-6 py-20 text-center">
                    <div className="bg-indigo-500 text-white py-1 px-3 rounded-full text-xs inline-block mb-4 font-semibold">An AI Copilot for Modern Designers</div>
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">Craft Brilliance, Faster.</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Stop juggling tabs. UX Forge integrates a suite of powerful, AI-driven tools into one seamless workflow, helping you move from idea to pixel-perfect reality in record time.
                    </p>
                    <button onClick={onLogin} className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-indigo-500/30 flex items-center mx-auto">
                        Start Forging for Free <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </section>

                <section className="container mx-auto px-6 py-16">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.map((tool, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="mb-4">{tool.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                            </div>
                        ))}
                     </div>
                </section>
            </main>

            <footer className="bg-gray-100 dark:bg-gray-950/50 mt-20">
                <div className="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                    <p>&copy; 2025 UX Forge. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

// Dashboard Component
const Dashboard = ({ toggleTheme, theme }) => {
    const [activeTool, setActiveTool] = useState('Chroma AI');

    const tools = [
        { id: 'Chroma AI', name: 'Chroma AI', icon: Palette },
        { id: 'Typograph AI', name: 'Typograph AI', icon: PenSquare },
        { id: 'Inspo AI', name: 'Inspo AI', icon: Image },
        { id: 'Critique AI', name: 'Critique AI', icon: Bot },
        { id: 'Copy AI', name: 'Copy AI', icon: MessageSquare },
        { id: 'PersonaGen AI', name: 'PersonaGen AI', icon: Users },
        { id: 'Flow Architect', name: 'Flow Architect', icon: GitMerge },
        { id: 'IconForge AI', name: 'IconForge AI', icon: Wand2 },
        { id: 'Layout AI', name: 'Layout AI', icon: LayoutTemplate },
        { id: 'Usability Script AI', name: 'Usability Script AI', icon: FileText },
        { id: 'SpecCheck AI', name: 'SpecCheck AI', icon: ClipboardCheck },
    ];
    
    const renderActiveTool = () => {
        switch (activeTool) {
            case 'Chroma AI': return <ColorPaletteGenerator />;
            case 'Typograph AI': return <FontPairingTool />;
            case 'Inspo AI': return <MoodBoardCreator />;
            case 'Critique AI': return <DesignReviewTool />;
            case 'Copy AI': return <MicrocopyGenerator />;
            case 'PersonaGen AI': return <PersonaGenAI />;
            case 'Flow Architect': return <FlowArchitect />;
            case 'IconForge AI': return <IconForgeAI />;
            case 'Layout AI': return <LayoutAI />;
            case 'Usability Script AI': return <UsabilityScriptAI />;
            case 'SpecCheck AI': return <SpecCheckAI />;
            default: return <ColorPaletteGenerator />;
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
            <nav className="w-64 bg-white dark:bg-gray-950/30 border-r border-gray-200 dark:border-gray-800 flex flex-col p-4">
                 <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold tracking-tighter">
                        UX<span className="text-indigo-500">Forge</span>
                    </h1>
                     <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
                <div className="flex-grow overflow-y-auto pr-2">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">Tools</p>
                    {tools.map(tool => (
                        <button
                            key={tool.id}
                            onClick={() => setActiveTool(tool.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1 ${
                                activeTool === tool.id
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                            }`}
                        >
                            <tool.icon className="w-5 h-5" />
                            <span>{tool.name}</span>
                        </button>
                    ))}
                </div>
                 <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-3">
                        <img src="https://placehold.co/40x40/6366f1/ffffff?text=U" alt="User avatar" className="rounded-full" />
                        <div>
                            <p className="font-semibold text-sm">Designer</p>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:underline">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto">
                    {renderActiveTool()}
                </div>
            </main>
        </div>
    );
};

// Generic UI components
const ToolHeader = ({ title, subtitle }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
        <p className="mt-1 text-md text-gray-600 dark:text-gray-400">{subtitle}</p>
    </div>
);

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
    </div>
);

const MessageBox = ({ message, type = 'info' }) => {
    const colors = {
        info: 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900/50 dark:border-blue-700 dark:text-blue-300',
        error: 'bg-red-100 border-red-500 text-red-700 dark:bg-red-900/50 dark:border-red-700 dark:text-red-300',
    };
    return (
        <div className={`border-l-4 p-4 rounded-r-lg ${colors[type]}`} role="alert">
            <p>{message}</p>
        </div>
    );
};


// --- EXISTING AI-POWERED TOOLS ---
const ColorPaletteGenerator = () => {
    const [palettes, setPalettes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('Vibrant sunset over a city');

    const generatePalette = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setPalettes([]);
        
        const apiPrompt = `Generate 3 distinct color palettes based on the theme: "${prompt}". Each palette should be visually harmonious and suitable for a modern UI. Provide a creative name for each palette. For each color, provide the hex code and a brief description of its role (e.g., Primary, Accent, Background).`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    palettes: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                name: { type: "STRING" },
                                colors: {
                                    type: "ARRAY",
                                    items: {
                                        type: "OBJECT",
                                        properties: {
                                            hex: { type: "STRING" },
                                            role: { type: "STRING" },
                                        },
                                        required: ["hex", "role"]
                                    }
                                }
                            },
                            required: ["name", "colors"]
                        }
                    }
                }
            }
        };

        const payload = {
            contents: [{ role: "user", parts: [{ text: apiPrompt }] }],
            generationConfig,
        };
        const apiKey = ""
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const result = await response.json();

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const parsedJson = JSON.parse(result.candidates[0].content.parts[0].text);
                setPalettes(parsedJson.palettes);
            } else {
                throw new Error("Invalid response structure from API.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't generate palettes at this time. Please try a different prompt.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const copyToClipboard = (text) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        document.body.removeChild(textArea);
    };

    return (
        <div>
            <ToolHeader title="Chroma AI" subtitle="Generate beautiful, accessible color palettes with a touch of AI magic." />
            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'calm forest' or '#8B5CF6'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generatePalette} disabled={isLoading} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Generating...' : 'Generate'}
                </button>
            </div>

            {error && <MessageBox message={error} type="error" />}
            {isLoading && <LoadingSpinner />}

            <div className="space-y-10">
                {palettes.map((palette, pIndex) => (
                    <div key={pIndex}>
                        <h3 className="text-xl font-bold mb-3 dark:text-white">{palette.name}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {palette.colors.map((color, cIndex) => (
                                <div key={cIndex} onClick={() => copyToClipboard(color.hex)} className="cursor-pointer group">
                                    <div style={{ backgroundColor: color.hex }} className="h-24 rounded-lg shadow-md transition-transform group-hover:-translate-y-1"></div>
                                    <div className="mt-2 text-center">
                                        <p className="font-semibold text-sm dark:text-gray-200">{color.hex}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{color.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FontPairingTool = () => {
    const [pairings, setPairings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [theme, setTheme] = useState('technology');

    const fetchFontPairings = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setPairings([]);
        
        const apiPrompt = `Generate 3 diverse font pairings suitable for a website with a "${theme}" theme. For each pairing, provide a heading font and a body font from Google Fonts. Include a short rationale for why the pairing works.`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    pairings: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                headingFont: { type: "STRING" },
                                bodyFont: { type: "STRING" },
                                rationale: { type: "STRING" }
                            },
                            required: ["headingFont", "bodyFont", "rationale"]
                        }
                    }
                }
            }
        };

        const payload = {
            contents: [{ role: "user", parts: [{ text: apiPrompt }] }],
            generationConfig
        };
        const apiKey = ""
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const data = JSON.parse(result.candidates[0].content.parts[0].text);
                setPairings(data.pairings);
            } else {
                throw new Error("Invalid response from API.");
            }
        } catch (err) {
            console.error(err);
            setError("Could not fetch font pairings. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [theme]);

    useEffect(() => {
        if (pairings.length > 0) {
            const fontFamilies = pairings.map(p => `${p.headingFont.replace(/ /g, '+')}:400,700|${p.bodyFont.replace(/ /g, '+')}:400,700`).join('|');
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css?family=${fontFamilies}&display=swap`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, [pairings]);
    
    return (
        <div>
            <ToolHeader title="Typograph AI" subtitle="Discover harmonious font pairings suggested by AI." />
             <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    placeholder="e.g., 'elegant', 'playful', 'corporate'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={fetchFontPairings} disabled={isLoading} className="bg-sky-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors disabled:bg-sky-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Searching...' : 'Find Pairings'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            <div className="space-y-8">
                {pairings.map((pairing, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50">
                        <div className="mb-4">
                            <h3 style={{ fontFamily: `'${pairing.headingFont}', sans-serif` }} className="text-3xl font-bold">
                                {pairing.headingFont}
                            </h3>
                            <p style={{ fontFamily: `'${pairing.bodyFont}', sans-serif` }} className="text-lg">
                                & {pairing.bodyFont}
                            </p>
                        </div>
                        <div className="mb-4 p-4 border-t border-b border-gray-200 dark:border-gray-700">
                             <h4 style={{ fontFamily: `'${pairing.headingFont}', sans-serif` }} className="text-2xl font-bold mb-2">Almost before we knew it, we had left the ground.</h4>
                             <p style={{ fontFamily: `'${pairing.bodyFont}', sans-serif` }} className="text-gray-700 dark:text-gray-300">
                                A rule of thumb is to have a robust heading font and a more subtle body font. The contrast in style and weight helps create a clear visual hierarchy, making the content easy to scan and read.
                             </p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                           <span className="font-bold">Rationale:</span> {pairing.rationale}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MoodBoardCreator = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('Minimalist tech e-commerce');

    const generateMoodboard = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setImages([]);

        const apiPrompt = `A moodboard for a website with the theme "${prompt}". Generate 4 images representing this theme. Focus on UI elements, color palettes, textures, and overall feeling.`;

        const payload = { 
            instances: [{ prompt: apiPrompt }], 
            parameters: { "sampleCount": 4 } 
        };
        const apiKey = ""
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            
            if (result.predictions && result.predictions.length > 0) {
                const generatedImages = result.predictions.map(pred => `data:image/png;base64,${pred.bytesBase64Encoded}`);
                setImages(generatedImages);
            } else {
                throw new Error("No images were generated.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't create a moodboard at this time.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div>
            <ToolHeader title="Inspo AI" subtitle="Generate a visual moodboard to kickstart your creative process." />
             <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'Dark mode dashboard for a music app'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generateMoodboard} disabled={isLoading} className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-emerald-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Creating...' : 'Create Board'}
                </button>
            </div>
             {isLoading && <LoadingSpinner />}
             {error && <MessageBox message={error} type="error" />}

             <div className="grid grid-cols-2 gap-4">
                {images.map((imgSrc, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <img src={imgSrc} alt={`Moodboard image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const DesignReviewTool = () => {
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setImageBase64(e.target.result.split(',')[1]); 
            };
            reader.readAsDataURL(file);
        }
    };
    
    const getCritique = useCallback(async () => {
        if (!imageBase64) {
            setError("Please upload an image first.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setFeedback(null);

        const apiPrompt = "Analyze this UI screenshot. Provide a UX critique covering these areas: Visual Hierarchy, Color Contrast & Accessibility, Layout & Spacing, and Clarity of Information. Format the response as a list of bullet points for each area.";
        
        const payload = {
            contents: [{
                role: "user",
                parts: [
                    { text: apiPrompt },
                    { inlineData: { mimeType: "image/png", data: imageBase64 } }
                ]
            }],
        };
        const apiKey = ""
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`API error: ${response.statusText}`);
            const result = await response.json();
            
            if (result.candidates && result.candidates[0].content.parts[0].text) {
                setFeedback(result.candidates[0].content.parts[0].text);
            } else {
                throw new Error("Failed to get a critique from the API.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't analyze the design right now.");
        } finally {
            setIsLoading(false);
        }
    }, [imageBase64]);

    return (
        <div>
            <ToolHeader title="Critique AI" subtitle="Get instant, AI-powered feedback on your UI designs." />
            
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
            
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-dashed border-gray-400 dark:border-gray-600 text-center mb-6">
                {image ? (
                    <div className="relative">
                        <img src={image} alt="UI Design Preview" className="max-w-full max-h-96 mx-auto rounded-lg shadow-md" />
                         <button onClick={() => {setImage(null); setImageBase64(null); setFeedback(null); fileInputRef.current.value = null;}} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/75">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div onClick={() => fileInputRef.current.click()} className="cursor-pointer">
                        <Upload className="w-12 h-12 mx-auto text-gray-500 dark:text-gray-400 mb-2" />
                        <p className="font-semibold text-indigo-600 dark:text-indigo-400">Click to upload an image</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, or GIF</p>
                    </div>
                )}
            </div>
            
            <div className="text-center mb-6">
                <button onClick={getCritique} disabled={isLoading || !image} className="bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors disabled:bg-rose-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Analyzing...' : 'Get Critique'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {feedback && (
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: feedback.replace(/\n/g, '<br />') }}>
                </div>
            )}
        </div>
    );
};

const MicrocopyGenerator = () => {
    const [component, setComponent] = useState('Confirmation Modal');
    const [tone, setTone] = useState('Friendly and reassuring');
    const [copy, setCopy] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateCopy = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setCopy(null);

        const apiPrompt = `Generate 3 microcopy options for a UI component: "${component}". The desired tone is "${tone}". For each option, provide a headline, body text, and a primary button label.`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    suggestions: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                headline: { type: "STRING" },
                                body: { type: "STRING" },
                                primary_button: { type: "STRING" }
                            },
                            required: ["headline", "body", "primary_button"]
                        }
                    }
                }
            }
        };

        const payload = {
            contents: [{ role: "user", parts: [{ text: apiPrompt }] }],
            generationConfig
        };
        const apiKey = ""
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();

            if (result.candidates && result.candidates[0].content.parts[0].text) {
                const data = JSON.parse(result.candidates[0].content.parts[0].text);
                setCopy(data.suggestions);
            } else {
                throw new Error("Invalid response from API.");
            }
        } catch (err) {
            console.error(err);
            setError("Could not generate copy. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [component, tone]);
    
    return (
        <div>
            <ToolHeader title="Copy AI" subtitle="Generate clear and effective microcopy for your UI components." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Component</label>
                    <input
                        type="text"
                        value={component}
                        onChange={(e) => setComponent(e.target.value)}
                        placeholder="e.g., 'Empty state', 'Success message'"
                        className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tone</label>
                    <input
                        type="text"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        placeholder="e.g., 'Formal', 'Playful', 'Direct'"
                        className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>
            <div className="text-center mb-6">
                 <button onClick={generateCopy} disabled={isLoading} className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:bg-amber-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Writing...' : 'Generate Copy'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {copy && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {copy.map((suggestion, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold mb-2">{suggestion.headline}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{suggestion.body}</p>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold w-full">{suggestion.primary_button}</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// --- NEW AI-POWERED TOOLS ---

const PersonaGenAI = () => {
    const [persona, setPersona] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('Urban millennial, eco-conscious, uses public transport');

    const generatePersona = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setPersona(null);
        setAvatar(null);

        const textApiPrompt = `Generate a detailed user persona based on the description: "${prompt}". Create a realistic name, age, occupation, a short bio, a list of goals, and a list of frustrations. Also, create a detailed text prompt for an image generator to create a photorealistic avatar for this person (e.g., "Photorealistic headshot of a 28-year-old woman with brown hair, smiling, in a bright, modern office setting").`;

        const textGenerationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING" },
                    age: { type: "NUMBER" },
                    occupation: { type: "STRING" },
                    bio: { type: "STRING" },
                    goals: { type: "ARRAY", items: { type: "STRING" } },
                    frustrations: { type: "ARRAY", items: { type: "STRING" } },
                    avatarPrompt: { type: "STRING" }
                },
                required: ["name", "age", "occupation", "bio", "goals", "frustrations", "avatarPrompt"]
            }
        };

        const textPayload = { contents: [{ role: "user", parts: [{ text: textApiPrompt }] }], generationConfig: textGenerationConfig };
        const apiKey = "";
        const textApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const imageApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

        try {
            // 1. Generate Persona Text Data
            const textResponse = await fetch(textApiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(textPayload) });
            if (!textResponse.ok) throw new Error("Persona generation failed");
            const textResult = await textResponse.json();
            const personaData = JSON.parse(textResult.candidates[0].content.parts[0].text);
            setPersona(personaData);
            
            // 2. Generate Avatar Image
            const imagePayload = { instances: [{ prompt: personaData.avatarPrompt }], parameters: { "sampleCount": 1 } };
            const imageResponse = await fetch(imageApiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(imagePayload) });
            if (!imageResponse.ok) throw new Error("Avatar generation failed");
            const imageResult = await imageResponse.json();
            
            if (imageResult.predictions && imageResult.predictions.length > 0) {
                setAvatar(`data:image/png;base64,${imageResult.predictions[0].bytesBase64Encoded}`);
            } else {
                 setAvatar('https://placehold.co/128x128/e0e7ff/3730a3?text=:)'); // Fallback
            }

        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't create a persona. Please try a different prompt.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);
    
    return (
        <div>
            <ToolHeader title="PersonaGen AI" subtitle="Instantly create detailed user personas from a simple description." />
            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'Busy parent who loves cooking'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generatePersona} disabled={isLoading} className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors disabled:bg-cyan-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Generating...' : 'Generate'}
                </button>
            </div>

            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {persona && (
                <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700/50 flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 text-center">
                        {avatar ? (
                            <img src={avatar} alt={persona.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
                        ) : (
                             <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><LoadingSpinner /></div>
                        )}
                        <h3 className="text-2xl font-bold mt-4">{persona.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{persona.age}, {persona.occupation}</p>
                    </div>
                    <div className="flex-grow">
                        <p className="italic text-gray-600 dark:text-gray-300 mb-6">"{persona.bio}"</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-emerald-500">Goals</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                    {persona.goals.map((goal, i) => <li key={i}>{goal}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-rose-500">Frustrations</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                    {persona.frustrations.map((frustration, i) => <li key={i}>{frustration}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const FlowArchitect = () => {
    // This is a placeholder for a more complex component.
    // Generating a true visual graph would require a library like react-flow.
    // For now, we'll represent it as a structured list.
    const [flow, setFlow] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('User signs up, confirms email, and logs in for the first time.');

    const generateFlow = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setFlow(null);
        
        const apiPrompt = `Based on the user process "${prompt}", break it down into a sequence of steps. For each step, provide a short title and a one-sentence description.`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    flowName: { type: "STRING" },
                    steps: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                title: { type: "STRING" },
                                description: { type: "STRING" }
                            },
                            required: ["title", "description"]
                        }
                    }
                }
            }
        };

        const payload = { contents: [{ role: "user", parts: [{ text: apiPrompt }] }], generationConfig };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            const data = JSON.parse(result.candidates[0].content.parts[0].text);
            setFlow(data);
        } catch(err) {
            console.error(err);
            setError("Could not generate user flow. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div>
            <ToolHeader title="Flow Architect" subtitle="Describe a user process and get a structured flow diagram." />
             <div className="flex gap-4 mb-6">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe a user process..."
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                />
                <button onClick={generateFlow} disabled={isLoading} className="bg-fuchsia-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-fuchsia-700 transition-colors disabled:bg-fuchsia-400 disabled:cursor-not-allowed self-start">
                    {isLoading ? 'Building...' : 'Build Flow'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {flow && (
                <div>
                    <h3 className="text-xl font-bold mb-4">{flow.flowName}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {flow.steps.map((step, index) => (
                             <React.Fragment key={index}>
                                <div className="p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-lg shadow-sm text-center md:flex-1">
                                    <p className="font-bold">{step.title}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{step.description}</p>
                                </div>
                                {index < flow.steps.length - 1 && (
                                    <ArrowRight className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto md:mx-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const IconForgeAI = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('A simple, bold "home" icon, line art style');

    const generateIcons = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setImages([]);

        const apiPrompt = `A single, clean, vector-style icon for "${prompt}". The icon should be on a pure white background, minimal, and suitable for a modern UI. Line art, single color.`;

        const payload = { instances: [{ prompt: apiPrompt }], parameters: { "sampleCount": 4 } };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            
            if (result.predictions && result.predictions.length > 0) {
                const generatedImages = result.predictions.map(pred => `data:image/png;base64,${pred.bytesBase64Encoded}`);
                setImages(generatedImages);
            } else {
                throw new Error("No icons were generated.");
            }
        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't forge any icons at this time.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    return (
        <div>
            <ToolHeader title="IconForge AI" subtitle="Generate unique, SVG-style icons from a text description." />
             <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'Settings gear icon, flat design'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generateIcons} disabled={isLoading} className="bg-lime-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-700 transition-colors disabled:bg-lime-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Forging...' : 'Forge Icons'}
                </button>
            </div>
             {isLoading && <LoadingSpinner />}
             {error && <MessageBox message={error} type="error" />}

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((imgSrc, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700/50 flex items-center justify-center aspect-square transition-transform hover:scale-105">
                        <img src={imgSrc} alt={`Generated icon ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

const LayoutAI = () => {
    const [layouts, setLayouts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prompt, setPrompt] = useState('A landing page hero with a title, a short paragraph, and two buttons');

    const generateLayouts = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setLayouts([]);
        
        const apiPrompt = `Suggest 3 different wireframe layouts for a UI component containing: ${prompt}. Describe each layout with a name and a list of components in their visual order.`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    layouts: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                name: { type: "STRING" },
                                components: { type: "ARRAY", items: { type: "STRING" } }
                            },
                            required: ["name", "components"]
                        }
                    }
                }
            }
        };

        const payload = { contents: [{ role: "user", parts: [{ text: apiPrompt }] }], generationConfig };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            const data = JSON.parse(result.candidates[0].content.parts[0].text);
            setLayouts(data.layouts);
        } catch(err) {
            console.error(err);
            setError("Could not generate layouts. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt]);

    const renderComponent = (type) => {
        const baseClass = "bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-xs text-gray-500 dark:text-gray-400";
        if (type.toLowerCase().includes('title') || type.toLowerCase().includes('heading')) {
            return <div className={`${baseClass} h-12 w-full`}>{type}</div>;
        }
        if (type.toLowerCase().includes('paragraph') || type.toLowerCase().includes('text')) {
            return <div className={`${baseClass} h-20 w-full`}><div className="w-11/12 space-y-1.5"><div className="h-2 bg-gray-300 dark:bg-gray-600 rounded"></div><div className="h-2 bg-gray-300 dark:bg-gray-600 rounded"></div><div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div></div></div>;
        }
        if (type.toLowerCase().includes('button')) {
            return <div className={`${baseClass} h-10 w-28`}>{type}</div>;
        }
        if (type.toLowerCase().includes('image') || type.toLowerCase().includes('hero')) {
            return <div className={`${baseClass} h-40 w-full`}>{type}</div>;
        }
         return <div className={`${baseClass} h-10 w-full`}>{type}</div>;
    };

    return (
        <div>
            <ToolHeader title="Layout AI" subtitle="Explore different wireframe layouts for your screen components." />
            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., 'A pricing card with features and a CTA'"
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button onClick={generateLayouts} disabled={isLoading} className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-orange-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Designing...' : 'Suggest Layouts'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {layouts.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {layouts.map((layout, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-center mb-2">{layout.name}</h3>
                            <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 space-y-3">
                                {layout.components.map((comp, i) => (
                                    <div key={i}>{renderComponent(comp)}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const UsabilityScriptAI = () => {
    const [script, setScript] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [feature, setFeature] = useState('the new checkout process');
    const [persona, setPersona] = useState('a first-time online shopper');

    const generateScript = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setScript(null);
        
        const apiPrompt = `Generate a usability testing script to test "${feature}" with a user who is "${persona}". The script should include a friendly introduction, 3-4 pre-test warm-up questions, 3-4 specific user tasks, and 3-4 post-test wrap-up questions.`;
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    scriptTitle: { type: "STRING" },
                    introduction: { type: "STRING" },
                    preTestQuestions: { type: "ARRAY", items: { type: "STRING" } },
                    tasks: { type: "ARRAY", items: { type: "OBJECT", properties: { task: { type: "STRING" }, prompt: { type: "STRING" } } } },
                    postTestQuestions: { type: "ARRAY", items: { type: "STRING" } }
                }
            }
        };

        const payload = { contents: [{ role: "user", parts: [{ text: apiPrompt }] }], generationConfig };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error("API request failed");
            const result = await response.json();
            const data = JSON.parse(result.candidates[0].content.parts[0].text);
            setScript(data);
        } catch(err) {
            console.error(err);
            setError("Could not generate script. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [feature, persona]);

    return (
        <div>
            <ToolHeader title="Usability Script AI" subtitle="Generate comprehensive scripts for your usability testing sessions." />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    value={feature}
                    onChange={(e) => setFeature(e.target.value)}
                    placeholder="Feature to test"
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="text"
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                    placeholder="Target persona"
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div className="text-center mb-6">
                <button onClick={generateScript} disabled={isLoading} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Writing...' : 'Generate Script'}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            {script && (
                <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 space-y-6 prose dark:prose-invert max-w-none">
                    <h3>{script.scriptTitle}</h3>
                    <p>{script.introduction}</p>
                    
                    <h4>Pre-Test Questions</h4>
                    <ul>{script.preTestQuestions.map((q, i) => <li key={i}>{q}</li>)}</ul>

                    <h4>User Tasks</h4>
                    <ol>{script.tasks.map((t, i) => <li key={i}><strong>{t.task}:</strong> {t.prompt}</li>)}</ol>

                    <h4>Post-Test Questions</h4>
                    <ul>{script.postTestQuestions.map((q, i) => <li key={i}>{q}</li>)}</ul>
                </div>
            )}
        </div>
    );
};

const SpecCheckAI = () => {
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [specs, setSpecs] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
                setImageBase64(e.target.result.split(',')[1]); 
            };
            reader.readAsDataURL(file);
        }
    };
    
    const getSpecs = useCallback(async () => {
        if (!imageBase64) return;
        setIsLoading(true);
        setError(null);
        setSpecs(null);

        const apiPrompt = "Analyze this UI screenshot and extract design specifications. Identify the primary colors (with hex codes), secondary colors, and typography (font family guesses, estimated font sizes and weights). Present this as a structured summary.";
        
        const generationConfig = {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    colors: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                role: { type: "STRING" },
                                hex: { type: "STRING" }
                            }
                        }
                    },
                    typography: {
                         type: "ARRAY",
                         items: {
                             type: "OBJECT",
                             properties: {
                                 type: { type: "STRING" },
                                 font: { type: "STRING" },
                                 size: { type: "STRING" },
                                 weight: { type: "STRING" }
                             }
                         }
                    }
                }
            }
        };

        const payload = {
            contents: [{ role: "user", parts: [{ text: apiPrompt }, { inlineData: { mimeType: "image/png", data: imageBase64 } }] }],
            generationConfig
        };
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API error: ${response.statusText}`);
            const result = await response.json();
            const data = JSON.parse(result.candidates[0].content.parts[0].text);
            setSpecs(data);
        } catch (err) {
            console.error(err);
            setError("Sorry, I couldn't extract the design specs right now.");
        } finally {
            setIsLoading(false);
        }
    }, [imageBase64]);

    return (
        <div>
            <ToolHeader title="SpecCheck AI" subtitle="Upload a design to automatically extract developer-ready specs." />
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" ref={fileInputRef} />
            
            <div className="text-center mb-6">
                 <button onClick={() => fileInputRef.current.click()} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <Upload className="w-5 h-5 inline-block mr-2"/>
                    {image ? "Change Image" : "Upload Image"}
                </button>
            </div>
            
            {isLoading && <LoadingSpinner />}
            {error && <MessageBox message={error} type="error" />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700/50 flex items-center justify-center">
                    {image ? (
                        <img src={image} alt="UI Design Preview" className="max-w-full max-h-96 mx-auto rounded-lg shadow-md" />
                    ) : (
                        <div className="text-center text-gray-500">Upload an image to begin.</div>
                    )}
                </div>
                 <div className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50">
                    {image && !specs && !isLoading && (
                         <div className="text-center">
                            <button onClick={getSpecs} className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors">
                                Extract Specs
                            </button>
                         </div>
                    )}
                     {specs && (
                         <div className="space-y-6">
                             <div>
                                <h4 className="font-bold text-lg mb-2">Colors</h4>
                                <div className="flex flex-wrap gap-4">
                                    {specs.colors.map((c, i) => (
                                        <div key={i} className="text-center">
                                            <div style={{backgroundColor: c.hex}} className="w-16 h-16 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm"></div>
                                            <p className="text-sm font-medium mt-1">{c.hex}</p>
                                            <p className="text-xs text-gray-500">{c.role}</p>
                                        </div>
                                    ))}
                                </div>
                             </div>
                             <div>
                                 <h4 className="font-bold text-lg mb-2">Typography</h4>
                                 <ul className="space-y-2">
                                     {specs.typography.map((t, i) => (
                                        <li key={i} className="flex justify-between items-baseline p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                                            <span className="font-semibold">{t.type}</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{t.font}, {t.size}, {t.weight}</span>
                                        </li>
                                     ))}
                                 </ul>
                             </div>
                         </div>
                     )}
                 </div>
            </div>
        </div>
    );
};


export default App;

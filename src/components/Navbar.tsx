import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-cyber-bg text-white py-4 px-6 shadow-lg sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center gap-4">
                    <img src="/image.png" alt="Logo" className="h-10 w-10 bg-white" />
                    <h1 className="text-2xl font-bold text-cyber-orange">Ece Havancı</h1>
                </div>
                <div className="hidden md:flex gap-6 text-sm">
                    <a href="#about" className="hover:text-cyber-orange transition">About Me</a>
                    <a href="#projects" className="hover:text-cyber-orange transition">Projects</a>
                    <a href="#contact" className="hover:text-cyber-orange transition">Contact</a>
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-2 flex flex-col gap-4 px-6"
                >
                    <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </motion.div>
            )}
        </nav>
    );
}
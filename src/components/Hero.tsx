import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-around bg-cover bg-cyber-bg text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    Merhaba, ben <span className="text-cyber-orange">Ece</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Frontend geliştiriciyim. React, TypeScript ve göz alıcı arayüzlerle ilgileniyorum.
                </p>
                <div className="mt-3 flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="bg-cyber-orange hover:bg-orange-600 text-white px-6 py-2 rounded-xl transition"
                    >
                        Projects
                    </a>
                    <a
                        href="/cv.pdf"
                        className="border border-cyber-orange hover:bg-cyber-orange px-6 py-2 rounded-xl transition"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

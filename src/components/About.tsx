import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="bg-cyber-bg text-white py-16 px-6">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
                <p className="text-gray-300">
                    Merhaba! Ben Ece. Frontend geliştirme konusunda tutkuluyum.
                    React, TypeScript ve modern UI/UX yaklaşımları ile projeler geliştiriyorum.
                    Cyberpunk tarzını, güzel görünen ama sade yapıları seviyorum.
                </p>
            </motion.div>
        </section>
    );
}
import { motion } from 'framer-motion';
import useInternalizations from '../../utils/hooks/useInternalizations';

export default function About() {
    const { i18n } = useInternalizations();

    return (
        <section id="about" className="bg-cyber-bg text-white py-16 px-6">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-4">{i18n('navbar.aboutButton')}</h2>
                <p className="text-gray-300">
                    {i18n('about.me')}
                </p>
            </motion.div>
        </section>
    );
}
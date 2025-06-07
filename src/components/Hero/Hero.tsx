import { motion } from 'framer-motion';
import useInternalizations from '../../utils/hooks/useInternalizations';

export default function Hero() {
    const { i18n } = useInternalizations();

    return (
        <section className="min-h-screen flex items-center justify-around bg-cover bg-cyber-bg text-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    {i18n('hero.title')} <span className="text-cyber-orange">Ece Havancı</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">  {i18n('hero.description')} </p>
                <div className="mt-3 flex gap-4 justify-center">
                    <a
                        href="https://github.com/ecehavanci"
                        className="bg-cyber-orange hover:bg-orange-600 text-white px-6 py-2 rounded-xl transition"
                    >
                        {i18n('hero.projectsButton')}
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1KlvTIAFxYTNW2ZctD_PW8P-zVCcmR-6P/view?usp=sharing"
                        target="_blank"
                        className="border border-cyber-orange hover:bg-cyber-orange px-6 py-2 rounded-xl transition"
                    >
                        {i18n('hero.downloadCVButton')}

                    </a>
                </div>
            </motion.div>
        </section>
    );
}

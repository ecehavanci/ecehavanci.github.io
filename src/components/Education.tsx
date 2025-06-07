import { motion } from 'framer-motion';
import useInternalizations from '../utils/hooks/useInternalizations';
import { EducationItem } from '../types';

export default function Education() {
    const { i18n } = useInternalizations();

    const education = i18n('education.items') as Array<EducationItem>;

    return (
        <section id="education" className="bg-cyber-bg text-white py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-14 text-cyber-orange">{i18n('education.title')}</h2>
                <div className="relative border-l-2 border-cyber-orange pl-6">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Nokta */}
                            <span className="absolute -left-[13px] top-1.5 w-4 h-4 rounded-full bg-cyber-orange shadow-md shadow-orange-400 animate-pulse"></span>

                            {/* İçerik */}
                            <div className="bg-[#1E293B]/60 p-5 rounded-lg shadow-lg hover:shadow-orange-400/40 transition backdrop-blur-sm">
                                <p className="text-sm text-gray-400 mb-1">{item.duration}</p>
                                <h3 className="text-lg font-semibold text-cyber-orange">{item.degree}</h3>
                                <h4 className="text-md mb-2">{item.school}</h4>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

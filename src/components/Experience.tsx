import { motion } from 'framer-motion';
import useInternalizations from '../utils/hooks/useInternalizations';
import { ExperienceItem } from '../types';


export default function Experience() {
    const { i18n } = useInternalizations();
    const experiences = i18n('experience.items') as Array<ExperienceItem>;

    return (
        <section id="experience" className="bg-cyber-bg text-white py-16 px-6">
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center mb-10 text-cyber-orange">{i18n('experience.workhistory')}</h2>
                <div className="space-y-6">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            className="border border-cyber-orange p-6 rounded-xl bg-[#1E293B]/60 backdrop-blur-sm shadow-md hover:shadow-orange-500/30 transition duration-300"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-cyber-orange">{item.role}</h3>
                            <h3 className="text-l font-semibold text-cyber-orange">@{item.company}</h3>
                            <p className="text-m text-gray-400 mt-2 ">{item.duration}</p>
                            <p className="text-m text-gray-400 mb-1">{item.work}</p>
                            <p className="text-m text-gray-400 mb-1">{item.workPlace}</p>

                            <p className="text-gray-300">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

import { motion } from 'framer-motion';
import useInternalizations from '../../utils/hooks/useInternalizations';
import { ExperienceItem } from '../../types';
import ExperienceBox from './ExperienceBox';


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
                      <ExperienceBox key={index} item={item} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

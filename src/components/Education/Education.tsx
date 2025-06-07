import { motion } from 'framer-motion';
import useInternalizations from '../../utils/hooks/useInternalizations';
import { EducationItem } from '../../types';
import EducationBox from './EducationBox';

export default function Education() {
    const { i18n } = useInternalizations();

    const education = i18n('education.items') as Array<EducationItem>;

    return (
        <section id="education" className="bg-cyber-bg text-white py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-14 text-cyber-orange">{i18n('education.title')}</h2>
                <div className="relative border-l-2 border-cyber-orange pl-6">
                    {education.map((item, index) => (
                        <EducationBox index={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

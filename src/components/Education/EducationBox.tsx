import React from 'react'
import useInternalizations from '../../utils/hooks/useInternalizations';
import { motion } from 'framer-motion';
import { EducationItem } from '../../types';

interface EducationBoxProps {
    index: number;
    item: EducationItem
}

function EducationBox({ index, item }: EducationBoxProps) {
    // const { i18n } = useInternalizations();

    return (
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
    )
}

export default EducationBox
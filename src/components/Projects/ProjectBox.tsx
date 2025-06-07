import React from 'react'
import { ProjectItem } from '../../types'
import { motion } from 'framer-motion'
import useInternalizations from '../../utils/hooks/useInternalizations';

interface ProjectBoxProps {
    item: ProjectItem;
    index: number;
}

function ProjectBox({ item, index }: ProjectBoxProps) {
    const { i18n } = useInternalizations();

    return (
        <motion.div
            key={index}
            className="bg-[#1E293B] p-6 rounded-xl shadow-md border border-cyber-orange hover:scale-[1.02] transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
        >
            <h3 className="text-xl font-semibold text-cyber-orange mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                {i18n('experience.githublink')}
            </a>
        </motion.div>
    )
}

export default ProjectBox
import React from 'react'
import { ExperienceItem } from '../../types'
import { motion } from 'framer-motion';

interface ExperienceBoxProps {
    item: ExperienceItem;
    index: number;
}

function ExperienceBox({ item, index }: ExperienceBoxProps) {
    return (
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
    )
}

export default ExperienceBox
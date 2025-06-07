import { motion } from 'framer-motion';
import useInternalizations from '../utils/hooks/useInternalizations';

const experiences = [
    {
        company: 'VESTEL',
        role: 'Software Specialist',
        duration: 'August 2024 - Present',
        workPlace: 'Izmir, Turkey',
        work: 'Hybrid',
        description: ''
    },
    {
        company: 'Izmir University of Economics',
        role: 'Software and Automation Specialist',
        duration: 'August 2023 - August 2024',
        workPlace: 'Izmir, Turkey',
        work: 'In Office',
        description: 'Developed the MedSIS mobile app frontend using Flutter and built the web interface with React, utilizing tools like React Router, Axios, Bootstrap, and additional libraries for enhanced UI/UX. Created and maintained a Node.js + Express backend, integrating with MySQL via connection pooling and managing the server process using PM2. Set up and configured a Linux- based server, handling HTTPS, DNS, NGINX reverse proxying, and load balancing. Collaborated with students, administrative staff, and faculty to resolve issues related to IUE’s OASIS student information system.'
    },
    {
        company: 'VESTEL',
        role: 'Web Development Intern',
        duration: 'August - September 2022',
        workPlace: 'Manisa, Turkey',
        work: 'In Office',
        description: 'Developed web application with React & Redux to share helpful links within R&D team. Focused on integration with internal APIs and enhancing user experience through responsive design.'
    },
    {
        company: 'GBOT Software Consultancy',
        role: 'Mobile Development Intern',
        duration: 'July - September 2021',
        workPlace: 'Izmir, Turkey',
        work: 'Remote',
        description: 'Focused on mobile and web development, worked with Flutter and Dart, and contributed to app design with real data from Firebase. Collaborated with international clients to enhance user experience and interface design.'
    }
];

export default function Experience() {
    const { i18n } = useInternalizations();

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

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Proje 1',
        description: 'Bu bir örnek projedir.',
        link: 'https://github.com/kullanici/proje1'
    },
    {
        title: 'Proje 2',
        description: 'İkinci örnek proje açıklaması.',
        link: 'https://github.com/kullanici/proje2'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="bg-cyber-bg text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1E293B] p-6 rounded-xl shadow-md border border-cyber-orange hover:scale-[1.02] transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-semibold text-cyber-orange mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                                See on Github
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
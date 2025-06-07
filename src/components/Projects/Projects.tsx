import { motion } from 'framer-motion';
import useInternalizations from '../../utils/hooks/useInternalizations';
import { ProjectItem } from '../../types';
import ProjectBox from './ProjectBox';

export default function Projects() {
    const { i18n } = useInternalizations();
    const projects = i18n('projects.items') as Array<ProjectItem>;

    return (
        <section id="projects" className="bg-cyber-bg text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">{i18n('hero.projectsButton')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectBox item={project} index={0} />
                    ))}
                </div>
            </div>
        </section>
    );
}
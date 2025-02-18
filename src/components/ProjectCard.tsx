import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        image: string;
        github: string;
        live: string;
        tags: string[];
    };
    index: number;
}

const defaultProject = {
    title: "Project Title",
    description:
        "This is a sample project description. Replace this with your actual project details.",
    image: "/api/placeholder/800/600",
    github: "https://github.com",
    live: "https://example.com",
    tags: ["React", "TypeScript", "Tailwind"],
};

export function ProjectCard({
    project = defaultProject,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="group bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"
                />
            </div>

            {/* Content Container */}
            <motion.div
                className="p-6 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Title & Description */}
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * i }}
                            className="px-4 py-1.5 bg-gray-700/50 text-gray-200 rounded-full text-sm font-medium 
                         hover:bg-blue-600/20 hover:text-blue-300 transition-colors duration-200"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-6 pt-2">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={22} />
                        <span className="text-sm font-medium">Source Code</span>
                    </motion.a>
                    <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink size={22} />
                        <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Example usage:
export default function Example() {
    const sampleProject = {
        title: "My Awesome Project",
        description: "A fantastic project built with React and TypeScript",
        image: "/api/placeholder/800/600",
        github: "https://github.com/username/project",
        live: "https://myproject.com",
        tags: ["React", "TypeScript", "Tailwind CSS"],
    };

    return (
        <div className="p-4">
            <ProjectCard project={sampleProject} index={0} />
        </div>
    );
}

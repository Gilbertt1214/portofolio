import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import flutterImg from "../assets/flutter.jpg";
import kontruksiImg from "../assets/kontruksi.jpg"



const projects = [
    {
        title: "house construction simulation ",
        description: "A modern web application built with React and TypeScript",
        image: kontruksiImg,
        github: "https://github.com/Gilbertt1214/kontruksi-rumah",
        live: "kontruksi-rumah.vercel.app",
        tags: ["React", "TypeScript", "Threejs","Vite"],
    },
    {
        title: "Flutter",
        description: "Mobile-first e-commerce platform with real-time updates",
        image: flutterImg,
        github: "https://github.com/Gilbertt1214/app-course",
        live: "https://example.com",
        tags: ["dart", "firebase", "java"],
    },
    {
        title: "Project Three",
        description: "AI-powered data visualization dashboard",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        github: "https://github.com",
        live: "https://example.com",
        tags: ["Python", "TensorFlow", "D3.js"],
    },
];

export function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
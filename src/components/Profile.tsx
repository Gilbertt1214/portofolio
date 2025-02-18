import { motion } from 'framer-motion';
import { Code, Database, GamepadIcon, SmartphoneIcon } from 'lucide-react';
import { SkillCard } from './ui/SkillCard';


const skills = [
    {
        icon: <Code className="w-8 h-8" />,
        title: "Frontend Development",
        description:
            "Expertise in React, TypeScript, and modern CSS frameworks",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Backend Development",
        description: "Building scalable APIs and database architectures",
        technologies: ["Node.js", "PostgreSQL", "Express", "GraphQL"],
    },
    {
        icon: <SmartphoneIcon className="w-8 h-8" />,
        title: "Mobile",
        description: "Creating beautiful and intuitive user interfaces",
        technologies: ["Flutter", "Java", "Responsive Design", "Animation"],
    },
    {
        icon: <GamepadIcon className="w-8 h-8 " />,
        title: "Gamers",
        description: "Creating beautiful and intuitive user interfaces",
        technologies: ["Valorant", "Mobile legend", "PUBG ", "COC"],
    },
];

export function Profile() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer with a keen eye for design and a drive
            for creating exceptional user experiences. Specialized in modern web
            technologies and scalable architecture.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
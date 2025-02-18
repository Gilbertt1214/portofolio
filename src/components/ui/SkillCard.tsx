import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: {
    icon: React.ReactNode;
    title: string;
    description: string;
    technologies: string[];
  };
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 p-6 rounded-lg shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
        className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto"
      >
        {skill.icon}
      </motion.div>
      
      <h3 className="text-xl font-semibold text-white mb-2 text-center">
        {skill.title}
      </h3>
      <p className="text-gray-400 mb-4 text-center">
        {skill.description}
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {skill.technologies.map((tech, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
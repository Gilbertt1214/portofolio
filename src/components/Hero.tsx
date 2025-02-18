import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedText } from './ui/AnimatedText';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <AnimatedText
            text="Azis"
            className="text-5xl md:text-7xl font-bold mb-6"
            delay={2}
          />
          <AnimatedText
            text="Full Stack Developer"
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            delay={4}
          />
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:john@example.com" icon={<Mail />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors"
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { type: "spring", stiffness: 300 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
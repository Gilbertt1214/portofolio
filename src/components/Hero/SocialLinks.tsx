import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  return (
      <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
      >
          <SocialLink
              href="https://github.com/Gilbertt1214"
              icon={<Github />}
          />
          <SocialLink
              href="https://www.linkedin.com/in/fahri-nz-45986a308/"
              icon={<Linkedin />}
          />
          <SocialLink href="mailto: rianfahrian579@gmail.com" icon={<Mail />} />
      </motion.div>
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
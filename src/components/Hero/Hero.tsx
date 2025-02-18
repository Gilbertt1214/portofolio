import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import { Title } from './Title';

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
          <Title />
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
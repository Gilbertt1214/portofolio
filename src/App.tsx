import { motion } from 'framer-motion';
import { Hero } from './components/Hero/Hero';
import { Profile } from './components/Profile';
import { Projects } from './components/Projects';
import   Footer from './components/Footer';


function App() {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900"
      >
          <Hero />
          <Profile />
          <Projects />
          <Footer />
          
      </motion.div>
  );
}

export default App;
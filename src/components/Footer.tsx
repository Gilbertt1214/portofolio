import {
    Mail,
    MapPin,
    Phone,
    Facebook,
    Twitter,
    Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-gray-800 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">
                            About Us
                        </h3>
                        <p className="text-gray-400">
                            We create amazing digital experiences through
                            innovative technology solutions.
                        </p>
                        <div className="flex space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className="text-white"
                            >
                                <Facebook size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className="text-white"
                            >
                                <Twitter size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                className="text-white"
                            >
                                <Instagram size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="text-gray-400" size={20} />
                                <p className="text-gray-400">
                                    contact@example.com
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="text-gray-400" size={20} />
                                <p className="text-gray-400">(62) 123-4567</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-gray-400" size={20} />
                                <a href="https://maps.app.goo.gl/bE5dK3FCpqpDpZ2t9">
                                    <p className="text-blue-400">
                                        Serang - Banten
                                    </p>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">
                            Quick Links
                        </h3>
                        <div className="space-y-2">
                            {["Home", "About", "Services", "Contact"].map(
                                (link) => (
                                    <motion.a
                                        key={link}
                                        whileHover={{ x: 5 }}
                                        className="block text-gray-400 hover:text-white cursor-pointer"
                                    >
                                        {link}
                                    </motion.a>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="pt-8 border-t border-gray-700 text-center"
                >
                    <p className="text-gray-400">
                        © 2025 Your Company. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

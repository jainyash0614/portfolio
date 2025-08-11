"use client";
import ProjectSection from "@/components/ProjectComponent";
import { motion } from "framer-motion";
const Projects = () => {
    return ( 
        <motion.div
            className="mx-4 px-4 sm:px-8 md:px-20 lg:px-60 flex flex-col justify-center items-start h-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl lg:text-3xl">⚡</h1>
                    <h1 className="text-2xl lg:text-3xl text-[#515151] font-bold">What I&apos;ve been working on</h1>
                </div>
            </motion.div>

            <div className="pt-4">
                <ProjectSection />
            </div>
        </motion.div>
    );
}
export default Projects;
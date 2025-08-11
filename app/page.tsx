"use client";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Typewriter from 'typewriter-effect'; 
import { motion } from 'framer-motion';
import ProjectSection from '@/components/ProjectComponent';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  const words = [
    {
      text: "Hello",
      className: "text-2xl lg:text-4xl font-bold text-[#515151]"
    },
    {
      text: "there!",
      className: "text-2xl lg:text-4xl font-bold text-[#515151]"
    },
    {
      text: "I'm",
      className: "text-2xl lg:text-4xl font-bold text-[#515151]"
    },
    {
      text: "Yash",
      className: "text-2xl lg:text-4xl font-bold text-[#515151]"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        staggerChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mx-auto px-4 sm:px-8 md:px-20 lg:px-60 flex flex-col justify-center items-start h-full ">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <h1 className='text-2xl lg:text-3xl -mb-4'>👋</h1>
          <TypewriterEffectSmooth words={words} />
        </motion.div>

        <motion.div variants={itemVariants}>
          <div>
            <p className='text-slate-500'>
              I&apos;m a full-stack developer that loves building products and web apps that 
              <br className='hidden xl:block' /> can make a difference!
            </p>
          </div>
          <div className='text-slate-500 py-4'>
            <p>
              Explore my portfolio and feel free to reach out if you&apos;re interested in collaboration.
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h2 className='pt-16 text-xl font-bold text-[#515151]'>What I&apos;ve been working on</h2>
          <ProjectSection/>
          <TechStack/>
        </motion.div>
      </motion.div>
    </div>
  );
}

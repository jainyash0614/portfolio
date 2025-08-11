"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const articles=[{
    name:"Git commands every developer should know",
    link:"https://blognik.hashnode.dev/git-commands-every-developer-should-know",
    description:"Basics of Git and Github for beginner devs",
    imageUrl:"/blog1.png",
    topics:[{name:"Git"},{name:"Github"}]

},{
    name:"Introducing CheatCode, Your AI way to get better at leetcode",
    link:"https://blognik.hashnode.dev/introducing-cheatcode-your-ai-way-to-get-better-at-leetcode",
    description:"Blog discussing about my AI project.",
    imageUrl:"/blog2.png",
    topics:[{name:"Project"},{name:"AI"}]
},{
    name:"All you need to know in OOPS",
    link:"https://blognik.hashnode.dev/all-you-need-to-know-in-oops",
    description:"Object Oriented Programming Basics",
    imageUrl:"/blog3.png",
    topics:[{name:"CS Fundamentals"},{name:"OOPS"}]
},{
    name:"Journey into the Web-Unravelling the Internet",
    link:"https://blognik.hashnode.dev/journey-into-the-web-unravelling-the-internet",
    description:"Talks about Internet's origin and computer networks",
    imageUrl:"/blog4.png",
    topics:[{name:"CS Fundamentals"},{name:"Computer Networks"}]
},{
    name:"Getting Started with Express.js",
    link:"https://blognik.hashnode.dev/getting-started-with-expressjs",
    description:"Basics of backend development and Express",
    imageUrl:"/blog5.png",
    topics:[{name:"Backend Development"},{name:"ExpressJS"}]
}]
const Articles = () => {
    return (  
        <div className="mx-4 px-4 sm:px-8 md:px-20 lg:px-60 flex flex-col justify-center items-start h-full ">
            <motion.div
            initial={{
              opacity: 0,
              y: -50,
              rotate: -3,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
             <div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl lg:text-3xl">📝</h1>
                <h1 className="text-2xl lg:text-3xl text-[#515151] font-bold">I write about technology</h1>
                <p className="text-sm text-slate-500 pt-4">
                    Forever fascinated by technology.
                </p>
                </div>
                {articles.map((article)=>(
                   <div key={article.name} className="relative">
                   <div className=" max-w-[700px] hover:shadow-xl  shadow-sm rounded-xl mt-3 flex flex-col sm:flex-row items-start py-8 ">
                       <Link href={article.link} className="flex flex-col sm:flex-row" target="_blank">
                       <div className="border-slate-200 rounded-lg w-full max-w-[200px] sm:w-auto">
                           <Image 
                               src={article.imageUrl} 
                               alt="Project image" 
                               className="px-1 py-2 ml-1 object-cover w-full h-full" 
                               width={200} 
                               height={200} 
                           />
                       </div>
                       <div className="flex flex-col justify-start text-left items-center sm:items-start sm:ml-4 mt-4 sm:mt-0">
                           <div>
                               <div className="">
                               <h1 className="text-lg font-bold px-4 text-[#515151] text-left">{article.name}</h1>
                               

                               </div>
                               <p className=" px-4 text-sm  text-[#023020] text-left">{article.description}</p>
                               <div className="flex flex-wrap px-4 mt-2">
                                    {article.topics.map((tech, index) => (
                                        <Badge
                                            key={index} 
                                            className="py-2 px-4 mr-2 mb-2 rounded-full bg-slate-50 text-[#023020] hover:bg-slate-100 hover:text-black font-light"
                                        >
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                              
                           </div>
                       </div>
                       
                       </Link>

                   </div>
                   </div>
                ))}
                </div>
                </motion.div>
            </div>

    );
}
 
export default Articles;
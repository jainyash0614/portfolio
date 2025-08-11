"use client";
import { Projects } from "./constants/projects";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProjectSection = () => {
    return ( 
        <div>
            {Projects.map((project) => {
                return (
                    <div key={project.name} className="relative">
                    <div className=" max-w-[700px] hover:shadow-xl  shadow-sm rounded-xl mt-3 flex flex-col sm:flex-row items-start py-8 ">
                        <Link href={project.githubUrl} className="flex flex-col sm:flex-row" target="_blank">
                        <div className="border-slate-200 rounded-lg w-full max-w-[200px] sm:w-auto">
                            <Image 
                                src={project.imageUrl} 
                                alt="Project image" 
                                className="px-1 py-2 ml-1 object-cover w-full h-full" 
                                width={200} 
                                height={200} 
                            />
                        </div>
                        <div className="flex flex-col justify-start text-left items-center sm:items-start sm:ml-4 mt-4 sm:mt-0">
                            <div>
                                <div className="">
                                <h1 className="text-lg font-bold px-4 text-[#515151] text-left">{project.name}</h1>
                                

                                </div>
                                <p className=" px-4 text-sm  text-[#023020] text-left">{project.description}</p>
                                <div className="flex flex-wrap px-4 mt-2">
                                    {project.techStack.map((tech, index) => (
                                        <Badge 
                                            key={index} 
                                            className="py-2 px-4 mr-2 mb-2 rounded-full bg-[#F9FAFB] text-[#023020] hover:bg-slate-100 hover:text-black font-light"
                                        >
                                            {tech.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        </Link>

                    </div>
                            <Link href={project.githubUrl} className="absolute right-4 top-8" target="_blank">
                            <Image alt="github link" src={'/github.png'} width={20} height={20}/>
                            </Link>
                            </div>
                );
            })}
            <Link href={'https://github.com/jainyash0614'} target="_blank"> 
                <h1 className="text-lg font-semibold hover:bg-slate-100 text-[#515151] text-center my-4">Check More <ArrowRight className="inline"/></h1>
            </Link>
        </div>
    );
}
 
export default ProjectSection;
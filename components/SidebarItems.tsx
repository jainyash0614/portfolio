"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    IconArticle,
    IconBolt,
    IconBrandGithub,
    IconBriefcase2,
    IconMail,
    IconMessage2,
  } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
  
  export const navlinks = [
    {
      href: "/",
      label: "Home",
      icon: IconBolt,
    },
    {
      href: "/about",
      label: "About",
      icon: IconMessage2,
    },
    {
      href: "/projects",
      label: "Projects",
      icon: IconBriefcase2,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: IconMail,
    },
  ];
  import {
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandYoutube,
  } from "@tabler/icons-react";
  
  export const socials = [
    {
      href: "https://www.linkedin.com/in/yash-jain-067ba2285/",
      label: "LinkedIn",
      icon: IconBrandLinkedin,
    },
    {
      href: "https://github.com/jainyash0614",
      label: "Github",
      icon: IconBrandGithub,
    },
  ];
const SidebarItems = () => {
    const pathname=usePathname();

    
    return ( 
        <div>
            <div className="pt-8 lg:pt-14">
                <div className="flex flex-row items-center justify-center">
                    <div className="p-2">
                    <Image src={'/profile1.png'} width={56} height={56} alt="Profile Image" className="rounded-full"/>
                    </div>
                    <div className="px-2 flex flex-col ">
                        <h1 className="text-primary font-bold ">Yash Jain</h1>
                        <p className="font-light">Developer</p>
                    </div>

                </div>

            </div>

        <div className="flex flex-col items-start justify-center pl-8 pt-16 gap-6">
           {navlinks.map((link)=>{
            const isActive = pathname === link.href;

            return(<Link href={link.href} key={link.label} className={cn()}>
            <div className={cn("flex flex-row gap-4",isActive ? "text-blue-500 font-medium shadow-md px-2 py-1 rounded-lg" : "text-gray-600" )} >
                <link.icon className={cn("text-gray-600",isActive?"text-blue-500":"text-gray-600")}/>
                <h4 className={cn("text-sm text-gray-600 hover:text-[#023020]",isActive && "text-[#023020] font-light")}>{link.label}</h4>
            </div>
            </Link>
           )})}
        </div>
        
        <div className="flex flex-col items-start justify-center pl-8 pt-16 gap-6">
        <h1 className="text-primary font-bold ">Socials</h1>
            {socials.map((link)=>(
                <Link href={link.href} key={link.label} target="_blank">
                     <div className={cn("flex flex-row gap-4" )} >
                <link.icon className={cn("text-gray-600")}/>
                <h4 className="text-sm text-gray-600 hover:text-[#023020]">{link.label}</h4>
            </div>

                </Link>
            ))}
            
        </div>
        </div>

   
     );
}
 
export default SidebarItems;
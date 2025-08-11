"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SidebarItems from "./SidebarItems";
import Image from "next/image";
import { motion } from "framer-motion"
import { useState } from "react";
  

export const Sidebar = () => {
    return ( 
        <div className="hidden lg:block rounded-lg fixed w-60 bg-[#F5F5F5] h-full">
        
            <SidebarItems/>



        </div>
     );
}
 


export const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger onClick={handleOpen}>
                    <Image
                        src={'/menu.jpg'}
                        alt="menu"
                        width={64}
                        height={64}
                        className="text-black"
                    />
                </SheetTrigger>
                <SheetContent side={'left'} className="bg-[#F5F5F5] w-60">
                    <div onClick={handleClose}>

                        <SidebarItems/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
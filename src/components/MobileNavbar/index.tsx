"use client"

import { HouseIcon, ChartColumnIcon, PlusIcon, CheckIcon } from "lucide-react";
import Navbar from "../Navbar";
import { useModalStore } from "@/store/modal";

export default function MobileNavbar() {
    const { setIsOpen } = useModalStore()
    
    return (
        <Navbar>
            <nav className="md:hidden w-full h-24 fixed bottom-0 left-0 flex items-center justify-evenly list-none bg-bg-primary border-t-[1px] border-t-border-color">
                <li className="p-6 cursor-pointer">
                    <HouseIcon />
                </li>
                <li className="p-6 cursor-pointer">
                    <ChartColumnIcon />
                </li>
                <li className="p-6 cursor-pointer" onClick={() => setIsOpen(true)}>
                    <PlusIcon />
                </li>
                <li className="p-6 cursor-pointer">
                    <CheckIcon />
                </li>
            </nav>
        </Navbar>
    );
};

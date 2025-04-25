"use client"

import { HouseIcon, ChartColumnIcon, PlusIcon, CheckIcon, TrendingDown } from "lucide-react";
import { useModalStore } from "@/store/modal";
import Link from "next/link";

export default function MobileNavbar() {
    const { setIsOpen } = useModalStore()
    
    return (
        <nav className="md:hidden w-full h-24 fixed bottom-0 left-0 flex items-center justify-evenly list-none bg-primary border-t-[1px] border-t-witheWithOpacity">
            <Link href="/" className="p-6 cursor-pointer">
                <HouseIcon />
            </Link>
            <Link href="/details" className="p-6 cursor-pointer">
                <ChartColumnIcon />
            </Link>
            <li
                className="p-6 cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <PlusIcon />
            </li>
            <Link href="/pending">
                <TrendingDown />
            </Link>
            <Link href="/completed" className="p-6 cursor-pointer">
                <CheckIcon />
            </Link>
        </nav>
    );
};

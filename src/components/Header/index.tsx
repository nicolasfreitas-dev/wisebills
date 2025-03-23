'use client'

import { CircleUserRound } from "lucide-react";
import Navbar from "../Navbar";
import { useResize } from "@/hooks/useResize";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
        const { windowSize } = useResize()

        const pathname = usePathname()

        const links = [
            { href: "/", label: "Visão geral" },
            { href: "/pages/details", label: "Detalhes" },
            { href: "/pages/pending", label: "Pendentes" },
            { href: "/pages/completed", label: "Concluído" }
        ]

    return (
        <header className="w-full h-24 flex items-center justify-between gap-4 border-b-[1px] border-b-border-color px-10">
            <span className="text-4xl font-bold">
                <Link href="/">Wisebills</Link>
            </span>
            <Navbar>
                <nav className={`h-24 flex items-center gap-10 list-none border-b-[1px] border-b-border-color ${windowSize <= 640 ? "hidden" : ""}`}>
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className={`px-3 py-2 transition-colors ${pathname === href ? "font-bold text-green-detail" : "text-gray-detail"}`}>
                            {label}
                        </Link>
                    ))}
                </nav>
            </Navbar>
            <div>
                <CircleUserRound />
            </div>
        </header>
    );
};

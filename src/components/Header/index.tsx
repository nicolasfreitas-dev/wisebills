'use client'

import { CircleUserRound } from "lucide-react";
import Navbar from "../Navbar";
import { useResize } from "@/hooks/useResize";
import Link from "next/link";

export default function Header() {
        const { windowSize } = useResize()

    return (
        <header className="w-full h-24 flex items-center justify-between gap-4 border-b-[1px] border-b-border-color px-10">
            <span className="text-4xl font-bold">
                <Link href="/">Wisebills</Link>
            </span>
            <Navbar>
                <nav className={`h-24 flex items-center gap-10 list-none border-b-[1px] border-b-border-color ${windowSize <= 640 ? "hidden" : ""}`}>
                    <Link href="/" className="cursor-pointer p-6">Visão geral</Link>
                    <Link href="/pages/details" className="cursor-pointer p-6">Detalhes</Link>
                    <Link href="/pages/pending" className="cursor-pointer p-6">Pendentes</Link>
                    <Link href="/pages/completed" className="cursor-pointer p-6">Concluído</Link>
                </nav>
            </Navbar>
            <div>
                <CircleUserRound />
            </div>
        </header>
    );
};

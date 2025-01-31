'use client'

import { ArrowUpDown, ChartLine, HouseIcon } from "lucide-react";

interface FooterProps {
    openModal: () => void
}

export default function Footer({ openModal }: FooterProps) {
    return (
        <footer className="w-full h-24 bg-bg-primary fixed bottom-0 border-t-[1px] border-t-border-color">
            <ul className="flex justify-evenly">
                <li className="flex flex-col items-center mt-3 cursor-pointer">
                    <HouseIcon  />
                    <button>Home</button>
                </li>
                <li className="flex flex-col items-center mt-3 cursor-pointer">
                    <ChartLine  />
                    <button>Detalhes</button>
                </li>
                <li className="flex flex-col items-center mt-3 cursor-pointer" onClick={openModal}>
                    <ArrowUpDown  />
                    <button>Nova transação</button>
                </li>
            </ul>
        </footer>
    );
};

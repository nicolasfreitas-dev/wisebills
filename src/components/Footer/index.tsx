'use client'

import { ChartLine, Check, HouseIcon } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full h-24 bg-bg-primary fixed bottom-0 border-t-[1px] border-t-border-color">
            <ul className="flex justify-evenly">
                <li className="flex flex-col items-center mt-3 cursor-pointer">
                    <HouseIcon  />
                    <p>Home</p>
                </li>
                <li className="flex flex-col items-center mt-3 cursor-pointer">
                    <ChartLine  />
                    <p>Detalhes</p>
                </li>
                <li className="flex flex-col items-center mt-3 cursor-pointer">
                    <Check />
                    <p>Pagos</p>
                </li>
            </ul>
        </footer>
    );
};

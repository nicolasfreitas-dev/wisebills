import { CircleUserRound } from "lucide-react";
import Navbar from "../Navbar";

export default function Header() {
    return (
        <header className="w-full h-24 flex items-center justify-between gap-4 border-b-[1px] border-b-border-color px-10">
            <span className="text-4xl font-bold">Wisebills</span>
            <Navbar>
                <nav className={`h-24 flex items-center gap-10 list-none border-b-[1px] border-b-border-color ${window.innerWidth <= 640 ? "hidden" : ""}`}>
                    <li className="cursor-pointer p-6">Visão geral</li>
                    <li className="cursor-pointer p-6">Detalhes</li>
                    <li className="cursor-pointer p-6">Concluído</li>
                </nav>
            </Navbar>
            <div>
                <CircleUserRound />
            </div>
        </header>
    );
};

import { ArrowUpDown, ChartLine, HouseIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="h-24 bg-">
            <ul className="flex items-center justify-evenly">
                <li>
                    <HouseIcon  />
                    <span>Home</span>
                </li>
                <li>
                    <ChartLine  />
                    <span>Detalhes</span>
                </li>
                <li>
                    <ArrowUpDown  />
                    <span>Transações</span>
                </li>
            </ul>
        </footer>
    );
};

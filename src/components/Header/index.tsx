import Image from "next/image";
import logo from "../../../public/real-brasileiro.png";

export default function Header() {
    return (
        <header className="w-full h-20 flex items-center gap-4 border-b-[1px] border-b-border-color px-10">
            <Image src={logo} alt="logo" width={30} height={30} />
            <span className="text-4xl font-bold">SobraCash</span>
        </header>
    )
};

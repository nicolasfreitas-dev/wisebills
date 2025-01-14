import Image from "next/image";
import logo from '../../../public/header-logo.svg';

export default function Header() {
    return (
        <header className="w-full h-20 border-b-[1px] border-b-border-color">
            <Image className="mt-8 ml-8" src={logo} alt="logo marca sobra cash" width={164} height={30} />
        </header>
    )
};

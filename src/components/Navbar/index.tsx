import { ReactNode } from "react"

interface NavbarProps {
    children: ReactNode
}

export default function Navbar({ children }: NavbarProps) {
    return (
        <>
            { children }
        </>
    )
};

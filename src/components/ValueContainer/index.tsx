import { ReactNode } from "react"

interface AmountProps {
    children?: ReactNode
    background?: string
}

export default function Amount({ children, background }: AmountProps) {
    return (
        <div className={`w-full h-52 border border-border-color rounded-[20px] flex flex-col mt-6 ${background || ""}`}>
            {children}
        </div>
    )
}

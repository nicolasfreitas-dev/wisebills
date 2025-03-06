import { ReactNode } from "react"

interface AmountProps {
    children?: ReactNode
    background?: string
}

export default function AmountContainer({ children, background }: AmountProps) {
    return (
        <div className={`w-full h-56 border border-border-color rounded-[20px] flex flex-col gap-3 items-start mt-6 ${background || ""}`}>
            {children}
        </div>
    )
}

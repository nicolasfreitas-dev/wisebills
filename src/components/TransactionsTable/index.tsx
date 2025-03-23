import { ReactNode } from "react";

interface TransactionTableProps {
    children: ReactNode
    title: string
}

export default function TransactionTable({ children, title }: TransactionTableProps) {
    return (
        <div className="md:w-[40%] w-full md:h-screen border border-border-color rounded-[20px] flex flex-col mt-6 px-8">
            <div className="h-32 flex items-center justify-between">
                <h3 className="text-3xl font-bold">{title}</h3>
                <span className="text-xl font-bold cursor-pointer">
                    Ver mais
                </span>
            </div>
            <hr className="border-border-color" />
            <div>{children}</div>
        </div>
    );
}

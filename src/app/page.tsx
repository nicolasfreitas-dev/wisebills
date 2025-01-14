import { TrendingDown } from "lucide-react";

export default function Home() {
    return (
        <main className="mx-10">
            <h1 className="font-bold text-3xl mt-10">Dashboard</h1>
            <div className="w-full h-52 border border-border-color rounded-[20px] flex flex-col mt-6">
                <div className="flex items-center gap-3 ml-6 mt-7">
                    <div className="size-14 flex items-center justify-center bg-bg-expense-color rounded-xl">
                        <TrendingDown className="text-expense-color" />
                    </div>
                    <h3 className="text-2xl text-gray-detail">Despesas</h3>
                </div>
                <span className="font-bold text-4xl ml-6 mt-7">
                    R$ 3.900,00
                </span>
            </div>
        </main>
    );
}

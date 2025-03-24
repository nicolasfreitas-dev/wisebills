import { TrendingDown } from "lucide-react";
interface ExpensesProps{
    expenses: number
}

export default function Expenses({ expenses }: ExpensesProps) {
    return (
        <div className="w-full h-56 border border-witheWithOpacity rounded-[20px] flex flex-col gap-3 items-start justify-center py-6 px-8 mt-6">
            <div className="flex items-center gap-3">
                <div className="size-14 flex items-center justify-center bg-expenseWithOpacity rounded-xl">
                    <TrendingDown className="text-expense" />
                </div>
                <h3 className="text-2xl text-terciary">Despesas</h3>
            </div>
            <span className="font-bold text-4xl">
                {`R$ ${expenses.toFixed(2)}`}
            </span>
        </div>
    );
}

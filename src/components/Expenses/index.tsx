import { TrendingDown } from "lucide-react";
import AmountTypeContainer from "../AmountTypeContainer";

interface ExpensesProps{
    expenses: number
}

export default function Expenses({ expenses }: ExpensesProps) {
    return (
        <>
            <AmountTypeContainer>
                <div className="flex items-center gap-3">
                    <div className="size-14 flex items-center justify-center bg-bg-expense-color rounded-xl">
                        <TrendingDown className="text-expense-color" />
                    </div>
                    <h3 className="text-2xl text-gray-detail">Despesas</h3>
                </div>
                <span className="font-bold text-4xl">
                    {`R$ ${expenses.toFixed(2)}`}
                </span>
            </AmountTypeContainer>
        </>
    );
}

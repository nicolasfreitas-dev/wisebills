"use client";

import { useState } from "react";
import { useResize } from "@/hooks/useResize";
import Amount from "@/components/Amount";
import Expenses from "@/components/Expenses";
import Savings from "@/components/Savings";
import { useTransactionStore } from "@/store/transactions";
import TransactionsTable from "@/components/TransactionsTable";

export default function Home() {
    const [hideAmount, setHideAmount] = useState(false);
    const { pending, completed } = useTransactionStore();
    const { windowSize } = useResize();

    const allTransaction = [...pending, ...completed];

    const handleHideAmount = () => {
        if (hideAmount) {
            setHideAmount(false);
        } else {
            setHideAmount(true);
        }
    };

    const calculateBalance = () => {
        let balance = 0;
        let expenses = 0;
        let savings = 0;

        allTransaction.forEach((transaction) => {
            
            const amount = typeof transaction.amount === "number"
                ? transaction.amount
                : parseFloat(String(transaction.amount).replace(/[^\d.-]/g, ""));

            const type = transaction.type.toUpperCase();

            if (type === "INCOME" || type === "ENTRADA") {
                balance += amount;
            } else if (type === "EXPENSE" || type === "SAÍDA") {
                balance -= amount;
                expenses += amount;
            } else if (type === "SAVINGS" || type === "RESERVA") {
                balance -= amount;
                savings += amount;
            }

            if (balance < 0) return balance = 0;
        });

        return { balance, expenses, savings };
    };

    const { balance, expenses, savings } = calculateBalance();

    return (
        <main className="min-h-0 h-full flex flex-col md:flex-row md:gap-10 px-10 mb-28 md:mb-6">
            <div className="md:w-[70%] flex flex-col md:gap-4">
                <Amount
                    balance={balance}
                    windowSize={windowSize}
                    hideAmount={hideAmount}
                    handleHideAmount={handleHideAmount}
                />
                <div className="md:flex md:gap-10 flex-grow">
                    <Savings savings={savings} />
                    <Expenses expenses={expenses} />
                </div>
            </div>
            <TransactionsTable />
        </main>
    );
}

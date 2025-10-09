"use client";

import { useState } from "react";
import { useResize } from "@/hooks/useResize";
import Amount from "@/components/Amount";
import Expenses from "@/components/Expenses";
import Reserved from "@/components/Reserved";
import { useTransactionStore } from "@/store/transactions";
import TransactionsTable from "@/components/TransactionsTable";

export default function Home() {
    const [hideAmount, setHideAmount] = useState(false);
    const { pending } = useTransactionStore();
    const { windowSize } = useResize();

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
        let reserved = 0;

        pending.forEach((transaction) => {
            const amount = parseFloat(
                String(transaction.amount).replace(/[^0-9,-]/g, "").replace(",", ".")
            );

            if (transaction.type === "Entrada") {
                balance += amount;
            } else if (transaction.type === "Saída") {
                balance -= amount;
                expenses += amount;
            } else if (transaction.type === "Reserva") {
                balance -= amount;
                reserved += amount;
            }

            if (
                (transaction.type === "Saída" && balance < 0) ||
                (transaction.type === "Reserva" && balance < 0)
            ) {
                balance = 0;
            }
        });

        return { balance, expenses, reserved };
    };

    const { balance, expenses, reserved } = calculateBalance();

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
                    <Reserved reserved={reserved} />
                    <Expenses expenses={expenses} />
                </div>
            </div>
            <TransactionsTable />
        </main>
    );
}

"use client";

import { useState } from "react";
import TransactionsTable from "@/components/TransactionsTable";
import AmountContainer from "@/components/AmountContainer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import {
    ArrowUpDown,
    ChartColumnIcon,
    CheckIcon,
    EyeIcon,
    HouseIcon,
    PlusIcon,
    TrendingDown,
    Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { transaction } from "@/components/TransactionForm";
import { z } from "zod";
import Navbar from "@/components/Navbar";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactions, setTransactions] = useState<
        z.infer<typeof transaction>[]
    >([]);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleAddTransaction = (
        newTransaction: z.infer<typeof transaction>
    ) => {
        setTransactions((prev) => [...prev, newTransaction]);
    };

    const calculateBalance = () => {
        let balance = 0;
        let expenses = 0;

        transactions.forEach((transaction) => {
            const amount = parseFloat(
                transaction.amount.replace(/[^0-9,-]/g, "").replace(",", ".")
            );

            if (transaction.type === "Depósito") {
                balance += amount;
            } else {
                balance -= amount;
                expenses += amount;
            }

            if (transaction.type === "Gasto" && balance < 0) {
                balance = 0;
            }
        });

        return { balance, expenses };
    };

    const { balance, expenses } = calculateBalance();

    const windowSize = window.innerWidth

    return (
        <>
            <Header />
            <main className="px-10 pb-32">
                <AmountContainer background="bg-bg-cash">
                    <div className="flex items-center gap-3">
                        <div className="size-14 flex items-center justify-center bg-bg-primary rounded-xl">
                            <Wallet />
                        </div>
                        <h3 className="text-2xl text-gray-detail">Saldo</h3>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <span className="font-bold text-4xl">
                                {`R$ ${balance.toFixed(2)}`}
                            </span>
                            <EyeIcon />
                        </div>
                        <Button
                            className={`bg-green-detail mt-3 rounded-[20px] px-8 py-6 text-xl ${windowSize < 768 ? "hidden" : ""}`}
                            onClick={handleModalOpen}
                        >
                            <span>Adicionar transação</span>
                            <ArrowUpDown />
                        </Button>
                    </div>
                </AmountContainer>
                <AmountContainer>
                    <div className="flex items-center gap-3">
                        <div className="size-14 flex items-center justify-center bg-bg-expense-color rounded-xl">
                            <TrendingDown className="text-expense-color" />
                        </div>
                        <h3 className="text-2xl text-gray-detail">Despesas</h3>
                    </div>
                    <span className="font-bold text-4xl">
                        {`R$ ${expenses.toFixed(2)}`}
                    </span>
                </AmountContainer>
                <div className="size-full border border-border-color rounded-[20px] flex flex-col mt-4 px-8">
                    <div className="h-32 flex items-center justify-between">
                        <h3 className="text-3xl font-bold">Transações</h3>
                        <span className="text-xl font-bold cursor-pointer">
                            Ver mais
                        </span>
                    </div>
                    <hr className="border-border-color" />
                    <div>
                        <h4 className="text-2xl font-bold mt-7 mb-5">
                            Pendentes
                        </h4>
                        <TransactionsTable transactions={transactions} />
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    isClosed={() => setIsModalOpen(false)}
                    onAddTransaction={handleAddTransaction}
                />
                <Navbar>
                    <nav className="md:hidden w-full h-24 fixed bottom-0 left-0 flex items-center justify-evenly list-none border-t-[1px] border-t-border-color">
                        <li className="p-6 cursor-pointer">
                            <HouseIcon />
                        </li>
                        <li
                            className="p-6 cursor-pointer"
                            onClick={handleModalOpen}
                        >
                            <PlusIcon />
                        </li>
                        <li className="p-6 cursor-pointer">
                            <ChartColumnIcon />
                        </li>
                        <li className="p-6 cursor-pointer">
                            <CheckIcon />
                        </li>
                    </nav>
                </Navbar>
            </main>
        </>
    );
}

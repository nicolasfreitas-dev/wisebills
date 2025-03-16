'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import {
    ChartColumnIcon,
    CheckIcon,
    HouseIcon,
    PlusIcon,
} from "lucide-react";
// import { z } from "zod";
import Navbar from "@/components/Navbar";
import { useResize } from "@/hooks/useResize";
import Amount from "@/components/Amount";
import Expenses from "@/components/Expenses";
import Reserved from "@/components/Reserved";
import PendingTransaction from '../components/PendingTransactions/index';
import TransactionContainer from "@/components/TransactionsContainer";
import CompletedTransactions from "@/components/CompletedTransactions";
import { useTransactionStore } from "@/store/transactions";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [hideAmount, setHideAmount] = useState(false)
    const { transactions } = useTransactionStore()
    const { windowSize } = useResize()

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleHideAmount = () => {
        if (hideAmount) {
            setHideAmount(false)
        } else {
            setHideAmount(true)
        }
    }

    const calculateBalance = () => {
        let balance = 0
        let expenses = 0
        let reserved = 0

        transactions.forEach((transaction) => {
            const amount = parseFloat(
                transaction.amount.replace(/[^0-9,-]/g, "").replace(",", ".")
            )

            if (transaction.type === "Depósito") {
                balance += amount
            } else if (transaction.type === "Gasto") {
                balance -= amount
                expenses += amount
            } else {
                reserved += amount
            }

            if (transaction.type === "Gasto" && balance < 0 || transaction.type === "Reserva" && balance < 0) {
                balance = 0
            }
        })

        return { balance, expenses, reserved }
    };

    const { balance, expenses, reserved } = calculateBalance();

    return (
        <>
            <Header />
            <main className="md:flex md:gap-10 px-10 pb-5">
                <div className="md:w-[60%] md:flex md:flex-col md:gap-4">
                    <Amount
                        balance={balance}
                        windowSize={windowSize}
                        hideAmount={hideAmount}
                        handleHideAmount={handleHideAmount}
                        handleModalOpen={handleModalOpen}
                    />
                    <div className="md:flex md:gap-10">
                        <Reserved reserved={reserved} />
                        <Expenses expenses={expenses} />
                    </div>
                </div>
                <div className="md:w-[40%] flex flex-col mt-2">
                    <TransactionContainer title="Transações Pendentes">
                        <PendingTransaction />
                    </TransactionContainer>
                    <TransactionContainer title="Transações Concluídas">
                        <CompletedTransactions />
                    </TransactionContainer>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    isClosed={() => setIsModalOpen(false)}
                />
                <Navbar>
                    <nav className="md:hidden w-full h-24 fixed bottom-0 left-0 flex items-center justify-evenly list-none border-t-[1px] border-t-border-color">
                        <li className="p-6 cursor-pointer">
                            <HouseIcon />
                        </li>
                        <li className="p-6 cursor-pointer">
                            <ChartColumnIcon />
                        </li>
                        <li
                            className="p-6 cursor-pointer"
                            onClick={handleModalOpen}
                        >
                            <PlusIcon />
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

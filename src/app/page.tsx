"use client"

import { useState } from "react"
import TransactionsTable from "@/components/TransactionsTable"
import ValueContainer from "@/components/ValueContainer"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Modal from "@/components/Modal"
import { ArrowUpDown, TrendingDown, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { transaction } from "@/components/TransactionForm"
import { z } from "zod"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [transactions, setTransactions] = useState<z.infer<typeof transaction>[]>([])

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleAddTransaction = (newTransaction: z.infer<typeof transaction>) => {
        setTransactions(prev => ([...prev, newTransaction]))
    }

    const calculateBalance = () => {
        let balance = 0
        let expenses = 0

        transactions.forEach((transaction) => {
            const amount = parseFloat(transaction.amount.replace(/[^0-9,-]/g, "").replace(",", "."))

            if (transaction.type === "Deposito") {
                balance += amount
                
            } 

            if (transaction.type === "Gasto") {
                expenses += amount
                
            } else if (balance < 0) {
                return;
            } else {
                balance -= amount
            }
        })

        return { balance, expenses }
    }

    const { balance, expenses } = calculateBalance()

    return (
        <>
            <Header />
            <main className="mx-10 pb-32">
                <h1 className="font-bold text-3xl mt-10">Dashboard</h1>
                <ValueContainer background="bg-bg-cash">
                    <div className="flex items-center gap-3 ml-6 mt-5">
                        <div className="size-14 flex items-center justify-center bg-bg-primary rounded-xl">
                            <Wallet />
                        </div>
                        <h3 className="text-2xl text-gray-detail">Saldo</h3>
                    </div>
                    <span className="font-bold text-4xl ml-6">
                        {`R$ ${balance.toFixed(2)}`}
                    </span>
                    <Button
                        className="bg-green-detail ml-6 mt-3 rounded-[20px] px-8 py-6 text-xl"
                        onClick={handleModalOpen}
                    >
                        <span>Adicionar transação</span>
                        <ArrowUpDown />
                    </Button>
                </ValueContainer>
                <ValueContainer>
                    <div className="flex items-center gap-3 ml-6 mt-7">
                        <div className="size-14 flex items-center justify-center bg-bg-expense-color rounded-xl">
                            <TrendingDown className="text-expense-color" />
                        </div>
                        <h3 className="text-2xl text-gray-detail">Despesas</h3>
                    </div>
                    <span className="font-bold text-4xl ml-6 mt-7">
                        {`R$ ${expenses.toFixed(2)}`}
                    </span>
                </ValueContainer>
                <div className="size-full border border-border-color rounded-[20px] flex flex-col mt-4 px-8">
                    <div className="h-32 flex items-center justify-between">
                        <h3 className="text-3xl font-bold">Transações</h3>
                        <span className="text-xl font-bold cursor-pointer">Ver mais</span>
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
            </main>
            <Footer />
        </>
    );
}

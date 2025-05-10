import { create } from "zustand"
import { z } from "zod"
import { transaction } from "@/components/TransactionForm"

type transactionType = z.infer<typeof transaction>

type useTransaction = {
    transactions: transactionType[];
    completedTransactions: transactionType[];
    addTransaction: (transaction: transactionType) => void
    addCompletedTransaction: (transaction: transactionType) => void
    markAsCompleted: (id: number) => void
}

export const useTransactionStore = create<useTransaction>((set) => ({
    transactions: [],
    completedTransactions: [],
    addTransaction: async (transaction) => {
        const res = await fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transaction),
        });

        if (!res.ok) {
            throw new Error("Erro ao salvar transação");
        }

        const newTransaction = await res.json();

        set((state) => ({
            transactions: [...state.transactions, newTransaction],
        }));
    },
    addCompletedTransaction: (transaction) => set((state) => ({
    completedTransactions: [...state.completedTransactions, transaction]
    })),
    markAsCompleted: (id) => set((state) => {
        const isCompleted = state.transactions.find((data) => data.id === id)

        if (!isCompleted) return state;

        return {
            transactions: state.transactions.filter((data) => data.id !== id),
            completedTransactions: [...state.completedTransactions, isCompleted]
        }
    })
}))
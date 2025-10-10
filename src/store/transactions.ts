import { create } from "zustand"
import { z } from "zod"
import { transactionSchema } from "@/lib/validations/transaction-schema"

type transactionType = z.infer<typeof transactionSchema>

type useTransaction = {
    pending: transactionType[]
    completed: transactionType[]
    fetchTransactions: () => Promise<void>
    addTransaction: (transaction: transactionType) => void
    markAsCompleted: (id: number) => void
    revertToPending: (id: number) => void
}

export const useTransactionStore = create<useTransaction>((set) => ({
    pending: [],
    completed: [],
    fetchTransactions: async () => {
        try {
            const res = await fetch("/api/transactions")
            const data = await res.json();
            set({ pending: data })

        } catch (error) {
            console.error("Erro ao buscar transações: " + error)
        }
    },
    addTransaction: async (transaction) => {
        const res = await fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transaction),
        });

        if (!res.ok) {
            throw new Error("Erro ao salvar transação")
        }

        const newTransaction = await res.json();

        set((state) => ({
            pending: [...state.pending, newTransaction],
        }));
    },
    markAsCompleted: (id) => set((state) => {
        const isCompleted = state.pending.find((data) => data.id === id)

        if (!isCompleted) return state

        return {
            pending: state.pending.filter((data) => data.id !== id),
            completed: [...state.completed, isCompleted]
        }
    }),
    revertToPending: (id) => set((state) => {
        const isPending = state.completed.find((data) => data.id === id)

        const isAlreadyPending = state.pending.some((data) => data.id === id)

        if (isAlreadyPending) return state

        if (!isPending) return state

        return {
            pending: [...state.pending, isPending],
            completed: state.completed.filter((data) => data.id !== id)
        }
    })
}))
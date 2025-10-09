import { useEffect } from "react";
import { useTransactionStore } from "@/store/transactions";

const useFetchTransaction = () => {
    const { addTransaction } = useTransactionStore()

   useEffect(() => {
    (async () => {
        const res = await fetch('/api/transactions')
        const data = await res.json()
        addTransaction(data)
    })()
   }, [addTransaction])
}

export default useFetchTransaction;
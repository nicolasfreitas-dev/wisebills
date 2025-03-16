import { Table, TableBody, TableCell, TableRow } from "../ui/table"
import { Checkbox } from "../ui/checkbox";
import { Edit } from "lucide-react";
import { useTransactionStore } from "@/store/transactions";

export default function PendingTransaction() {
    const { transactions, markAsCompleted } = useTransactionStore()

    return (
        <Table>
            <TableBody>
                {transactions.map((transaction, index) => {
                    return (
                        <TableRow
                            key={index}
                            className="flex items-center justify-between border-0"
                        >
                            <TableCell className="text-lg font-bold">
                                {transaction.date
                                    .toLocaleDateString("pt-BR")
                                    .split("/")
                                    .slice(0, 2)
                                    .join("/")}
                            </TableCell>
                            <TableCell className="w-full max-w-[12rem] flex flex-col items-start justify-start text-lg">
                                <span className="font-bold">
                                    {transaction.title}
                                </span>
                                <span>
                                    {transaction.paymentMethod === "Cartão"
                                        ? `Parcela 1 de ${transaction.parcel}`
                                        : transaction.paymentMethod}
                                </span>
                            </TableCell>
                            <TableCell
                                className={`text-lg font-bold ${
                                    transaction.type === "Gasto"
                                        ? "text-expense-color"
                                        : "text-green-detail"
                                }`}
                            >
                                {`R$ ${parseFloat(transaction.amount).toFixed(
                                    2
                                )}`}
                            </TableCell>
                            <TableCell className="flex items-center gap-5">
                                <Checkbox onClick={() => markAsCompleted(transaction.id)} />
                                <Edit className="size-6 cursor-pointer" />
                            </TableCell>
                        </TableRow>
                    );
                })
                }
                {transactions.length === 0 && (
                    <TableRow>
                        <TableCell className="text-xl text-center col-span-3 py-4">
                            Nenhuma transação pendente
                        </TableCell>
                    </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}

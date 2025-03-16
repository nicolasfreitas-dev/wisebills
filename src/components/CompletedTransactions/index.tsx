import { Edit } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableRow, TableCell } from "../ui/table";
import { useTransactionStore } from "@/store/transactions";

export default function CompletedTransactions() {
    const { completedTransactions } = useTransactionStore()

    const formatDate = (dateValue: any) => {
        if (!dateValue) return "";

        try {
            const date = typeof dateValue === "string" ? new Date(dateValue) : dateValue

            return date
                .toLocaleDateString("pt-BR")
                .split("/")
                .slice(0, 2)
                .join("/");
        } catch (error) {
            console.error("Erro ao formatar data:", error);

            return "";
        }
    }

    return (
        <Table>
            <TableBody>
                {completedTransactions.map((transaction, index) => {
                    return (
                        <TableRow
                            key={index}
                            className="flex items-center justify-between border-0"
                        >
                            <TableCell className="text-lg font-bold">
                                {formatDate(transaction.date)}
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
                                <Checkbox />
                                <Edit className="size-6 cursor-pointer" />
                            </TableCell>
                        </TableRow>
                    );
                })}
                {completedTransactions.length === 0 && (
                    <TableRow>
                        <TableCell className="text-xl text-center col-span-3 py-4">
                            Nenhuma transação concluída
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};

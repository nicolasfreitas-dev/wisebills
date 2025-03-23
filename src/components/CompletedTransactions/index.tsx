"use client"

import { Edit } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader } from "../ui/table";
import { useTransactionStore } from "@/store/transactions";

export default function CompletedTransactions() {
    const { completedTransactions } = useTransactionStore()

    const formatDate = (dateValue: Date | undefined) => {
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
        }
    }

    return (
        <div className="border border-dark-gray-detail rounded-2xl overflow-hidden">
            <Table className="w-full text-lg md:text-xl">
                <TableHeader className="bg-dark-gray-detail">
                    <TableRow className="border-dark-gray-detail">
                        <TableHead>Data</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Método</TableHead>
                        <TableHead>Parcelas</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {completedTransactions.map((transaction, index) => {
                        return (
                            <TableRow
                                key={index}
                                className="border-dark-gray-detail"
                            >
                                <TableCell className="font-bold">
                                    {formatDate(transaction.date)}
                                </TableCell>
                                <TableCell>
                                    {transaction.title}
                                </TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.category}</TableCell>
                                <TableCell>
                                    {transaction.paymentMethod}
                                </TableCell>
                                <TableCell>
                                    {transaction.paymentMethod === "Cartão" ? (
                                        <span>
                                            Parcela 1 de {transaction.parcel}
                                        </span>
                                    ) : (
                                        "-"
                                    )}
                                </TableCell>
                                <TableCell
                                    className={`text-base md:text-lg font-bold ${
                                        transaction.type === "Gasto"
                                            ? "text-expense-color"
                                            : "text-green-detail"
                                    }`}
                                >
                                    {`R$ ${parseFloat(
                                        transaction.amount
                                    ).toFixed(2)}`}
                                </TableCell>
                                <TableCell className="flex items-center justify-end gap-5 mr-5">
                                    <Checkbox className="size-4" />
                                    <Edit className="size-5 cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {completedTransactions.length === 0 && (
                <div className="w-full text-center">
                    <span className="text-xl text-center col-span-3 py-10">
                        Nenhuma transação concluída
                    </span>
                </div>
            )}
        </div>
    );
};

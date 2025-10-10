"use client"

import { Edit } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Table, TableBody, TableRow, TableCell, TableHead, TableHeader } from "../ui/table";
import { useTransactionStore } from "@/store/transactions";

export default function CompletedTransactions() {
    const { completed, revertToPending } = useTransactionStore()

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
        <div className="h-full border border-darkGray rounded-2xl flex flex-col flex-grow overflow-auto">
            <Table className="w-full h-full text-lg md:text-xl">
                <TableHeader className="bg-darkGreen">
                    <TableRow className="border-darkGray">
                        <TableHead className="font-bold">Data</TableHead>
                        <TableHead className="font-bold">Nome</TableHead>
                        <TableHead className="font-bold">Tipo</TableHead>
                        <TableHead className="font-bold">Categoria</TableHead>
                        <TableHead className="font-bold">Método</TableHead>
                        <TableHead className="font-bold">Parcelas</TableHead>
                        <TableHead className="font-bold">Valor</TableHead>
                        <TableHead className="font-bold"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {completed.map((transaction, index) => {
                        return (
                            <TableRow
                                key={index}
                                className="border-darkGray"
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
                                    {transaction.paymentMethod === "Cartão de crédito" ? (
                                        <span>
                                            Parcela 1 de {transaction.parcel}
                                        </span>
                                    ) : (
                                        "-"
                                    )}
                                </TableCell>
                                <TableCell
                                    className={`text-base md:text-lg font-bold ${
                                        transaction.type === "EXPENSE"
                                            ? "text-expense"
                                            : "text-cash"
                                    }`}
                                >
                                    {`R$ ${parseFloat(
                                        transaction.amount
                                    ).toFixed(2)}`}
                                </TableCell>
                                <TableCell className="flex items-center justify-end gap-5 mr-5">
                                    <Checkbox 
                                    className="size-5"
                                    onClick={() => revertToPending(transaction.id)}
                                    />
                                    <Edit className="size-6 cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {completed.length === 0 && (
                <div className="w-full text-center mt-5">
                    <span className="text-xl md:text-2xl">
                        Nenhuma transação concluída
                    </span>
                </div>
            )}
        </div>
    );
};

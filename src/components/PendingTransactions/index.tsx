"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Checkbox } from "../ui/checkbox";
import { Edit } from "lucide-react";
import { useTransactionStore } from "@/store/transactions";

export default function PendingTransactions() {
    const { transactions, markAsCompleted } = useTransactionStore()

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
                <TableBody className="">
                    {transactions.map((transaction, index) => {
                        return (
                            <TableRow
                                key={index}
                                className="border-dark-gray-detail"
                            >
                                <TableCell className="text-lg font-bold">
                                    {transaction.date
                                        .toLocaleDateString("pt-BR")
                                        .split("/")
                                        .slice(0, 2)
                                        .join("/")}
                                </TableCell>
                                <TableCell className="text-base md:text-lg">
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
                                    <Checkbox
                                        className="size-4"
                                        onClick={() => {
                                            markAsCompleted(transaction.id);
                                        }}
                                    />
                                    <Edit className="size-5 cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {transactions.length === 0 && (
                <div className="w-full text-center">
                    <span className="text-xl text-center col-span-3 py-10">
                        Nenhuma transação pendente
                    </span>
                </div>
            )}
        </div>
    );
}

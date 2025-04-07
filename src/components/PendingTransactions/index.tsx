"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Checkbox } from "../ui/checkbox";
import { Edit } from "lucide-react";
import { useTransactionStore } from "@/store/transactions";

export default function PendingTransactions() {
    const { transactions, markAsCompleted } = useTransactionStore()

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
                    {transactions.map((transaction, index) => {
                        return (
                            <TableRow key={index} className="border-darkGray">
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
                                        transaction.type === "Saída"
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
                                        onClick={() => {
                                            markAsCompleted(transaction.id);
                                        }}
                                    />
                                    <Edit className="size-6 cursor-pointer" />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {transactions.length === 0 && (
                <div className="w-full text-center mt-5">
                    <span className="text-xl md:text-2xl">
                        Nenhuma transação pendente
                    </span>
                </div>
            )}
        </div>
    );
}

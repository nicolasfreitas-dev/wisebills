import { Checkbox } from "@/components/ui/checkbox";
import { Edit } from "lucide-react";
import { Table, TableBody, TableRow, TableCell } from "../ui/table";
import { useTransactionStore } from "@/store/transactions";
import Link from "next/link";

export default function TransactionsTable() {
    const { transactions, markAsCompleted } = useTransactionStore()
    
    return (
        <div className="md:w-[30%] w-full border border-witheWithOpacity rounded-[20px] flex flex-col flex-grow md:flex-grow-0 mt-6 px-8">
            <div className="h-32 flex items-center justify-between shrink-0">
                <h3 className="text-3xl font-bold">Transações Pendentes</h3>
                <Link href="/pages/pending" className="text-xl font-bold cursor-pointer">
                    Ver mais
                </Link>
            </div>
            <hr className="border-witheWithOpacity" />
            <div className="flex-grow overflow-auto">
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
                                                ? "text-expense"
                                                : "text-cash"
                                        }`}
                                    >
                                        {`R$ ${parseFloat(
                                            transaction.amount
                                        ).toFixed(2)}`}
                                    </TableCell>
                                    <TableCell className="flex items-center gap-5">
                                        <Checkbox
                                            className="size-5"
                                            onClick={() =>
                                                markAsCompleted(transaction.id)
                                            }
                                        />
                                        <Edit className="size-6 cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {transactions.length === 0 && (
                            <TableRow>
                                <TableCell className="text-xl text-center py-10">
                                    Nenhuma transação pendente
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

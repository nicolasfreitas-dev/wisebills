import { Transaction } from "../TransactionForm"
import { Table, TableBody, TableCell, TableRow } from "../ui/table"

interface TransactionTableProps {
    transactions: Transaction[]
}

export default function TransactionsTable({ transactions }: TransactionTableProps) {
    return (
        <Table>
            <TableBody>
                {transactions.map((transaction, index) => {
                    return (
                        <TableRow key={index} className="flex items-center justify-between">
                            <TableCell className="text-lg font-bold">
                                {transaction.date.toLocaleDateString('pt-BR')}
                            </TableCell>
                            <TableCell className="flex flex-col text-lg">
                                <span className=" font-bold">{transaction.title}</span>
                                <span>Parcela {transaction.parcel}</span>
                            </TableCell>
                            <TableCell className="text-lg font-bold">
                                {transaction.amount}
                            </TableCell>
                        </TableRow>

                    )
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

import { Table, TableBody, TableCell, TableRow } from "../ui/table";

export default function TransactionsTable() {
    return (
        <Table>
            <TableBody>
                <TableRow className="flex items-center justify-between">
                    <TableCell className="text-lg font-bold">15/01</TableCell>
                    <TableCell className="flex flex-col text-lg">
                        <span className=" font-bold">Computador</span>
                        <span>Parcela 3 de 3</span>
                    </TableCell>
                    <TableCell className="text-lg font-bold">R$ 900,00</TableCell>
                    {/* <input type="checkbox" /> */}
                </TableRow>
            </TableBody>
        </Table>
    );
}

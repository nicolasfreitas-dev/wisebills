"use client"

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface TransactionFormProps {
    isClosed: () => void;
}

export default function TransactionForm({ isClosed }: TransactionFormProps) {
    return (
        <form className="w-full flex flex-col items-start px-8">
            <Label className="text-2xl font-bold pb-2">Título</Label>
            <Input className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl" placeholder="Titulo da despesa" />
            <Label className="text-2xl font-bold pb-2">Valor</Label>
            <Input className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl" placeholder="R$ 0.000,00" />
            <Label className="text-2xl font-bold pb-2">Tipo de transação</Label>
            <Select>
                <SelectTrigger className="h-14 rounded-[1.2rem] border-border-color mb-8 text-xl">
                    <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent className="bg-bg-secondary border-border-color">
                    <SelectItem className="cursor-pointer text-xl" value="Gasto">Gasto</SelectItem>
                    <SelectItem className="cursor-pointer text-xl" value="Deposito">Depósito</SelectItem>
                </SelectContent>
            </Select>
            <Label className="text-2xl font-bold pb-2">Método de pagamento</Label>
            <Label className="text-2xl font-bold pb-2">Data</Label>
            <div className="w-full flex items-center justify-center gap-5">
                <Button className="w-full h-14 bg-dark-gray-detail rounded-[1.2rem]" onClick={isClosed}>Cancelar</Button>
                <Button className="w-full h-14 bg-green-detail rounded-[1.2rem]">Adicionar</Button>
            </div>
        </form>
    );
}
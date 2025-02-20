"use client";

import { useState } from "react";
import DatePickerField from "../DatePickerField";
import SelectField from "../SelectField";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TransactionFormProps {
    isClosed: () => void;
    onAddTransaction: (transaction: Transaction) => void
}
export interface Transaction {
    title: string,
    amount: string,
    type: string,
    paymentMethod: string,
    category: string,
    date: Date
}

export default function TransactionForm({ isClosed, onAddTransaction }: TransactionFormProps) {
    const [transaction, setTransaction] = useState<Transaction>({
        title: "",
        amount: "",
        type: "",
        paymentMethod: "",
        category: "",
        date: new Date(),
    });

    const handleInputChange = (field: keyof Transaction, value: any) => {
        setTransaction(prev => ({...prev, [field]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        onAddTransaction(transaction)

        isClosed()
    }

    return (
        <form className="w-full flex flex-col items-start px-8" onSubmit={handleSubmit}>
            <Label className="text-2xl font-bold pb-2">Título</Label>
            <Input
                className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl"
                placeholder="Titulo da despesa"
                value={transaction.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
            />
            <Label className="text-2xl font-bold pb-2">Valor</Label>
            <Input
                className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl"
                placeholder="R$ 0.000,00"
                value={transaction.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
            />
            <Label className="text-2xl font-bold pb-2">Tipo de transação</Label>
            <SelectField
                placeholder="Selecione"
                selectItem={["Gasto", "Deposito"]}
                value={transaction.type}
                onChange={(value) => handleInputChange("type", value)}
            />
            <Label className="text-2xl font-bold pb-2">
                Método de pagamento
            </Label>
            <SelectField
                placeholder="Selecione"
                selectItem={["Pix", "À vista", "Cartão", "Depósito bancário"]}
                value={transaction.paymentMethod}
                onChange={(value) => handleInputChange("paymentMethod", value)}
            />
            <Label className="text-2xl font-bold pb-2">Categoria</Label>
            <SelectField
                placeholder="Selecione"
                selectItem={[
                    "Lazer",
                    "Alimentação",
                    "Transporte",
                    "Entretenimento",
                    "Salário",
                ]}
                value={transaction.category}
                onChange={(value) => handleInputChange("category", value)}
            />
            <Label className="text-2xl font-bold pb-2">Data</Label>
            <DatePickerField value={transaction.date} onChange={(date) => handleInputChange("date", date)} />
            <div className="w-full flex items-center justify-center gap-5">
                <Button
                    className="w-full h-14 bg-dark-gray-detail rounded-[1.2rem]"
                    onClick={isClosed}
                    type="button"
                >
                    Cancelar
                </Button>
                <Button className="w-full h-14 bg-green-detail rounded-[1.2rem]" type="submit">
                    Adicionar
                </Button>
            </div>
        </form>
    );
}

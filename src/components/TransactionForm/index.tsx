"use client"

import DatePickerField from "../DatePickerField";
import SelectField from "../SelectField";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TransactionFormProps {
    isClosed: () => void;
}

export default function TransactionForm({ isClosed }: TransactionFormProps) {
    return (
        <form className="w-full flex flex-col items-start px-8">
            <Label className="text-2xl font-bold pb-2">Título</Label>
            <Input
                className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl"
                placeholder="Titulo da despesa"
            />
            <Label className="text-2xl font-bold pb-2">Valor</Label>
            <Input
                className="h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl"
                placeholder="R$ 0.000,00"
            />
            <Label className="text-2xl font-bold pb-2">Tipo de transação</Label>
            <SelectField
                placeholder="Selecione"
                selectItem={["Gasto", "Deposito"]}
            />
            <Label className="text-2xl font-bold pb-2">
                Método de pagamento
            </Label>
            <SelectField
                placeholder="Selecione"
                selectItem={["Pix", "À vista", "Cartão"]}
            />
            <Label className="text-2xl font-bold pb-2">Categoria</Label>
            <SelectField
                placeholder="Selecione"
                selectItem={["Lazer", "Alimentação", "Transporte", "Entretenimento"]}
            />
            <Label className="text-2xl font-bold pb-2">Data</Label>
            <DatePickerField />
            <div className="w-full flex items-center justify-center gap-5">
                <Button
                    className="w-full h-14 bg-dark-gray-detail rounded-[1.2rem]"
                    onClick={isClosed}
                >
                    Cancelar
                </Button>
                <Button className="w-full h-14 bg-green-detail rounded-[1.2rem]">
                    Adicionar
                </Button>
            </div>
        </form>
    );
}
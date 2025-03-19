"use client";

import { useForm, useWatch } from "react-hook-form";
import SelectField from "../SelectField";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ptBR } from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { useTransactionStore } from "@/store/transactions";

interface TransactionFormProps {
    isClosed: () => void
}

export const transaction = z
    .object({
        id: z.number(),
        title: z
            .string()
            .min(1, { message: "Informe o título da transação" })
            .regex(/^[a-zA-Z]/g, { message: "Título inválido" }),
        amount: z
            .string()
            .min(1, { message: "Informe o valor da transação" })
            .regex(/^[0-9]/g, { message: "Valor inválido" }),
        type: z.string().min(1, { message: "Selecione o tipo da transação" }),
        paymentMethod: z
            .string()
            .min(1, { message: "Selecione o método de pagamento" }),
        parcel: z.string().optional(),
        category: z
            .string()
            .min(1, { message: "Selecione a categoria da transação" }),
        date: z.date({
            required_error: "Informe a data da transação",
            invalid_type_error: "Data inválida",
        }),
    })
    .superRefine((data, ctx) => {
        if (
            data.paymentMethod === "Cartão" &&
            (!data.parcel || data.parcel.length === 0)
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Selecione o número de parcelas",
                path: ["parcel"],
            });
        }
    })

export default function TransactionForm({ isClosed }: TransactionFormProps) {
    const { addTransaction } = useTransactionStore()

    const randomID = Math.floor(Math.random() * 1000)

    const form = useForm<z.infer<typeof transaction>>({
        resolver: zodResolver(transaction),
        defaultValues: {
            id: randomID,
            title: "",
            amount: "",
            type: "",
            paymentMethod: "",
            parcel: undefined,
            category: "",
            date: undefined,
        },
        mode: "all",
    });

    const paymentMethod = useWatch({
        control: form.control,
        name: "paymentMethod",
    });

    const onSubmit = (data: z.infer<typeof transaction>) => {
        addTransaction(data);

        isClosed();
    };

    return (
        <Form {...form}>
            <form
                className="w-full flex flex-col items-start px-8"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Título
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="h-16 rounded-[1.2rem] bg-bg-secondary border-border-color"
                                    placeholder="Titulo da despesa"
                                    style={{ fontSize: "1.25rem" }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Valor
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="h-16 rounded-[1.2rem] bg-bg-secondary border-border-color"
                                    placeholder="R$ 0.000,00"
                                    style={{ fontSize: "1.25rem" }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Tipo de transação
                            </FormLabel>
                            <FormControl>
                                <SelectField
                                    placeholder="Selecione"
                                    selectItem={["Gasto", "Depósito", "Reserva"]}
                                    name={field.name}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        form.trigger("type");
                                    }}
                                />
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Método de pagamento
                            </FormLabel>
                            <FormControl>
                                <SelectField
                                    placeholder="Selecione"
                                    selectItem={[
                                        "Pix",
                                        "À vista",
                                        "Cartão",
                                        "Depósito bancário",
                                    ]}
                                    name={field.name}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        form.trigger("paymentMethod");
                                    }}
                                />
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                {paymentMethod === "Cartão" && (
                    <FormField
                        control={form.control}
                        name="parcel"
                        render={({ field }) => (
                            <FormItem className="w-full mb-8">
                                <FormLabel className="text-2xl font-bold pb-2">
                                    Números de parcelas
                                </FormLabel>
                                <FormControl>
                                    <SelectField
                                        placeholder="Selecione"
                                        selectItem={[
                                            "1",
                                            "2",
                                            "3",
                                            "4",
                                            "5",
                                            "6",
                                            "7",
                                            "8",
                                            "9",
                                            "10",
                                            "11",
                                            "12",
                                        ]}
                                        name={field.name}
                                        value={field.value}
                                        onChange={(value) => {
                                            field.onChange(value);
                                            form.trigger("parcel");
                                        }}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense-color mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                )}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Categoria
                            </FormLabel>
                            <FormControl>
                                <SelectField
                                    placeholder="Selecione"
                                    selectItem={[
                                        "Lazer",
                                        "Alimentação",
                                        "Transporte",
                                        "Entretenimento",
                                        "Salário",
                                        "Investimento",
                                        "Compras"
                                    ]}
                                    name={field.name}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        form.trigger("category");
                                    }}
                                />
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="w-full mb-8">
                            <FormLabel className="text-2xl font-bold pb-2">
                                Data
                            </FormLabel>
                            <FormControl>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            type="button"
                                            variant={"outline"}
                                            className={cn(
                                                "w-full h-16 rounded-[1.2rem] bg-bg-secondary border-border-color text-xl justify-start text-left",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-8 w-8" />
                                            {field.value ? (
                                                format(
                                                    field.value,
                                                    "dd/MM/yyyy"
                                                )
                                            ) : (
                                                <span>Escolha uma data</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="bg-bg-secondary border-border-color p-0"
                                        sideOffset={8}
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={(date) => {
                                                field.onChange(date);

                                                form.trigger("date");
                                            }}
                                            initialFocus
                                            locale={ptBR}
                                            fixedWeeks
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormControl>
                            <FormMessage className="text-expense-color mt-2 text-xl" />
                        </FormItem>
                    )}
                />
                <div className="w-full flex items-center justify-center gap-5">
                    <Button
                        className="w-full h-14 text-xl bg-dark-gray-detail rounded-[1.2rem]"
                        onClick={isClosed}
                        type="button"
                    >
                        Cancelar
                    </Button>
                    <Button
                        className="w-full h-14 text-xl bg-green-detail rounded-[1.2rem]"
                        type="submit"
                    >
                        Adicionar
                    </Button>
                </div>
            </form>
        </Form>
    );
}

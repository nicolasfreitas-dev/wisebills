import { z } from "zod";

export const transactionSchema = z
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
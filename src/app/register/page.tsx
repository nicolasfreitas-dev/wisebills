"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const registerSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Nome inválido." })
        .regex(/^[a-zA-Z]/g, "Nome inválido."),
    surname: z
        .string()
        .min(1, { message: "Sobrenome inválido." })
        .regex(/^[a-zA-Z]/g, "Sobrenome inválido."),
    email: z
        .string()
        .min(1, { message: "E-mail inválido." })
        .regex(
            /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+\.?[a-z]*$/i,
            "E-mail inválido."
        ),
    phone: z
        .string()
        .min(1, { message: "Número de telefone inválido." })
        .max(11, { message: "Número de telefone inválido." })
        .regex(/^[0-9]/g, "Número de telefone inválido."),
    password: z
        .string()
        .min(1, { message: "Senha inválida." })
        .regex(/^[a-aA-Z0-9]/g, "Senha inválida."),
    confirmPassword: z
        .string()
        .min(1, { message: "Senha inválida." })
        .regex(/^[a-zA-Z0-9-_.*{}$&#@!"'+\/]/g, "Senha inválida."),
});

export default function Register() {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        },
        mode: "all",
    });

    const onSubmit = (data: z.infer<typeof registerSchema>) => {
        console.log(data);
    };

    return (
        <section className="w-full h-full flex items-center justify-center">
            <Form {...form}>
                <form
                    className="max-w-[76rem] w-full grid grid-cols-2 gap-10
                     px-10 py-12 bg-darkGray rounded-[1.2rem]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <h2 className="w-full col-span-2 text-4xl font-bold text-center pb-5">
                        Crie sua conta  
                    </h2>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Nome
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Sobrenome
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    E-mail
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Telefone
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Senha
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Confirmar senha
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className="h-20 rounded-[1.2rem] bg-secondary border-witheWithOpacity"
                                        placeholder=""
                                        style={{ fontSize: "1.25rem" }}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-expense mt-2 text-xl" />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full max-w-[30rem] h-20 col-span-2 mx-auto rounded-[1.2rem] text-xl">
                        Cadastrar
                    </Button>
                </form>
            </Form>
        </section>
    );
}

'use client'

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

const loginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "E-mail inválido." })
        .regex(
            /^[a-z0-9-_.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
            "E-mail inválido."
        ),
    password: z
        .string()
        .min(1, { message: "Senha inválida." })
        .regex(/^[a-zA-Z0-9]/g, "Senha inválida."),
});

export default function Login() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "all"
    })

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data);
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            <Form {...form}>
                <form
                    className="max-w-[49rem] w-full flex flex-col gap-10
                     px-10 py-12 bg-darkGray rounded-[1.2rem]"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <h2 className="text-4xl font-bold text-center">
                        Acesse sua conta
                    </h2>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl font-bold pb-2">
                                    Seu e-mail
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
                    <Button className="h-20 rounded-[1.2rem] text-xl">
                        Entrar
                    </Button>
                    <p className="text-center text-xl">
                        Ainda não possui conta?{" "}
                        <span className="text-cash cursor-pointer underline">
                            Faça o cadastro!
                        </span>
                    </p>
                </form>
            </Form>
        </section>
    );
}

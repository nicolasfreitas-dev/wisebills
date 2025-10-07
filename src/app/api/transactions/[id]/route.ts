import { transactionSchema } from "@/lib/validations/transaction-schema";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    try {
        const transaction = await prisma.transaction.findUnique({
            where: {id: Number(params.id)},
        });

        if (!transaction) {
            return NextResponse.json(
                { error: "Transação não encontrada" },
                { status: 404 }
            )
        }
       
        return NextResponse.json(transaction);
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { error: "Erro a buscar transação" },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const data = await req.json();
        const response = transactionSchema.parse(data);
        const transaction = await prisma.transaction.update({
            where: { id: Number(params.id) },
            data: {
                ...response,
                amount: parseFloat(response.amount),
                parcel: response.parcel ? parseInt(response.parcel) : undefined,
            },
        });

        return NextResponse.json(transaction);
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    (error as Error).message || "Erro ao atualizar transação",
            },
            { status: 400 }
        );
    }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    try {
        await prisma.transaction.delete({
            where: {id: Number(params.id)}
        })

        return NextResponse.json({message: "Transação deletada com sucesso!"});
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { error: "Erro ao excluir transação" },
            { status: 500 }
        );
    }
}
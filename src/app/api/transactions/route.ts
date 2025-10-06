import { transactionSchema } from "@/lib/validations/transaction-schema";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    const { title, amount, type, paymentMethod, parcel, category, date } = body;

    try {
        const transaction = await prisma.transaction.create({
            data: {
                title,
                amount: parseFloat(amount),
                type,
                paymentMethod ,
                parcel: parcel ? parseInt(parcel) : undefined,
                category,
                date: new Date(date)
            }
        });

        return NextResponse.json(transaction);

    } catch (error) {
        console.error(error);

        return NextResponse.json({ error: "Erro ao criar transação" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const transactions = await prisma.transaction.findMany({orderBy: {id: 'desc'}});

        return NextResponse.json(transactions)
    }
    catch (error) {
        console.error(error);
    }
}

export async function UPDATE(req: Request, { params }: {params : {id: string}}) {
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

        return NextResponse.json(transaction)

    } catch (error) {
        return NextResponse.json({error: (error as Error).message || "Erro ao atualizar transação"}, {status: 400})
    }
}

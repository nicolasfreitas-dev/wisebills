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

        return NextResponse.json(
            { error: "Erro ao criar transação" }, 
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const transactions = await prisma.transaction.findMany({orderBy: {id: 'desc'}});

        return NextResponse.json(transactions)
    }
    catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Erro ao buscar transações" },
            { status: 500 }
        );
    }
}
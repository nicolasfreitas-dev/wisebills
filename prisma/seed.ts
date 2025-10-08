import { PrismaClient, TransactionTypes } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
    {
        name: "Nicolas",
        surname: "Ferreira",
        email: "nicolas@example.com",
        phone: "11987654321",
        password: "senha123",
    },
    {
        name: "Mariana",
        surname: "Souza",
        email: "mariana.souza@example.com",
        phone: "11912345678",
        password: "123456",
    },
    {
        name: "Carlos",
        surname: "Lima",
        email: "carlos.lima@example.com",
        phone: "11999998888",
        password: "abc123",
    },
];

const transactionsData = [
      {
        title: 'Salário Mensal',
        amount: 4500.00,
        type: TransactionTypes.INCOME,
        paymentMethod: 'Transferência Bancária',
        category: 'Trabalho',
        date: new Date('2025-10-01'),
      },
      {
        title: 'Compra no Supermercado',
        amount: 320.45,
        type: TransactionTypes.EXPENSE,
        paymentMethod: 'Cartão de Crédito',
        parcel: 1,
        category: 'Alimentação',
        date: new Date('2025-10-03'),
      },
      {
        title: 'Investimento em Poupança',
        amount: 800.00,
        type: TransactionTypes.SAVINGS,
        paymentMethod: 'Transferência Bancária',
        category: 'Investimentos',
        date: new Date('2025-10-05'),
      },
      {
        title: 'Assinatura de Streaming',
        amount: 49.90,
        type: TransactionTypes.EXPENSE,
        paymentMethod: 'Cartão de Crédito',
        parcel: 1,
        category: 'Entretenimento',
        date: new Date('2025-10-06'),
      },
      {
        title: 'Venda de Equipamento Usado',
        amount: 650.00,
        type: TransactionTypes.INCOME,
        paymentMethod: 'Pix',
        category: 'Venda',
        date: new Date('2025-10-07'),
      },
    ]

export async function main() {
    for (const u of userData) {
        await prisma.user.create({ data: u });
    }
}

export async function transaction() {
    for (const u of transactionsData) {
        await prisma.transaction.create({ data: u })
    }
}

main();
transaction();
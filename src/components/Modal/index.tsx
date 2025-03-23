"use client"

import { X } from "lucide-react";
import TransactionForm from "../TransactionForm"
import { useModalStore } from "@/store/modal";

export default function Modal() {
    const { isOpen, setIsOpen } = useModalStore();

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="max-w-3xl w-4/5 h-4/5 absolute top-20 flex flex-col items-center bg-bg-secondary rounded-2xl overflow-y-auto pb-5 md:pb-7">
                        <X
                            className="absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                            size={24}
                        />
                        <h1 className="text-3xl font-bold mt-8 pb-1">
                            Adicionar Transação
                        </h1>
                        <p className="text-2xl text-gray-detail pb-8">
                            Insira as informações abaixo
                        </p>
                        <TransactionForm />
                    </div>
                </div>
            )}
        </>
    );
}

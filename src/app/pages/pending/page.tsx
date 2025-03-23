"use client"

import PendingTransactions from "@/components/PendingTransactions";
import { useResize } from "@/hooks/useResize";
import { useModalStore } from "@/store/modal";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Completed() {
        const { windowSize } = useResize();
        const { setIsOpen } = useModalStore()

    return (
        <section className="w-full min-h-screen px-10 py-6 pb-[75px] md:pb-6">
            <div className="flex items-center justify-between pb-5">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Transações Pendentes
                </h2>
                <Button
                    className={`bg-green-detail rounded-[20px] px-8 py-6 text-xl ${
                        windowSize < 768 ? "hidden" : ""
                    }`}
                    onClick={() => setIsOpen(true)}
                >
                    <span>Adicionar transação</span>
                    <ArrowUpDown />
                </Button>
            </div>
            <PendingTransactions />
        </section>
    );    
};

"use client"

import PendingTransactions from "@/components/PendingTransactions";
import { useResize } from "@/hooks/useResize";
import { useModalStore } from "@/store/modal";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Completed() {
        const { windowSize } = useResize();
        const { setOpenDialog } = useModalStore()

    return (
        <section className="w-full h-full flex flex-col min-h-0 px-10 mt-6 mb-28 md:mb-6">
            <div className="flex items-center justify-between mb-5 shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold">
                    Transações Pendentes
                </h2>
                <Button
                    className={`bg-quaternary rounded-[20px] px-8 py-6 text-xl ${
                        windowSize < 768 ? "hidden" : ""
                    }`}
                    onClick={() => setOpenDialog(true)}
                >
                    <span>Adicionar transação</span>
                    <ArrowUpDown />
                </Button>
            </div>
            <PendingTransactions />
        </section>
    );    
};

"use client"

import { ArrowUpDown, EyeClosedIcon, EyeIcon, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/modal";

interface AmountProps{
    balance: number
    windowSize: number
    hideAmount: boolean
    handleHideAmount: () => void
}

export default function Amount({ balance, windowSize, hideAmount, handleHideAmount }: AmountProps) {
    const { setIsOpen } = useModalStore()

    return (
        <div className="w-full h-56 border border-border-color rounded-[20px] flex flex-col gap-3 items-start justify-center py-6 px-8 mt-6 bg-bg-cash">
            <div className="flex items-center gap-3">
                <div className="size-14 flex items-center justify-center bg-bg-primary rounded-xl">
                    <Wallet />
                </div>
                <h3 className="text-2xl text-gray-detail">Saldo</h3>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <span className="font-bold text-4xl">
                        {!hideAmount
                            ? "R$ " + balance.toFixed(2)
                            : "R$ ••••"}
                    </span>
                    {!hideAmount ? (
                        <EyeIcon
                            className="cursor-pointer"
                            onClick={handleHideAmount}
                        />
                    ) : (
                        <EyeClosedIcon
                            className="cursor-pointer"
                            onClick={handleHideAmount}
                        />
                    )}
                </div>
                <Button
                    className={`bg-green-detail mt-3 rounded-[20px] px-8 py-6 text-xl ${
                        windowSize < 768 ? "hidden" : ""
                    }`}
                    onClick={() => setIsOpen(true)}
                >
                    <span>Adicionar transação</span>
                    <ArrowUpDown />
                </Button>
            </div>
        </div>
    );
}

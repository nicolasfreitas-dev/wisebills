"use client"

import { ArrowUpDown, EyeClosedIcon, EyeIcon, Wallet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import TransactionForm from "../TransactionForm";

interface AmountProps{
    balance: number
    windowSize: number
    hideAmount: boolean
    handleHideAmount: () => void
}

export default function Amount({ balance, windowSize, hideAmount, handleHideAmount }: AmountProps) {
    return (
        <div className="w-full h-56 border border-witheWithOpacity rounded-[20px] flex flex-col gap-3 items-start justify-center py-6 px-8 mt-6 bg-darkGreen">
            <div className="flex items-center gap-3">
                <div className="size-14 flex items-center justify-center bg-primary rounded-xl">
                    <Wallet />
                </div>
                <h3 className="text-2xl text-terciary">Saldo</h3>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <span className="font-bold text-4xl">
                        {!hideAmount ? "R$ " + balance.toFixed(2) : "R$ ••••"}
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
                <Dialog>
                    <DialogTrigger
                        className={`flex items-center gap-3 bg-quaternary mt-3 rounded-[20px] px-8 py-3 text-xl ${
                            windowSize < 768 ? "hidden" : ""
                        }`}
                    >
                        Adicionar transação
                        <ArrowUpDown size={16} />
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl w-4/5 h-4/5 md:h-full absolute top-20 md:top-0 md:right-0 flex flex-col items-center bg-secondary rounded-2xl overflow-y-auto pb-5 md:pb-7">
                        <DialogHeader className="">
                            <DialogTitle className="text-3xl font-bold mt-12 pb-1">
                                Insira as informações abaixo
                            </DialogTitle>
                        </DialogHeader>
                        <TransactionForm />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

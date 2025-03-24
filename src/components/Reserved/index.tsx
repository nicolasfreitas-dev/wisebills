import { PiggyBankIcon } from "lucide-react";

interface ReservedProps{
    reserved: number
}

export default function Reserved({ reserved }: ReservedProps) {
    return (
        <div className="w-full h-56 border border-witheWithOpacity rounded-[20px] flex flex-col gap-3 items-start justify-center py-6 px-8 mt-6">
            <div className="flex items-center gap-3">
                <div className="size-14 flex items-center justify-center bg-terciary rounded-xl">
                    <PiggyBankIcon className="text-white" />
                </div>
                <h3 className="text-2xl text-terciary">Reserva</h3>
            </div>
            <span className="font-bold text-4xl">
                {`R$ ${reserved.toFixed(2)}`}
            </span>
        </div>
    );
}

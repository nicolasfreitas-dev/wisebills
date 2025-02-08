import { X } from "lucide-react";
import TransactionForm from "../TransactionForm"
interface ModalProps {
    isOpen: boolean
    isClosed: () => void
}

export default function Modal({ isOpen, isClosed }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="absolute top-20 max-w-5xl w-4/5 h-4/5 flex flex-col items-center bg-bg-secondary rounded-2xl overflow-y-auto pb-5 md:pb-7">
                <X className="absolute right-4 top-4 md:right-10 md:top-10 cursor-pointer" onClick={isClosed} size={24} />
                <h1 className="text-3xl font-bold mt-8 pb-1">
                    Adicionar Transação
                </h1>
                <p className="text-2xl text-gray-detail pb-8">
                    Insira as informações abaixo
                </p>
                <TransactionForm isClosed={isClosed} />
            </div>
        </div>
    );
}

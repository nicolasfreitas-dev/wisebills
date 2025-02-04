import TransactionForm from "../TransactionForm"

interface ModalProps {
    isOpen: boolean;
    isClosed: () => void;
}

export default function Modal({ isOpen, isClosed }: ModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="w-4/5 h-4/5 flex flex-col items-center bg-bg-secondary z-10 rounded-2xl">
                <h1 className="text-3xl font-bold pt-5 pb-1">Adicionar Transação</h1>
                <p className="text-2xl text-gray-detail pb-8">Insira as informações abaixo</p>
                <TransactionForm isClosed={isClosed} />
            </div>
        </div>
    )
};

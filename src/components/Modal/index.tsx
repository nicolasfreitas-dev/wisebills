import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ModalProps {
    isOpen: boolean,
    isClosed: () => void
}

export default function Modal({ isOpen, isClosed }: ModalProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={isClosed}>
            <div className="w-4/5 h-4/5 bg-bg-secondary z-10">
                <h1>Adicionar Transação</h1>
                <p>Insira as informações abaixo</p>
                <form>
                    <h2>Título</h2>
                    <Input />
                    <Button onClick={isClosed}>
                        Cancelar
                    </Button>
                </form>
            </div>
        </div>
    )
};

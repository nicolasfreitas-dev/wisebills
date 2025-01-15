export default function Debito() {
    return (
        <div className="w-full flex items-center justify-evenly gap-7 mb-2">
            <span className="text-2xl font-bold">15/01</span>
            <div>
                <p className="text-2xl font-bold">Computador</p>
                <span className="text-2xl text-gray-detail">Parcela 3 de 3</span>
            </div>
            <span className="text-2xl text-expense-color font-bold">R$ 900,00</span>
            <input type="checkbox" name="pago" id="pago" />
        </div>
    )
};

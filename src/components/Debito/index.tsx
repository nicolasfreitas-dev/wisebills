export default function Debito() {
    return (
        <div className="w-full flex items-center justify-evenly gap-7 mb-2">
            <span className="text-xl font-bold">15/01</span>
            <div>
                <p className="text-xl font-bold">Computador</p>
                <span className="text-xl text-gray-detail">Parcela 3 de 3</span>
            </div>
            <span className="text-xl text-expense-color font-bold">R$ 900,00</span>
            <input type="checkbox" name="pago" id="pago" />
        </div>
    )
};

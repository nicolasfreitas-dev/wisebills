import CompletedTransactions from "@/components/CompletedTransactions";

export default function Completed() {
    return (
        <section className="w-full h-full flex flex-col min-h-0 px-10 mt-6 mb-28 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold pb-5">Transações Concluídas</h2>
            <CompletedTransactions />
        </section>
    );    
};

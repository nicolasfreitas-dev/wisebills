import CompletedTransactions from "@/components/CompletedTransactions";

export default function Completed() {
    return (
        <section className="w-full min-h-screen px-10 py-6 pb-[75px] md:pb-6">
            <h2>Transações Concluídas</h2>
            <CompletedTransactions />
        </section>
    );    
};

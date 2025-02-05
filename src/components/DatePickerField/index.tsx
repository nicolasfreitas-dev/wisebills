import React from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { ptBR } from "date-fns/locale/pt-BR"
import { CalendarIcon } from "lucide-react";

export default function DatePickerField() {
    const [date, setDate] = React.useState<Date>()
    
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full h-14 rounded-[1.2rem] bg-bg-secondary border-border-color mb-8 text-xl justify-start text-left",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-8 w-8" />
                    {date ? format(date, "dd/MM/yyyy") : <span>Escolha uma data</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto bg-bg-secondary border-border-color p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={ptBR}
                />
            </PopoverContent>
        </Popover>
    );
};

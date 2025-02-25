import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface SelectFieldProps {
    placeholder: string,
    selectItem: string[],
    value?: string,
    onChange: (value: string) => void;
}

export default function SelectField({ placeholder, selectItem, value, onChange }: SelectFieldProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="h-14 rounded-[1.2rem] border-border-color mb-8 text-xl">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-bg-secondary border-border-color">
                {selectItem.map((item, index) => {
                    return (
                        <SelectItem
                            key={index}
                            className="cursor-pointer text-xl"
                            value={item}
                        >
                            {item}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
}

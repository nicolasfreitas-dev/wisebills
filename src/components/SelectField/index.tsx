import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface SelectFieldProps {
    placeholder: string
    selectItem: string[]
    name: string
    value?: string
    onChange?: (value: string) => void
}

export default function SelectField({
    placeholder,
    selectItem,
    name,
    value,
    onChange
}: SelectFieldProps) {
    return (
        <Select
            onValueChange={onChange}
            value={value}
            name={name}
            defaultValue={value}
        >
            <SelectTrigger className="h-16 rounded-[1.2rem] border-witheWithOpacity text-xl">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-secondary border-witheWithOpacity">
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

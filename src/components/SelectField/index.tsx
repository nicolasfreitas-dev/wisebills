import { useController, UseControllerProps } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

interface SelectFieldProps extends UseControllerProps {
    placeholder: string
    selectItem: string[]
}

export default function SelectField({
    placeholder,
    selectItem,
    ...props
}: SelectFieldProps) {
    const { field } = useController(props);

    return (
        <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
        >
            <SelectTrigger className="h-14 rounded-[1.2rem] border-border-color text-xl">
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

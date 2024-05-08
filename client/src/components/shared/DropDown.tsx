import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropDownGroupProp = {
  fielddData: any[];
  fieldPlaceholder:string;
  field:any
};

const DropDown = ({ fielddData,fieldPlaceholder,field }: DropDownGroupProp) => {
  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger >
        <SelectValue placeholder={fieldPlaceholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {fielddData.map((field)=>(

            <SelectItem value={field.key}>{field.value}</SelectItem>

          ))}
          </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default DropDown;

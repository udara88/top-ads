import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import DropDown from "./DropDown";
import RadioButtonGroup from "./RadioButtonGroup";

type elementProps = {
 
  fieldtype: string;
  fieldplaceholder: string;
  fielddata: any;
  field:any
};

const Element = ({
  fieldtype,
  fieldplaceholder,
  fielddata,
  field
}: elementProps) => {
  switch (fieldtype) {
    case "radio":
      return <RadioButtonGroup fielddData={fielddata} {...field}  />;

    case "select":
      return (
        <DropDown fielddData={fielddata} fieldPlaceholder={fieldplaceholder} field={field}   />
      );

    case "textarea":
      return <Textarea placeholder={fieldplaceholder} {...field}  />;

    case "textbox":
      return <Input placeholder={fieldplaceholder} type="text" {...field}  />;
    default:
      return null;
  }
};

export default Element;

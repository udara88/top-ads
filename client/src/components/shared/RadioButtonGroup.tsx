import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Key } from "lucide-react"

type  RadioButtonGroupProp = {
    fielddData:any[],
   
   
}

const RadioButtonGroup = ({fielddData}:RadioButtonGroupProp) => {
   return (<RadioGroup defaultValue="comfortable" className="flex max-w-80 justify-between gap-5 mt-5"> 
      {fielddData.map((field,index)=>{
         return <div className="flex items-center space-x-2 mt-2">
         <RadioGroupItem value={field.key} id={field.key} />
         <Label htmlFor="r1">{field.value}</Label>
       </div>
      })}
   </RadioGroup>
   )
}

export default RadioButtonGroup
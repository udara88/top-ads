import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {useState } from "react";
import ShowSubCategoryList from "../post/ShowSubCategoryList";


type accordianProps = {
  listItem: any;
  hasImageIcon: boolean;
};

const Accordian = ({ listItem, hasImageIcon }: accordianProps) => {

    const [selectedItem ,setSelectedItem] = useState<number>(1)
   

  return (
    <Accordion type="single" collapsible className="w-full">
      {listItem.map((item: any) => {
        return (
          <AccordionItem value={item.id}>
            <AccordionTrigger onClick={()=> setSelectedItem(item.id)}>
              {hasImageIcon ? (
                <div className="flex gap-2">
                  <Image
                    src={item.imageUrl}
                    width={30}
                    height={30}
                    alt="category icon"
                  />
                  <span>{item.name}</span>
                </div>
              ) : (
                <div>
                  <span>{item.name}</span>
                </div>
              )}
            </AccordionTrigger>
            <AccordionContent>
             <ShowSubCategoryList categoryItem={selectedItem}/>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default Accordian;

import { useState } from "react";
import ItemList from "./ItemList";

const RestroCategories =({data,setActiveElement,activeElement})=>{
   const [show, setShow] = useState(false);

  const handleClick = () => {
   
      setActiveElement();
      setShow(!show);
    
  };

  console.log(activeElement,show)

    return (
        <>
            <div>
                <div className="w-6/12  bg-gray-100 shadow-lg mx-auto my-4 justify-between">
                    <div className="flex justify-between font-bold cursor-pointer" onClick={handleClick}>
                        <span className="p-2">{data.title} ({data?.itemCards?.length})</span>                       
                        <span>🔻</span> 
                    </div>
                    {(activeElement && show) && (
                    <div className="justify-start">
                        <ItemList Item={data.itemCards}></ItemList>
                    </div>
                    )
                    }                                       
                </div>
            </div>
        </>
    )

}

export default RestroCategories;
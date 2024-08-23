import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { ImgPath } from "../utils/constants";

const ItemList = ({Item})=>{

    const dispatch= useDispatch();

    const handleClick = (item)=>{
        dispatch(addItem(item))
    }
    return (
        <div>
            {Item.map(item => {               
                return (
                    <div className="flex  border border-b-2 text-left p-2" key={item?.card?.info?.id}>
                        
                        <div className="flex-col w-11/12">
                            <div>
                                <span className="font-medium font-serif">
                                    {item?.card?.info?.name}
                                </span>
                                <br/>
                                <span className="text-sm">
                                ₹ {item?.card?.info?.price/100}
                                </span> 
                            </div>
                             <br/>
                            <p className="text-xs text-gray-600 font-serif" >{item?.card?.info?.description}</p>
                        </div>
                        <div className="flex-col w-4/12 rounded-lg">
                            <img src={ ImgPath + item?.card?.info?.imageId }/>
                            <button className="p-2 m-2 bg-black text-white rounded-lg font-mono align-baseline" onClick={()=>handleClick(item)}>Add +</button>
                        </div>   
                        
                    </div>
                )
            })}
    </div>

    )

}

export default ItemList;
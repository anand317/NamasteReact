import { ImgPath } from "../utils/constants";
const RestrCard = ({restData}) =>{

    const {cloudinaryImageId,name,cuisines,avgRating} = restData?.info;
    const {deliveryTime} = restData?.info?.sla;

    return(
        <div className='retro-card m-4 p-4 w-[250px] bg-pink-100 rounded-md hover:bg-pink-300'>
            <img className='img rounded-sm' src={ImgPath+cloudinaryImageId}></img>
            <h3 className='restr-name'>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>          
        </div>
    )
 }

 export const WithLabelRestroCard = (RestrCard) =>{

    
    return (props) =>{

       
        return(
        <div>
            <label className="absolute bg-black text-white rounded-sm">Promoted</label>
            <RestrCard restData={props.restData}/>
        </div>)
        
    }
 }

 export default RestrCard;
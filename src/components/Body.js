

import RestrCard,{WithLabelRestroCard} from './RestroCard';
import { resList } from '../utils/constants';
import { useEffect, useState } from 'react';
import { RestroLink } from '../utils/constants';
import ShimmerUI from './ShimmerUI';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () =>{ 

    const [resData,setResData]= useState([]);
    const [inputText, setInputText]= useState('');
    const [copyResData, setCopyResData]=useState([]);

    const {onlineStatus}=useOnlineStatus();

    const WithLabelRestroCardTag= WithLabelRestroCard(RestrCard);

    console.log("online status",copyResData)
    

    useEffect(()=>{
        fetchData();
    },[inputText])
    
    const fetchData = async () =>{
        const json=await fetch(RestroLink);
        const data=await json.json();
        const resData=data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResData(resData);
        setCopyResData(resData);
    }
    const handleClicked = () =>{
        const data=resList.filter((res)=>res.info.avgRating>4.4)
        setCopyResData(data);
        
    }   
    
    if(onlineStatus===false) return <h1>You are offline.</h1>

    console.log('page rendered')
    return resData?.length===0 ? <ShimmerUI/> :    
    (
        <div className='body'>
            <div className='search m-4 p-4'>
                <input className='border border-solid border-black rounded-md' value={inputText} onChange={(e)=>{setInputText(e.target.value)}}></input>
                <button className='search-button p-1 m-2 bg-pink-100 shadow-md rounded-lg' onClick={()=>{
                    const data=resData.filter((res)=> res.info?.name?.toLowerCase().includes(inputText.toLowerCase()))             
                    setCopyResData(data);
                }
                    
                }>Search</button>
                <button className='search-button p-1 m-2 bg-pink-100 shadow-md rounded-lg' onClick={handleClicked}>Top Rated Restrorents</button>
            </div>
            <div className='restro-container flex flex-wrap'>
                {copyResData?.map((rest)=>       
                    <Link to={"/restrorent/" + rest.info.id}  key={rest.info.id}>
                        {rest.info.isOpen ? (<WithLabelRestroCardTag restData={rest}/>) :  (<RestrCard  restData={rest}/>) }                      
                    </Link>)}               
            </div>
        </div>
    )
 }

 export default Body;
import { useEffect,useState } from "react"

import {ResDetails} from "./constants"

const useRestrorentData=(resId)=>{

    const [restDetails,setRestDetails] =useState(null);

    useEffect(()=>{
        fetchMenu()
        
    },[])

    const fetchMenu = async () =>{
        const resDetails=await fetch(ResDetails+ resId +"")

        const json=await resDetails.json();
        setRestDetails(json)
        //console.log("jsn",json)
    }

    return restDetails;
}

export default useRestrorentData;
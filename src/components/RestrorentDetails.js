import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestrorentData from "../utils/useRestrorentData";
import RestroCategories from "./RestroCategories";

const RestrorentDetails = () => {
  const { resId } = useParams();

  const [activeElement,setActiveElement]=useState();

  const restDetails = useRestrorentData(resId);

  //console.log("restDetails",restDetails)

  if (restDetails === null) return <ShimmerUI />;
  const { name, cuisines, costForTwoMessage } =
    restDetails?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    restDetails?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <p className="font-serif text-gray-500">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - Rs{" "}
            {res.card.info.price / 100 || res.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
      {categories.map((c,index)=><RestroCategories key={index} data={c.card?.card} setActiveElement={()=> setActiveElement(index)} activeElement={index===activeElement ? true:false}/>)}
      
    </div>
  );
};

export default RestrorentDetails;

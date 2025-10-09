import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";


const useRestaurantMenu = (resID) => {
   const [resInfo,setResInfo] = useState(null);

   useEffect(() => {
    fetchData();
   },[]);

   const fetchData = async () => {

    const data = await fetch( API_URL +resID);
    const json = await data.json();
    setResInfo(json.data);
   };
   
    return resInfo;

};
export default useRestaurantMenu;
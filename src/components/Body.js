import Resrurcard from "./Resrurcard";
import { useState, useEffect, useContext } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const[filteredRestaurant, setFilteredRestaurent] = useState([])
  const [searchText, setSearchText] = useState("");
  


 
  // const listOfRes = arr[0];
  // const setlistOfRes = arr[1];

  // let listOfRes = [
  //   {
  //     data: {
  //       id: "121603",
  //       name: "Kannur Food Point",
  //       city: "1",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Kerala", "Chinese"],
  //       deliveryTime: 24,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121604",
  //       name: "Meghana Foods",
  //       city: "1",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Biryani", "North Indian"],
  //       deliveryTime: 30,
  //       avgRating: "4.5",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "121605",
  //       name: "MCD Foods",
  //       city: "1",
  //       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
  //       cuisines: ["Biryani", "North Indian"],
  //       deliveryTime: 30,
  //       avgRating: "4.5",
  //     },
  //   },
  // ];
  console.log("body render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.75217709999999&lng=76.6434122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const newData =
      json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants;
    console.log(newData);

    setlistOfRes(newData);
    setFilteredRestaurent(newData)
    // console.log(newData);
  };

  // if(listOfRes.length ==0) {
  //     return <Shimmer/>;
  // };
 const onlineStatus = useOnlineStatus();
  if( onlineStatus === false)
    return(
        <h1>
           hey! looks like you're offline !!! Please check your internet connection; 
        </h1>
  );

  const {logedInUser, setUserName } = useContext(UserContext);

  return listOfRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Filter flex">
        <div className="search m-4 p-4 rounded-lg">
          <input
            type="text"
            data-testid= "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRes.filter((res) =>
               res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurent(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
         <div className="search m-4 p-4 flex items-center ">
         <button className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRes(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center ">
        <label>Username:  </label>
        <input className="border border-black p-2" 
        value={logedInUser}
        onChange={(e) => setUserName(e.target.value)}/>
      </div>
     
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}>

              
            <Resrurcard resData={restaurant} />
           </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;

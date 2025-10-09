import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Resrurcard = (props) => {
  const { resData } = props;

  // console.log(resData);
  const { logedInUser }= useContext(UserContext);
  // console.log("resData", resData);

  // safely extract info object
  const info = resData?.info;

  if (!info) {
    return <div>No restaurant data available</div>; // fallback UI
  }

  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla,
  } = info;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt={name} />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>
        {typeof costForTwo === "number"
          ? `₹${costForTwo / 100}`
          : costForTwo || "N/A"}
      </h4>
      <h5>{sla?.deliveryTime} min</h5>
      <h5>{logedInUser} user</h5>
    </div>
  );
};

// export const withPromotedLabel = (Resrurcard) => {
//   return () => {
//     return (
//       <div>
//         <label>Prometed</label>
//         <Resrurcard {...props}/>
//       </div>
//     )
//   }
// };

export default Resrurcard;

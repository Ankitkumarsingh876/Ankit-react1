import React, {  lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [
//       React.createElement("div", { key: 1, className: "item" }, "hi i am ankit kumar singh"),
//       React.createElement("div", { key: 2, className: "item" }, "hi I am 2 tag"),
//     ]
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     [
//       React.createElement("div", { key: 3, className: "item" }, "hi I ajgsjfsjfsjffjjgljgsgnksdfngkg tag"),
//       React.createElement("div", { key: 4, className: "item" }, "hi I sdglkhdskghsklghshgkldfgjsdfgjklam h1 tag"),
//     ]
//   )
// );\

const Applayout = () => {
  const[userName, setUserName] = useState(null);


  useEffect(() => {
    
     const data = {
     name: "akshay saini"
    };

    setUserName(data.name);


  },[])



  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ logedInUser: userName , setUserName}}>
    <div className="App">
      {/* <UserContext.Provider value={{ logedInUser: "elon musk"}}> */}
      <Header/>
      {/* </UserContext.Provider> */}
      <Outlet/>
    </div>
  </UserContext.Provider>
  </Provider>
  );
};

// console.log(Applayout);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
     children: [
  {
    path: "/",
    element: <Body/>,
    
  },
  {
    path: "/about",
    element: <About/>,
    
  },
  {
    path: "/grocery",
    element: (
          <Suspense fallback={<h1>Loading........</h1>}>
           <Grocery/>
          </Suspense>
          )
  },
  
  {
    path: "/contact",
    element: <Contact/>
  },
   {
    path: "/restaurants/:resID",
    element: <RestaurantMenu/>
  },
  {
    path: "/cart", 
    element: <Cart/>,
  },
   
    ],
    errorElement: <Error/>,

  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

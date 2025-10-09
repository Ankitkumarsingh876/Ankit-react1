import { fireEvent, render,screen } from "@testing-library/react"

import Body from "../Body";
import MOCK_DATA from "./mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
     return  Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
     });
});



it("should render body component with search or not", async() => {
    await act (async () => 
    render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>
    )
   );
    

   const cardsBeforeSearch = screen.getAllByTestId("resCard");

   expect(cardsBeforeSearch.length).toBe(8);

   const searchBtn = screen.getByRole("button", {name: "search"});

   const searchInput = screen.getByTestId("searchInput");

   // console.log(searchBtn);
  
   fireEvent.change(searchInput, {target: {value: "pizza"}})
   fireEvent.click(searchBtn);

   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(2);
});

it("should render body component with search or not", async() => {
    await act (async () => 
    render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>
    )
   );
    

   const cardsBeforeFilter = screen.getAllByTestId("resCard");

   expect(cardsBeforeFilter.length).toBe(8);

   const topRatedBtn = screen.getByRole("button", {name: "Top rated restaurant"});

   // const searchInput = screen.getByTestId("searchInput");

   // console.log(searchBtn);
  
   // fireEvent.change(searchInput, {target: {value: "pizza"}})
   fireEvent.click(topRatedBtn);

   const cardsAfterFilter = screen.getAllByTestId("resCard");
   expect(cardsAfterFilter.length).toBe(8);
});
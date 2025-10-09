import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

import { act } from "react";
import MOCK_DATA_NAME from "./mocks/mockResMenu.json";
import { Provider } from "react-redux";
import Header from "./../Header"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('Recommended (20)');

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button" , {name: "Add +"});
  fireEvent.click(addBtns(0));

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns(1));

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);
  
  fireEvent.click(screen.getAllByRole("button" , {name: "clear cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("cart is empty. Add items to the cart!!")).toBeInTheDocument();
  
});

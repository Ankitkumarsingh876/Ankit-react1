import { render, screen } from "@testing-library/react"
import Resrurcard from "../Resrurcard"
import MOCK_DATA from "./mocks/resCardMock.json";
import "@testing-library/jest-dom"




it("should be resrurcard component props",() => {
   render(<Resrurcard  resData={MOCK_DATA}/>)

   const name = screen.getByText("Domino's Pizza");

   expect(name).toBeInTheDocument();
});
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("this is a contact us page test cases", () => {
  
  beforeAll(() =>{
    console.log("Before All");
  });

  beforeEach(() =>{
    console.log("Before Each");
  });

  afterAll(() =>{
    console.log("After All");
  });

  afterEach(() =>{
    console.log("After Each");
  });



  test("should load contact-us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load contact-us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load contact-us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});

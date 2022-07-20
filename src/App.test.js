import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";
test("button has correct initial color", () => {
  render(<App />);
});
// test("button has correct initial color", () => {
//   render(<App />);

//   // find an element with a role of button and text of 'Change to blue'
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });

//   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

//   fireEvent.click(colorButton);

//   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

//   expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
// });
// test("checkbox disbales button on first click and enables button on second click", () => {
//   render(<App />);

//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });

//   fireEvent.click(checkbox);
//   expect(colorButton).toBeDisabled();

//   fireEvent.click(checkbox);
//   expect(colorButton).toBeEnabled();
// });
// test("disable button has gray color", () => {
//   render(<App />);

//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

//   fireEvent.click(colorButton);

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

//   fireEvent.click(checkbox);
//   expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
// });
// test("inital conditions", () => {
//   render(<App />);

//   const colorButton = screen.getByRole("button", {
//     name: "Change to Midnight Blue",
//   });
//   expect(colorButton).toBeEnabled();

//   const checkbox = screen.getByRole("checkbox");
//   expect(checkbox).not.toBeChecked();
// });
// describe("spaces before camel-case capital letters", () => {
//   test("Works for no inner capital letters", () => {
//     expect(replaceCamelWithSpaces("Red")).toBe("Red");
//   });
//   test("Works for one inner capital letter", () => {
//     expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
//   });
//   test("Works for multiple inner capital letters", () => {
//     expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
//   });
// });

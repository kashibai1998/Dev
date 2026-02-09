import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("counter", () => {
  test("initail count", () => {
    render(<Counter />);

    const counter = screen.getByTestId("counter");

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(0);
  });

  test("inc click", () => {
    render(<Counter />);

    const incBtn = screen.getByTestId("inc");
    const decBtn = screen.getByTestId("dec");
    const counter = screen.getByTestId("counter");
    fireEvent.click(incBtn);
  
    expect(counter).toHaveTextContent(1);
    fireEvent.click(decBtn);
    expect(counter).toHaveTextContent(0);

  });
});

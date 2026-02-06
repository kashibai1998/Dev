import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders text", () => {
    render(<App />);

    expect(screen.getByText(/React/i)).toBeInTheDocument();
  });
});

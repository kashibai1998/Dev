import { render, screen } from "@testing-library/react";
import Todo from "../components/Todo";

describe("test todo comp", () => {
  test("load 5 tasks", () => {
    render(<Todo />);
    const todos = screen.getAllByText(/Task/);
    console.log(todos.length);
  });
});

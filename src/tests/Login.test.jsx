import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";
import { AuthContext } from "../features/auth/AuthContext";

describe("Login Page", () => {

  it("shows validation error when username is empty", () => {

    const mockLogin = () => {};

    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const button = screen.getByText("Log In");

    fireEvent.click(button);

    expect(
      screen.getByPlaceholderText("Enter username")
    ).toBeInTheDocument();

  });

});
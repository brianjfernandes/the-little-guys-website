import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(
      screen.getByText("Big Results from The Little Guys")
    ).toBeDefined();
  });

  it("displays the phone number", () => {
    render(<Home />);
    const phoneLinks = screen.getAllByText("(619) 559-7499");
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("shows all four service cards", () => {
    render(<Home />);
    expect(screen.getByText("Cars")).toBeDefined();
    expect(screen.getByText("Windows")).toBeDefined();
    expect(screen.getByText("Trash Bins")).toBeDefined();
    expect(screen.getByText("And More!")).toBeDefined();
  });
});

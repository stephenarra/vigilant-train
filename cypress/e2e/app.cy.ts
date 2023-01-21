describe("Home", () => {
  it("should have home page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h1").contains("Hello world!");
  });
});

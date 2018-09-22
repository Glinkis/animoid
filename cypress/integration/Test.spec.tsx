describe("App component", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("has a title", () => {
    cy.get("h1").should("contain", "animoid")
  })
})

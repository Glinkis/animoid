describe("App component", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("has a title", () => {
    cy.get("[data-cy=title]").should("contain", "animoid")
  })
})

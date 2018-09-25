describe("App component", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.viewport(720, 480)
  })

  it("has a title", () => {
    cy.get("[data-cy=title]").should("exist")
  })
})

describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button').contains(/^Login$/i).should('be.visible');
  });

  it('should login successfully', () => {
    cy.get('input[type="email"]').type('abidzar037@dicoding.com');
    cy.get('input[type="password"]').type('password123');

    cy.get('button').contains(/^Login$/i).click();

    cy.get('input[type="email"]').should('not.exist');
  });
});
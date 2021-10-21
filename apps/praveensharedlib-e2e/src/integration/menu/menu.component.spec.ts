describe('praveensharedlib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=menucomponent--primary&args=menus;'));
  it('should render the component', () => {
    cy.get('nxpoc-menu').should('exist');
  });
});
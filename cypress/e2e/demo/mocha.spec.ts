describe('Mocha', () => {
  describe('Hooks', () => {
    // before(() => {
    //   console.log('Before All');
    // });
    // beforeEach(() => {
    //   console.log('Before Each');
    // });
    // afterEach(() => {
    //   console.log('After Each');
    // });
    // after(() => {
    //   console.log('After All');
    // });
    it('calculate 1+1 correcyly', () => {
      console.log('1+1');
      expect(1 + 1).to.eq(2);
    });

    it('calculate 1+2 correcyly', () => {
      console.log('1+2');
      expect(1 + 2).to.eq(3);
    });
  });
});

describe('Assertions', () => {
  it('handle assersion correctly', () => {
    expect(1 + 1).to.eq(2);
    expect('hello').to.be.a('string');
    expect([1, 2]).to.be.an('array');
    expect('hello').to.include('hell');
    expect({ name: 'Somchai' }).to.have.property('name');
    expect({ age: 24 }).to.deep.eq({ age: 24 });
    expect([]).to.be.empty;
    expect([1, 2, 3]).to.have.lengthOf(3);

    cy.wrap(1 + 1).should('eq', 2);
    cy.wrap('hello').should('be.a', 'string');
    cy.wrap({ name: 'Somchai' }).should('have.property', 'name');
    cy.wrap([]).should('be.empty');
  });
});

describe('jQuery Selector', () => {
  it('select element correctly', () => {
    cy.visit('http://127.0.0.1:3000/cypress/selectors');
    cy.get('#outlined').should('contain', 'Outlined Button (#outlined)');
    cy.get('.MuiButton-label').should(
      'contain',
      'Contained Button (.MuiButton-containedPrimary)',
    );
    cy.get('button[type="submit"]').should(
      'contain',
      'Contained Button2 (button[type="submit"])',
    );
    cy.get('.text-group p:first-child').should(
      'contain',
      'H4 (.text-group:first-child)',
    );
    cy.get('.text-group p:nth-child(2)').should(
      'contain',
      'Body (.text-group:nth-child(2))',
    );
    cy.get('[data-testid="subtitle"]').should(
      'contain',
      'Subtitle ([data-testid="subtitle"])',
    );
    cy.get('.text-group p:last-child').should('contain', 'Caption');
  });
});

describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });
  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger("input");
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });
  it('audio element changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger("input");
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume',0.33);
    });
  });
  it('Image and sound changes when select party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src','./assets/media/audio/party-horn.mp3');
    });
  });
  it('volume image changes when increasing volums', ()=> {
    cy.get('#volume-number').clear().type(70);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg');
    });
    cy.get('#volume-number').clear().type(40);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-number').clear().type(15);
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg');
    });
  });
  it('honk button disabled when input is empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number').clear().type('&^*');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });
  it('error shown when number input is out of range', () => {
    cy.get('#volume-number').clear().type(152);
    cy.get('input:invalid').then($el => {
      expect($el).to.have.value(152);
    });
  });
});

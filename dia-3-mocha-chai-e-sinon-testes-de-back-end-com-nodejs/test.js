const {expect} = require('chai');

const func = require('./functions');

describe('teste dos testes', () => {
  console.log(func(0));
  it('deve retornar true', () => {
    const response = func(0)

    expect(response).equals('positivo');
  })
});

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  module.exports = sum;

  // console.log(sum(1,"5"))


  function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  // module.exports = myRemove;

  // implemente seus testes aqui

  describe('requisito 2.1', () =>{
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado'), () =>{
        expect([1, 2, 3, 4], 3).toEqual(newArr[1,2,4]);

    }
})
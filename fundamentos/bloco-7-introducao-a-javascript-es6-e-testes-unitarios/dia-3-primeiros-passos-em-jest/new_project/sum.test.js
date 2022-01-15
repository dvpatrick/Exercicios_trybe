// const sum = require('./sum');

// describe('Requisito 1', () =>{
//     it('Teste se o retorno de sum(4, 5) é 9', () =>{
//         expect(9).toEqual(sum(4,5));

//     });
// });


// describe('Requisito 2', () =>{
//     it('Teste se o retorno de sum(0, 0) é 0', () =>{
//         expect(0).toEqual(sum(0,0));

//     });
// });

// describe('Requisito 3', () =>{
//     it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () =>{
//         expect(() => sum(4,'5')).toThrow();

//     });
// });

// describe('Requisito 3', () =>{
//     it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () =>{
//         expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'));

//     });
// });

// const myRemove = require('./sum');

// describe('requisito 2.1', () =>{
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado'), () =>{
//         expect([1, 2, 3, 4], 3).toEqual(newArr[1,2,4]);

//     }
// })


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
        expect(myRemove([1, 2, 3, 4], 3)).toEqual(newArr[1,2,4]);

    }
})
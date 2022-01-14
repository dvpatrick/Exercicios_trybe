const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    // console.log(`Ola ${order.address.street}`)
    console.log(`ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name} telefone: ${order.phoneNumber}, R.${Object.values(order.address)}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Ola ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)}e ${order.order.drinks.coke.type} e ${order.payment.total}`)
  
  }
  
  orderModifier(order);












// const value1 = document.getElementById('value1');
// const value2 = document.getElementById('value2');

// function validation(){
//     if(value1.value =='' || value2.value==''){ 
//         document.getElementById('result').innerHTML = 'Preencha os dois valores';
//         // document.getElementById('value1').value = '';
//         // document.getElementById('value2').value = '';
//         throw new Error('Preencha os dois valores')
//     }
// } 

// function validationNan(){
//     if( isNaN(value1.value) == true ||  isNaN(value2.value) == true){
//         document.getElementById('result').innerHTML = 'O valor deve ser numerico!';
//         // document.getElementById('value1').value = '';
//         // document.getElementById('value2').value = '';
//         throw new Error('O valor deve ser numerico!!')

//     }

// }

// function sum() {
//     try{
//         validation();
//         validationNan();
//         const result = parseInt(value1.value) + parseInt(value2.value);
//         document.getElementById('result').innerHTML = `Resultado: ${result}`;

//     } 
//       catch (error) {
//             throw error.message;
//         } finally{
//             document.getElementById('value1').value = '';
//             document.getElementById('value2').value = '';
//         }
// }


// window.onload = () => {
//     const button = document.getElementById('button');
//     button.addEventListener('click', sum);
//   }
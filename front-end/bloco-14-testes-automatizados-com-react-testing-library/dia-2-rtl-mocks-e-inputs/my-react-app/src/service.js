import React, { Component } from 'react'

export default class service extends Component {
  render() {
    const returnNumber = () => {
      const numberAleatory = Math.random() * 100;
      return numberAleatory;
    }
    return (
      <div>
        service
        <button onClick={this.returnNumber()}></button>
        </div>
    )
  }
}


// const returnNumber = () => {
//   const numberAleatory = Math.random() * 100;
//   return numberAleatory;
// }

// console.log(returnNumber());

// // const numberAleatory = Math.random() * 100;
// // console.log(numberAleatory);
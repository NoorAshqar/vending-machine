import React from 'react';
import './snackslot.css'
import Keypad from './keypad.js'
class Snackslot extends React.Component {
  render(){
  return (
    <div className="machine">
      <h2 className="log">{this.props.log} </h2>
      <div className="snack-container">
     {this.props.snacks.map(({name,prize,img},i)=>{
       return (
         <div className="snack">
          <h3 className="snack-icon">{i+1}</h3>
          <h3 className="snack-name">{name}</h3>
          <img className="snack-img" alt="" src={img}></img>
          <h2 className="snack-prize">${prize}</h2>
        </div>
       )
      })}
      <h2>current monney ${this.props.cash}</h2>
    </div>
    </div>
  );
}
}

export default Snackslot;
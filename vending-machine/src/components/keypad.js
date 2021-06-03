import React from 'react';
import './keypad.css'
class Keypad extends React.Component {
render(){

  return (
    <div className="thepad">
     <div className="head-k">
       <h2>{this.props.keynum}</h2>
     </div>
     <div className="row1-k">
      <button  onClick={()=>{this.props.addnumber(1)}}>1</button>
      <button  onClick={()=>{this.props.addnumber(2)}}>2</button>
      <button  onClick={()=>{this.props.addnumber(3)}}>3</button>
     </div>
     <div className="row2-k">
      <button  onClick={()=>{this.props.addnumber(4)}}>4</button>
      <button  onClick={()=>{this.props.addnumber(5)}}>5</button>
      <button  onClick={()=>{this.props.addnumber(6)}}>6</button>
     </div>
     <div className="row3-k">
      <button  onClick={()=>{this.props.addnumber(7)}}>7</button>
      <button  onClick={()=>{this.props.addnumber(8)}}>8</button>
      <button  onClick={()=>{this.props.addnumber(9)}}>9</button>
     </div>
     <div className="row4-k">
      <button onClick={this.props.deletenumber}>back</button>
      <button onClick={()=>{this.props.addnumber(0)}}>0</button>
      <button onClick={this.props.submitnum}>submit</button>
     </div>
    </div>
  );
}
}

export default Keypad;
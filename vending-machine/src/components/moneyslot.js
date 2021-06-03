import React from 'react';
import './moneyslot.css'
class Moneyslot extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        cardinput:0
    }
}
onchange=(e)=>{
    this.setState({
        cardinput:e.target.value
    })
}
reset=()=>{
    document.getElementsByClassName("input-dollars")[0].value=""
    this.setState({
        cardinput:0
    })
}
render(){

  return (
    <div className="money-slot">
        <div className="money-coins">
        <img src='https://cdn0.iconfinder.com/data/icons/dollars-cents-colored/48/JD-07-512.png' onClick={()=>{this.props.addcash(0.10)}} className="ten-cents"></img>
        <img src='https://www.pnglib.com/wp-content/uploads/2020/08/coin-20-euro-cent-clipart_5f45601c49d44.png' onClick={()=>{this.props.addcash(0.20)}} className="twenty-cents"></img>
        <img src='https://cdn4.iconfinder.com/data/icons/dollars-cents-flat/48/Dollars___Cents-12-512.png' onClick={()=>{this.props.addcash(0.50)}} className="fifty-cents"></img>
        <img src='http://assets.stickpng.com/thumbs/5984a3bd4ca2e7219dcbe4a4.png' onClick={()=>{this.props.addcash(1)}} className="one-dollar"></img>
        </div>
        <div className="money-dollars">
        <img src='https://sheeats.files.wordpress.com/2010/10/twentydollarbill.jpg' onClick={()=>{this.props.addcash(20)}} className="twenty-dollars"></img>
        <img src='https://i.pinimg.com/originals/da/58/f9/da58f9fba60afd543bc813061c1fe574.png' onClick={()=>{this.props.addcash(50)}} className="fifty-dollars"></img>
        </div>
        <div className="money-card">
        <input type="number" onChange={this.onchange} className="input-dollars"></input>
        <button onClick={()=>{this.props.addcash(this.state.cardinput);this.reset()}} className="card-submit">Submit cash</button>
        </div>
    </div>
  );
}
}

export default Moneyslot;
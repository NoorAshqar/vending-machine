import React from 'react';
import Snackslot from './components/snackslot.js';
import Keypad from './components/keypad.js';
import Moneyslot from './components/moneyslot.js'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        keynum:0,
        log:"",
        cash:0,
        snacks:[
          {name:"lolipop",amount:5,prize:1,img:"https://images-na.ssl-images-amazon.com/images/I/7124mdgplgL._SL1500_.jpg"},{name:"lays",amount:3,prize:1,img:"https://images.albertsons-media.com/is/image/ABS/960123883?$ecom-pdp-desktop$&defaultImage=Not_Available"},{name:"snickers",amount:3,prize:2,img:"https://u5j4h3u7.stackpathcdn.com/pub/media/catalog/product/cache/172d96e30d7cd3d4380b53391edef300/5/2/52123_a.jpg"},{name:"doritos",amount:1,prize:1,img:"https://cdn.shopify.com/s/files/1/0036/4806/1509/products/bd0e2d19e0ed082568f03ed2088499d31aff2f34_square2809062_1.jpg?v=1601860201"},{name:"doritos2",amount:1,prize:1,img:"https://cdn.shopify.com/s/files/1/0036/4806/1509/products/bd0e2d19e0ed082568f03ed2088499d31aff2f34_square2809062_1.jpg?v=1601860201"},
          {name:"m&ms",amount:2,prize:12,img:"https://cdn-tp4.mozu.com/26445-41141/cms/41141/files/61884b44-bb31-429c-a472-e85ac8d42364?maxWidth=541&_mzcb=_1620677045220"},{name:"shweps",amount:3,prize:1,img:"https://mediacore.kyuubi.it/anticaenotecagiulianelli/media/img/2020/8/29/167146-large-schweppes-lemon-dry-100cl-x-6pz-pet.jpg"},{name:"snack1",amount:2,prize:1,img:""},{name:"snack1",amount:3,prize:2,img:""},{name:"snack1",amount:3,prize:2,img:""},
          {name:"drumstick",amount:3,prize:13,img:"https://images-na.ssl-images-amazon.com/images/I/61rexzI64eL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"},{name:"snack1",amount:2,prize:1,img:""},{name:"snack1",amount:3,prize:1,img:""},{name:"snack1",amount:4,prize:4,img:""},{name:"snack1",amount:4,prize:3,img:""},
          {name:"flint",amount:0,prize:4,img:"https://images.ua.prom.st/1689482949_w640_h640_suhariki-pshenichno-rzhanye-krab.jpg"},{name:"snack1",amount:1,prize:1,img:""},{name:"snack1",amount:4,prize:1,img:""},{name:"snack1",amount:5,prize:6,img:""},{name:"snack1",amount:1,prize:4,img:""},
          {name:"pringles",amount:2,prize:56,img:"https://cdn.shopify.com/s/files/1/0102/3950/8531/products/31557_pringles_original_potato_chips_2.36_oz._1_800x.jpg?v=1576013604"},{name:"snack1",amount:4,prize:1,img:""},{name:"snack1",amount:5,prize:1,img:""},{name:"snack1",amount:6,prize:2,img:""},{name:"snack1",amount:1,prize:4,img:""},
        ]
    }
}
 addnumber = (e)=>{
   if(this.state.keynum>10)return
   this.setState({
     keynum:(this.state.keynum*10)+e
    })
  }
deletenumber = ()=>{
  this.setState({
    keynum:Math.floor((this.state.keynum)/10)
  })
}
submitnum=()=>{
  if(!this.state.keynum){
    this.setState({
      log:"please select your item"
    }
    )
    return
  }
  if(this.state.keynum>25){
    this.setState({
      log:"invalid number",
      keynum:0,
    }
    )
    return
  }
  if(this.state.snacks[this.state.keynum-1].amount===0){
    this.setState({
      log:"your item is out of stock,Please select another"
    }
    )
    return
  }
  if(this.state.snacks[this.state.keynum-1].prize>this.state.cash){
    this.setState({
      log:"not enouph money"
    }
    )
    return
  }
  let fifties = Math.floor(this.state.cash / 50)
  let twenties = Math.floor((this.state.cash % 50) / 20)
  let ones = Math.floor((this.state.cash % 50) % 20)
  let fiftyCents = Math.floor((this.state.cash % 1 * 100) / 50)
  let twentyCents = Math.floor(((this.state.cash % 1 * 100) % 50) / 20)
  let tenCents = Math.floor((((this.state.cash % 1 * 100) % 50) % 20) / 10)
  let newarr = this.state.snacks
  newarr[this.state.keynum-1].amount--
  this.setState({
    log:`the machine returns ${fifties} $50, ${twenties} $20, ${ones} $1, ${fiftyCents} 50c, ${twentyCents} 20c, ${tenCents} 10c`,
    keynum:0,
    cash:0,
    snacks:newarr
  })
}

addcash=(e)=>{
  this.setState({
    cash:this.state.cash+parseFloat(e)
  })
}
  render(){
  return (
    <div className="App">
      <Snackslot snacks={this.state.snacks} log={this.state.log} cash={this.state.cash}></Snackslot>
     <Keypad addnumber={this.addnumber} deletenumber={this.deletenumber} submitnum={this.submitnum} keynum={this.state.keynum}></Keypad>
     <Moneyslot addcash={this.addcash}></Moneyslot>
    </div>
  );
}
}

export default App;

import React, { Component, createContext } from "react";

export const OrderContext = createContext(true);

class OrderContextProvider extends Component {
  state = {
      prod: [],
      cost:0
  };

  purchasedProd = (array) =>{
      //console.log("Inside Function: ",array);
      array = array.filter(ar => ar.count!==0);
      //console.log("Filtered Array: ",array);
      this.setState({ prod:array });
  }

  costCal = () =>{
     let { prod } = this.state;
     console.log("Cost Calculator called!");
     let cost= prod.reduce((acc,arr)=>{ return acc = acc + (arr.price*arr.count) },0);
     cost = parseFloat((cost).toFixed(2));
     this.setState({cost});
  }
  
  render() {
    return (
      <OrderContext.Provider value={{...this.state, purchasedProd: this.purchasedProd, costCal: this.costCal }}>
          {this.props.children}
      </OrderContext.Provider>
    );
  }
}

export default OrderContextProvider;

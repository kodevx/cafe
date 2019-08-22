import React, { Component, createContext } from "react";

export const ProductContext = createContext(true);

class ProductContextProvider extends Component {
  state = {
    array: [{ id: 1, cfName: "A M E R I C A N O", price: 2.01, count: 0 },
    { id: 2, cfName: "L A T T E", price: 3.01, count: 0 },
    { id: 3, cfName: "C A P P A C C U N O", price: 5.01, count: 0 },
    { id: 4, cfName: "E S P R E S S O", price: 2.71, count: 0 },
    { id: 5, cfName: "M O C H A", price: 2.50, count: 0 },
    {
      id: 6,
      cfName: "B R A Z I L I A N  C O F F E E  B E A N S",
      price: 80,
      count: 0
    },
    {
      id: 7,
      cfName: "T C H I B O  C O F F E E  B E A N S",
      price: 70,
      count: 0
    }]
  };
  
  
  incCount = (id) =>{
     
     let array = [...this.state.array];
     
     let i = array.findIndex(arr => arr.id===id);
     let cnt = array[i].count+1;
     
     array[i] = {...array[i],count:cnt}
     this.setState({ array:array });
     
  }

  decCount = (id) =>{
    let array = [...this.state.array];
     
    let i = array.findIndex(arr => arr.id===id);
    
    let cnt = array[i].count;
    if(cnt>0){
        cnt--;
        array[i] = {...array[i],count: cnt}
        this.setState({ array:array });
    }
  }
  
  render() {
    return (
      <ProductContext.Provider value={{...this.state, incCount: this.incCount, decCount: this.decCount}}>
          { this.props.children }
      </ProductContext.Provider>
    );
  }
}

export default ProductContextProvider;

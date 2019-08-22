import React, { useContext } from 'react';


import { OrderContext } from "../../contexts/OrderContext" 

const Count = () => {
    
    
    let { cost,prod } = useContext(OrderContext);
    console.log("cost : ",cost);
    
    let costOutput = () =>{
      let c = parseFloat(prod.reduce((acc,arr)=>{ return acc = acc + (arr.price*arr.count) },0)).toFixed(2);
      let d = c>0?<React.Fragment>
        <div className="prd-blk">
        { prod.map(arr =>{ return( <div className="prd" key={arr.id}> {arr.cfName} x {arr.count} <span className="price">${ parseFloat((arr.price*arr.count).toFixed(2)) } </span> </div>) }) }
        </div>
       <div className="cst-blk"> <span className="cst-txt"> T O T A L C O S T </span> <span className="cst-num">${ parseFloat(prod.reduce((acc,arr)=>{ return acc = acc + (arr.price*arr.count) },0)).toFixed(2) }</span> </div>
       </React.Fragment>:<div>No purchased made.</div>;
      console.log(d);
    }
    
    let prodList = () =>{
    return(<React.Fragment>
        <div className="prd-blk">
        { prod.map(arr =>{ return( <div className="prd" key={arr.id}> {arr.cfName} x {arr.count} <span className="price">${ parseFloat((arr.price*arr.count).toFixed(2)) } </span> </div>) }) }
        </div>
       <div className="cst-blk"> <span className="cst-txt"> T O T A L C O S T </span> <span className="cst-num">${ parseFloat(prod.reduce((acc,arr)=>{ return acc = acc + (arr.price*arr.count) },0)).toFixed(2) }</span> </div>
       </React.Fragment>);
    }
        

    return ( 
        {costOutput}
    );
}
 
export default Count;
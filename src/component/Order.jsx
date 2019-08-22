import React,{ useContext } from 'react';
import Nav from './Nav';
import { OrderContext } from '../contexts/OrderContext';
import './styles.css';

const Order = (props) => {
    
    let { prod, cost, costCal} = useContext(OrderContext);
    console.log("Products Array: ",prod);
    console.log("Total Cost: ",cost);

    return( 
        <React.Fragment>
            <Nav title={"O R D E R - C O N F I R M A T I O N"}/>
            <div className="odr-text"> O R D E R S </div> 
            <div className="prd-blk">
              { prod.map(arr =>{ return( <div className="prd" key={arr.id}> {arr.cfName} x {arr.count} <span className="price">${ parseFloat((arr.price*arr.count).toFixed(2)) } </span> </div>) }) }
            </div>
            <div className="cst-blk"> <span className="cst-txt"> T O T A L C O S T </span> <span className="cst-num">${ parseFloat(prod.reduce((acc,arr)=>{ return acc = acc + (arr.price*arr.count) },0)).toFixed(2) }</span> </div>
            <button onClick={()=>{ props.nextStep(6); costCal(); }} className="chk-btn"> C H E C K - O U T </button>
         </React.Fragment>
    );
}
 
export default Order;
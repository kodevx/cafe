import React,{ useContext } from 'react';
import Nav from './Nav';
import { OrderContext } from '../contexts/OrderContext';

const Confirm = (props) => {
    let { prod,cost } = useContext(OrderContext);
    console.log("Products Array: ",prod);
    console.log("Total Cost: ",cost);
    
    return ( 
        <React.Fragment>
          <Nav title={"O R D E R - C O N F I R M E D"}/>
          <div className="cfm-text">O R D E R - C O N F I R M E D !</div>
          <div className="cfm-name">H E L L O { props.name } , </div>
          <div className="cfm-name">Your order below has been confirmed and will be delivered to you soon.</div>
          <div className="cfm-blk">
            <div className="cfm-txt">P U R C H A S E D - P R O D U C T S</div>
                <div className="cfm-prd"> { prod.map(arr =>{ return( <div key={arr.id}> {arr.cfName} x {arr.count} </div> )}) } 
                        T O T A L C O S T ${cost}
            </div>
          </div>
          <pre> <div className="cfm-foot">T H A N K  Y O U  F O R  S H O P P I N G  W I T H  U S.</div> </pre>
        </React.Fragment>
    );
}
 
export default Confirm;
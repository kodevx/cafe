import React,{ useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { OrderContext } from '../contexts/OrderContext';
import Nav from './Nav';
import './styles.css';

const Beans = (props) => {
    let { array, incCount, decCount } = useContext(ProductContext);
    let { prod, purchasedProd } = useContext(OrderContext); 
    console.log("Array: ",array);
    console.log("Prod: ",prod);

    function handleInc (id){
        incCount(id);
    }

    function handleDec(id){
        decCount(id);
    }
    
    return(
        <React.Fragment>
             <Nav title={"M E N U"}/>
             <div className="cf-text">C O F F E E - B E A N S</div> 
              <div className="contain">
                <div className="blk"> 
                    <div className="img-6"></div>
                    <div className="blk-txt"> B R A Z I L I A N  C O F F E E  
                        <span className="cnt"> (${array[5].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(6) }} className="dec-btn">-</button>
                            <span>{array[5].count} </span>
                            <button onClick={()=>{ handleInc(6) }} className="inc-btn">+</button>
                        </div>
                    </div>   
                </div>

                <div className="blk"> 
                    <div className="img-7"></div>
                    <div className="blk-txt"> T C H I B O  C O F F E E  
                        <span className="cnt"> (${array[6].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(7) }} className="dec-btn">-</button>
                            <span>{array[6].count} </span>
                            <button onClick={()=>{ handleInc(7) }} className="inc-btn">+</button>
                        </div>
                    </div>   
                </div>
              </div>
              
            <div className="bttn-grp">
              <button onClick={()=>{ purchasedProd(array); props.nextStep(5); }} className="bttn-1"> C O N F I R M</button>
            </div>
    </React.Fragment>
    );
}

 
export default Beans;
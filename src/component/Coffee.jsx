import React,{ useContext } from 'react';
import Nav from './Nav';
import './styles.css';
import { ProductContext } from '../contexts/ProductContext';
import { OrderContext } from '../contexts/OrderContext';


const Coffee = (props) => {
    let { array, incCount, decCount } = useContext(ProductContext);
    let { prod, purchasedProd, costCal } = useContext(OrderContext);
    console.log("Array: ",array);
    console.log("Prod: ",prod);

    function handleInc (id){
        //console.log("increment Count",id);
        incCount(id);
        //console.log("Altered Array: ",array);
    }

    function handleDec(id) {
        //console.log("Decrement Count",id);
        decCount(id);
    }
    return(
        <React.Fragment>
            <Nav title={"M E N U"}/>
            <div className="cf-text">C O F F E E</div>
            
            <div className="contain">
                <div className="blk"> 
                    <div className="img-1"></div>
                    <div className="blk-txt"> A M E R I C A N O 
                        <span className="cnt"> (${array[0].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(1) }} className="blk-btn">-</button>
                            <span>{array[0].count} </span>
                            <button onClick={()=>{ handleInc(1) }} className="blk-btn">+</button>
                        </div>
                    </div>   
                </div>

                <div className="blk"> 
                    <div className="img-2"></div>
                    <div className="blk-txt"> L A T T E 
                        <span className="cnt"> (${array[1].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(2) }} className="blk-btn">-</button>
                            <span>{array[1].count} </span>
                            <button onClick={()=>{ handleInc(2) }} className="blk-btn">+</button>
                        </div>
                    </div>   
                </div>

                <div className="blk"> 
                    <div className="img-3"></div>
                    <div className="blk-txt">C A P P A C C U N O 
                        <span className="cnt"> (${array[2].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(3) }} className="blk-btn">-</button>
                            <span>{array[2].count} </span>
                            <button onClick={()=>{ handleInc(3) }} className="blk-btn">+</button>
                        </div>
                    </div>   
                </div>
            </div>

            <div className="contain-1">
                <div className="blk"> 
                    <div className="img-4"></div>
                    <div className="blk-txt"> E S P R E S S O 
                        <span className="cnt"> (${array[3].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(4) }} className="blk-btn">-</button>
                            <span>{array[3].count} </span>
                            <button onClick={()=>{ handleInc(4) }} className="blk-btn">+</button>
                        </div>
                    </div>   
                </div>

                <div className="blk"> 
                    <div className="img-5"></div>
                    <div className="blk-txt"> M O C H A 
                        <span className="cnt"> (${array[4].price})</span>
                        <div className="cnt-blk">
                            <button onClick={()=>{ handleDec(5) }} className="blk-btn">-</button>
                            <span>{array[4].count} </span>
                            <button onClick={()=>{ handleInc(5) }} className="blk-btn">+</button>
                        </div>
                    </div>   
                </div>
            </div>
            
            <div className="bttn-grp">
              <button onClick={()=>{ props.nextStep(5); purchasedProd(array); costCal(); }} className="bttn-1"> C O N F I R M</button>
            </div>
        </React.Fragment>
    );
}
 
export default Coffee;

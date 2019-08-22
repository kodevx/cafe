import React from 'react';
import Nav from './Nav';
import './styles.css';

const CustInfo = (props) => {

    let nxtStep = () =>{
        if(props.mode===0){
           props.nextStep(3);
        }else{
           props.nextStep(4);
        }
    }

    let prvStep = () => {
        props.nextStep(1);
    }

    return(
            <React.Fragment>
                <Nav title={"CUSTOMER DETAILS"} />
                <div className="info">
                    <div className="info-blk">
                        <div className="input">
                            <input
                            placeholder=" N A M E "
                            onChange={props.txtChange("name")}
                            />
                        </div>
                    
                        <div  className="input">
                            <input
                            placeholder=" P H O N E   N U M B E R  "
                            onChange={props.txtChange("number")}
                            />
                        </div>
                    
                        <div  className="input">
                            <input
                            placeholder=" E M A I L "
                            onChange={props.txtChange("email")}
                            />
                        </div>
                   
                        <div  className="input">
                            <input
                            placeholder=" A D D R E S S "
                            onChange={props.txtChange("adrs")}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="info-btn">
                  <button onClick={prvStep} className="bttn">B A C K</button>
                  <button onClick={nxtStep} className="bttn">C O N T I N U E</button>
                </div>
            </React.Fragment>
    );
}

 
export default CustInfo;

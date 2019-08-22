import React from 'react';
import './styles.css';
const HomePg = (props)=> {
    
    let coffeeStep = () =>{
        props.nextStep(2,0);
    }

    let beansStep = () =>{
        props.nextStep(2,1);
    }

    return(
       <React.Fragment>
        <div className="main">
          <div className="head">Cafe Corner.
            <div className="hm">Home</div>
            <div>About</div>
          </div>
          <div className="Intro">
            <button onClick={coffeeStep}>C O F F E E</button>
            <button onClick={beansStep} className="cf-2">B E A N S</button>
          </div>
            <div className="btn-cf-1">
            
            </div>
            
        </div>
       </React.Fragment>
    );
}
 
export default HomePg;
/*
              <button onClick={coffeeStep}>C O F F E E</button>
              <button onClick={beansStep}>C O F F E E B E A N S</button>
*/
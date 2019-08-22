import React ,{ Component } from 'react';
import HomePg from './HomePg';
import Coffee from './Coffee';
import Beans from './Beans';
import CustInfo from './CustInfo';
import Order from './Order'
import Confirm from './Confirm';

export default class Home extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        step:1,
        mode:0,
        name: "",
        number: "",
        email: "",
        adrs: ""
    };
    
    this.nextStep=this.nextStep.bind(this);
    this.prevStep=this.prevStep.bind(this);
    this.txtChange=this.txtChange.bind(this);
  }

  nextStep = (step,mode) =>{
    this.setState({ step });
    this.setState({ mode });
  }

  prevStep = (step)=>{
   this.setState({ step });
  }

  txtChange = input => e =>{
    this.setState({ [input] : e.target.value });
  }  

  render(){
    let { name,number,email,adrs,step } = this.state;
    let values = { name,number,email,adrs }
    console.log("Current Step: ",step);
    switch(step){ 
      case 1: return(
                <HomePg nextStep={this.nextStep} />);
    
      case 2: return(
                <CustInfo nextStep={this.nextStep} 
                 values={values}
                 mode={this.state.mode} 
                 prevStep={this.prevStep}
                 txtChange={this.txtChange}/>);

      case 3: return(
                <Coffee nextStep={this.nextStep} 
                 name={name} />
              );
      
      case 4: return(
                <Beans nextStep={this.nextStep} />
              );
      
      case 5: return(
                <Order nextStep={this.nextStep} /> 
              );
      
      case 6: return(
                <Confirm name={name}/> );
        
      default: console.log("Default Case") ;
    }
  }
}



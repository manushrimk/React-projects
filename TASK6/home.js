import React,{Component} from "react"
import  ReactDOM  from 'react-dom';
import cake from './images/cake.png';

class Home extends Component{
  
  render(){
    return(
      <div>
       <center><h1><strong>Cloud cake</strong></h1> </center>
      <center> <img src={cake} width={600} height={300} ></img></center>
      </div>
    );
  }
  }
  export default Home;
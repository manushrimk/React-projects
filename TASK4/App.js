import './App.css'
import styles from "./demo.module.css"
import React,{Component} from "react"
import img  from './images/img.webp'
import des from './images/des.jpg'
import mic from './images/mic.webp'
import download from './images/download.jpeg'
class App extends Component{
  constructor(props){
    super(props);
    
  }
  render(){
    
    const m ={ 
      padding:'60px 50px 30px 420px'
    }
    const right={ 
      padding:'-30px 0px 0px 300px'
      
    }
    const r2={
      padding:'0px 10px 10px 400px'
    }
    
    const left ={ 
      padding:'10px 700px 20px 10px'
    }
    return(
      <div>
       <h1 className={styles.heading}>DISNEY</h1> 
       <img src={img} alt='logo'width="200" height="200" style={left}></img>
       <img src={des} alt='logo'width="200" height="200" align="top" style={right}></img>
       <video width='400' height='200'style={m} controls> 
       <source src="./mk.mp4" type="video/mp4"></source></video>
       <h1 style={m}>play the video</h1>
       <img src={download} alt='logo'width="200" height="200" style={right}></img>
       <img src={mic} alt='logo'width="200" height="200" align="right" style={r2}></img>
      </div>
    );
  }
  }
  export default App;



/*import React,{Component} from "react";
class App1 extends Component{
  render(){
  return(
    <div>
    <h1>Hello</h1>
    </div>
    );

  }
}
class App2 extends Component{
  render(){
  return(
    <div>
    <h1>Hello Manushri!</h1>
    <App1/>
    </div>
    );

  }
}
export default App2;*/
/*import React,{Component}from'react';
class App1 extends Component{
  constructor(){
    super();
    this.state={
      data:
      [
        {
          "name" :"Akchaya : Akz"
        },
        {
          "name":"Kavya shree : kavs"
        },
        { 
          "name":"Kanishka : buddu"
        },
        { 
          "name":"Ramya : rams"
        },
        { 
          "name":"Pavithira : pavi"
        }
      ]
    }
  }

render(){
  return(
    <div>
      <Fruit/>
      <ul>
        {this.state.data.map((item)=><List data ={item}/>)}
      </ul>
    </div>
  );
}
}*/
/*class Fruit extends React.Component{
  render(){
    const mystyle={
      color:'yellow',
      fontFamily:"Arial"
      
    };
    return(

  
    <div>
      <h1 >Welcome to buddy class</h1>
      <h2><i>It's about my friends</i></h2>
    </div>
    );
  }
}
class List extends React.Component{
  render(){
    return(
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    )
  }
}
export default App1;*/









import React,{Component}from'react';
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
}
class Fruit extends React.Component{
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
export default App1;
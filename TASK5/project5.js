/*import React,{Component} from 'react';
import  ReactDOM  from 'react-dom';
class Reacts extends React.Component{
    constructor(){
        super();
        this.state={select:"",username:"",phonenumber:null,errmsg:"",add:""};
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="phonenumber"){
            if(v!=""&&!Number(v))
            {
                err=<strong>invalid,phonenumber must be number</strong>

            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("successfully registered");
    }
    render(){
        return(
            <form>
                <center><h1>
                    SPORTS REGISTRATION FORM
                </h1></center>
                <h4>Select your sport:<select name="sports" id="sports">
                <option value="select">select an option</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Hockey">football</option>
                    <option value="Tennis">Tennis</option>
                </select></h4>
                <h4>Enter your name:<input type="text" name="username" onChange={this.uservalue}/></h4>
                <h4>Enter your phone:<input type="text" name="phonenumber" onChange={this.uservalue}/></h4>
                <h4>Enter your Address:<input type="text" name="add" onChange={this.uservalue}/></h4>
                {this.state.errmsg}
                <button type='submit' name="submit" onClick={this.formsubmit}>submit</button>
            </form>

        )
    }
}ReactDOM.render(<Reacts/>,document.getElementById('root'));
export default  Reacts;*/
import React from 'react';
//import './App.css';
import BM from './images/BadMinton.jpg';
import Tennis from './images/Tennis.jpeg';
import Cricket from './images/Cricket.jpg';
class App extends React.Component{
  constructor(){
    super();
    this.state= {sport:"",name:"",phno:null,add:"",fees:null,refer:null,amount:null,errmsg:"",imgscr:""};
  }
  uservalue=(event)=> {
    let n=event.target.name;
    let v=event.target.value;
    let err=" ";
    if(n==="phno"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg1:err});
    }
    if(n==="fees"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
      }
      this.setState({errmsg2:err});
    }
    if(n==="refer"){
      if(v!==" "&&!Number(v)){
        err=<strong>invalid,This must be number</strong>
        this.setState({errmsg3:err});
      }else{
        this.setState({errmsg3:""});
      var r = document.getElementById("Refer").value;
      var f = document.getElementById("Fees").value;
      var t = r*f;
      document.getElementById("Total").value=t;  
      }
    }
    if(n==="sport") {
      if(v==="Tennis"){
        let a = Tennis;
        this.setState({imgscr:a});
      }
      if(v==="BatMinton"){
        let a = BM;
        this.setState({imgscr:a});
      }
      if(v==="Cricket"){
        let a = Cricket;
        this.setState({imgscr:a});
      }
    }
  }
  formSubmit=(event)=> {  
    event.preventDefault();
    alert("Registration is Success");
  }                                                                                            
  render(){
    return(
      <div>
        <img src={this.imgscr} alt='Sport'/>
      <form onSubmit={this.formSubmit}>
       <center> <h1>SPORTS REGISTRATION </h1></center>

        Select Sport: <select id='image-select' name='sport' onClick={this.uservalue}>
          <option value={0}>Select option</option>
          <option value={"Tennis"}>Tennis</option>
          <option value={"BatMinton"}>Bat Minton</option>
          <option value={"Cricket"}>Cricket</option>
        </select>
        <br /><br />

        Name: <input type="text" name="username" onChange={this.uservalue} /> <br /><br />

        Phone : <input type="text" name="phno" onChange={this.uservalue}/>
        {this.state.errmsg1}<br /><br />

        Address : <input type="text" name="add" onChange={this.uservalue}/><br /><br />

        Fees : <input type="text" id='Fees' name="fees" onChange={this.uservalue}/>
        {this.state.errmsg2}<br /><br />

        References : <input type="text" id="Refer" name="refer" onChange={this.uservalue}/>
        {this.state.errmsg3}<br /><br />

        Total amount :<input type='text' id='Total' disabled /><br />

        <input type='submit' />
      </form>
      </div>
    );
  }
}
export default App;
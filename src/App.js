import React,{Component} from 'react';
import Navbar from "./Navbar"
import {BrowserRouter as Router,Route} from "react-router-dom"
import FirstTab from "./FirstTab"
import SecondTab from "./SecondTab"
import ThirdTab from "./ThirdTab"
import {inject,observer} from 'mobx-react'

import './App.css';

//@inject('birdStore')
//@observer 

class App extends Component {


  render(){
    const {Store}= this.props

      return <div className="App_container">  
                {(Store.tab===1&&Store.resultCounttab1===0)||
                  (Store.tab===2&&Store.resultCounttab2===0)||
                  (Store.tab===3&&Store.resultCounttab3===0)?<h4 className="message_default">Pick your numbers</h4>
                  :(Store.tab===1&&Store.resultCounttab1>6)?<div className="message_red">You need to remove {Store.resultCounttab1-6} {Store.resultCounttab1-6===1?"number":"numbers"}</div>
                  :(Store.tab===2&&Store.resultCounttab2>6)?<div className="message_red">You need to remove {Store.resultCounttab2-6} {Store.resultCounttab2-6===1?"number":"numbers"}</div>
                  :(Store.tab===3&&Store.resultCounttab3>6)?<div className="message_red">You need to remove {Store.resultCounttab3-6} {Store.resultCounttab3-6===1?"number":"numbers"}</div>
                  :(Store.tab===1&&Store.resultCounttab1<6)?<div className="message_red">You need to add {6-Store.resultCounttab1} {6-Store.resultCounttab1===1?"number":"numbers"}</div>
                  :(Store.tab===2&&Store.resultCounttab2<6)?<div className="message_red">You need to add {6-Store.resultCounttab2} {6-Store.resultCounttab2===1?"number":"numbers"}</div>
                  :(Store.tab===3&&Store.resultCounttab3<6)?<div className="message_red">You need to add {6-Store.resultCounttab3} {6-Store.resultCounttab3===1?"number":"numbers"}</div>
                  :<div className="message_green">You have cοompleted the board </div>}     
              <div className="Router_Navbar_container">
                <Router>
                  <Navbar/>    
                  <div className="Router_container">          
                    <Route exact path="/" component={FirstTab}/>
                    <Route exact path="/02" component={SecondTab}/>
                    <Route exact path="/03" component={ThirdTab}/>
                  </div>
                </Router>
              </div>
            
        </div>
} 

}

export default inject("Store")(observer(App));

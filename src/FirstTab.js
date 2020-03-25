import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import './App.css';

class FirstTab extends Component {
componentDidMount(){
this.props.Store.tab=1
}

 addChangeToStore=(e)=>{
     e.preventDefault()
    this.props.Store.change_result_tab1(e.target.value)
    this.props.Store.change_boardprices_tab1()
}

  render(){
    const {Store}= this.props

   return <div>
            <ol className="numbers_container">
           {Store.arr.map((item,index)=>
               <div className="numbers">
                   <li data-testid="list" value={index} className={Store.result_tab1[index]?"selected":null} onClick={this.addChangeToStore} >{Store.arr[index]}
                   </li>
               </div>)}    
            </ol>
            <div className="grid_container">
                <div>
                </div>
                <div className="cost_area">
                    <div className="prices">
                        <h4>Board Price $ {Store.valid_game?Store.board1_price.toFixed(2):(0).toFixed(2)}</h4>
                        <h2>Total Price ${Store.valid_game?Store.display_total_price.toFixed(2):(0).toFixed(2)}</h2>
                    </div>
                    <div>
                         <button className={String(Store.valid_game)}>Play All</button>
                    </div>
                </div>
            </div>
        </div>
            
   } 
}

export default inject("Store")(observer(FirstTab));


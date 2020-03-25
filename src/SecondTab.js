import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'
import './App.css';

//@inject('birdStore')
//@observer 

class SecondTab extends Component {
    componentDidMount(){
        this.props.Store.tab=2
        }

    addChangeToStore=(e)=>{
        e.preventDefault()
       this.props.Store.change_result_tab2(e.target.value)
       this.props.Store.change_boardprices_tab2()
    }

  render(){
    //Store.result[tab-1][index]=true
    const {Store}= this.props

    return <div>
    <ol className="numbers_container">
   {Store.arr.map((item,index)=>
       <div className="numbers">
           <li value={index} className={Store.result_tab2[index]?"selected":null} onClick={this.addChangeToStore} >{Store.arr[index]}
           </li>
       </div>)}    
    </ol>
    <div className="grid_container">
        <div>
        </div>
        <div className="cost_area">
                    <div className="prices">
                        <h4>Board Price $ {Store.valid_game?Store.board2_price.toFixed(2):(0).toFixed(2)}</h4>
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

export default inject("Store")(observer(SecondTab));
import {extendObservable,action} from 'mobx'

class Store{

    constructor(){
        extendObservable(this,{
            tab:0,
            arr:Array.from(Array(49),(x,index)=>index+1),
            //initialize array result[] with false values
            result_tab1:Array(49).fill(false),
            result_tab2:Array(49).fill(false),
            result_tab3:Array(49).fill(false),

            //price variables
            board1_price:0,
            board2_price:0,
            board3_price:0,            
        //Actions
            //change value when clicking on number  
            change_result_tab1:action((index)=>{this.result_tab1[index]?this.result_tab1[index]=false:this.result_tab1[index]=true}),
            change_result_tab2:action((index)=>{this.result_tab2[index]?this.result_tab2[index]=false:this.result_tab2[index]=true}),
            change_result_tab3:action((index)=>{this.result_tab3[index]?this.result_tab3[index]=false:this.result_tab3[index]=true}),
            //change board prices every time you click on number
            change_boardprices_tab1:action(()=>(this.result_tab1.filter(num =>num===true)).length===6?this.board1_price=1:this.board1_price=0),
            change_boardprices_tab2:action(()=>(this.result_tab2.filter(num =>num===true)).length===6?this.board2_price=1:this.board2_price=0),
            change_boardprices_tab3:action(()=>(this.result_tab3.filter(num =>num===true)).length===6?this.board3_price=1:this.board3_price=0),
        //Computed values
            //return the number of "true" (numbers selected) by tab
            get resultCounttab1(){return (this.result_tab1.filter(num =>num===true)).length},
            get resultCounttab2(){return (this.result_tab2.filter(num =>num===true)).length},
            get resultCounttab3(){return (this.result_tab3.filter(num =>num===true)).length},
            //get total price
            get display_total_price(){return this.board1_price+this.board2_price+this.board3_price },
            //return true if game is valid
            get valid_game(){
                if((this.result_tab1.filter(num =>num===true)).length===0&&(this.result_tab2.filter(num =>num===true)).length===0&&(this.result_tab3.filter(num =>num===true)).length===0)
                {return false}
                else if(((this.result_tab1.filter(num =>num===true)).length===0||(this.result_tab1.filter(num =>num===true)).length===6)
                &&((this.result_tab2.filter(num =>num===true)).length===0||(this.result_tab2.filter(num =>num===true)).length===6)
                &&((this.result_tab3.filter(num =>num===true)).length===0||(this.result_tab3.filter(num =>num===true)).length===6))
                {return true}
                else{return false}
            }
                
            
        }) 

    }



}


export default new Store()

// import {observable, autorun,action} from "mobx"


// // initial values arr[3][49]
// //contains the numbers of the 3 tabs
// var tabs=3
// var numbers=49
// var arr= new Array(tabs)
// for (var i=0;i<tabs;i++){
//   arr[i] = new Array(numbers)
//     for (var j=0;j<numbers;j++){
//         arr[i][j]=j+1
//     }
// }

// //initial value false result[3][49]
// //value in array is true if number is selected
// var result= new Array(tabs)
// for (var i=0;i<tabs;i++){
//     result[i] = new Array(numbers)
//     for (var j=0;j<numbers;j++){
//         result[i][j]=false
//     }
// }

// class Store{

// //observable state
// // const Store = observable({arr,result})
//  @observable arr
//  @observable result

// //function to update result array when a number is clicked
// selectNumber = action((tab,index)=>{result[tab][index]=false})
// // @action selectNumber(tab,index){result[tab][index]=true}



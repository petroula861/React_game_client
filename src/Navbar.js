import React from 'react';
import {NavLink} from "react-router-dom"



class Navbar extends React.Component{

render(){

  const styles={
    navstyle:{
      display:'flex'
    },
    default:{
      display:'block',width:'10%',textAlign:'center',padding:'1%',textDecoration:'none'
      
    },
    active:{backgroundColor:'rgb(54, 54, 54)'}
  }
  return <div classname="Navbar" style={styles.navstyle}>

            <NavLink
            exact
            style={styles.default}
            activeStyle={styles.active}
            to={"/"}> 01
            </NavLink>
            <NavLink
            exact
            style={styles.default}
            activeStyle={styles.active}
            to={"/02"}> 02
            </NavLink>
            <NavLink
            exact
            style={styles.default}
            activeStyle={styles.active}
            to={"/03"}> 03
            </NavLink>

       </div>
}  
}

export default Navbar;

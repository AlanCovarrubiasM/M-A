import React, {Component} from "react";
import "./Item.css";

class Item extends Component{
    render(){
        return(
            <li>
                <a className="itemName" href="#">{this.props.name}</a>
            </li>
        ); 
    }
}
export default Item;
import React, {Component} from "react";
import Item from "../Item/Item.js";
import "./Category.css";

class Category extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false
        }
    }

    handClick(event){
        event.preventDefault();
        this.setState({
            visible:!this.state.visible
        })
    }
    render(){
        return(
            <div className="category">
                <li>
                    <p className="categoryName" onClick={this.handClick.bind(this)}>{this.props.name}</p>
                    <ul className={this.state.visible?'visible':'no-visible'}>
                        {this.props.subName.map((item)=>{
                            return(
                                <Item name={item}/>
                            );
                        })}
                    </ul>
                </li>
            </div>
        );
    }
}
export default Category;
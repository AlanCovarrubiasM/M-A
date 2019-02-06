import React, {Component} from "react";
import './Search.css';
class Search extends Component {
    render(){
        return(
            <div id="canvasSearch">
                <form id="search"className="centerY">
                    <input type="text" placeholder="Search"/>
                    <div id="lineSearch"></div>
                </form>
            </div>
        );
    }
}
export default Search;
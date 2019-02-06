import React, {Component} from "react";
import "./Logo.css";
import logoWhite from './../../../img/logoWhite.png';


class Logo extends Component{
    render(){
        return(
            <div id="logo" className="centerAll">
                <picture>
                    <img src={logoWhite}/>
                </picture>
                <p>M&A</p>
            </div>
        );
    }
}

export default Logo;
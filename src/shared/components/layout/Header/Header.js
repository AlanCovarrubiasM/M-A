import React, {Component} from 'react';
import './Header.css';
import facebook from './../../../img/facebook.png';
import instagram from './../../../img/instagram.png';
import Menu from "../Menu/Menu.js";
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeMenu: false
        }
    }   
    openMenu = (event) => {
        console.log('click');
        this.state.activeMenu = 'true';
        console.log(this.state.activeMenu);
    }
//    <Menu className={this.state.visibleMenu?'visionMenu':'no-visionMenu'}/>

    render(){
        return(
            <div id="header">
                <Menu active={this.state.activeMenu}/>
                <div id="canvasIconMenu" className="centerX" onClick={this.openMenu}>
                    <div id="iconMenu" className="centerAll">
                        <div className="line"></div>
                        <div className="line lineTwo"></div>
                        <div className="line lineThree"></div>
                    </div>
                </div>
                <div id="nameLarge" className="centerX">
                    <p className="name">Miguel & Alan</p>
                </div>
                <div id="socialNetwork" className="centerX">
                    <a href="" target="blank">
                        <picture className="centerX">
                            <img src={facebook}/>
                        </picture>
                    </a>                
                    <a href="" target="blank">
                        <picture className="centerX">
                            <img src={instagram}/>
                        </picture>
                    </a> 
                </div>
                
            </div>
        );
    }
}

export default Header;
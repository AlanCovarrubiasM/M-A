import React, {Component} from 'react';
import "./Home.css"
import Header from '../../shared/components/layout/Header/Header.js';
import Search from '../../shared/components/layout/Search/Search.js';
import Logo from '../../shared/components/layout/Logo/Logo.js';
class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Header/>
                <Search/>
                <Logo/>
            </div>

        );
    }
}
export default Home;

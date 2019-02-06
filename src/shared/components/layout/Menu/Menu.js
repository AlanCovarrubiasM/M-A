import React, {Component} from "react";
import "./Menu.css";
import Category from "./Category/Category.js";

class Menu extends Component{
    render(){
        return(
            <nav className="menu">
                <ul>
                    <Category name="Hombre" subName={['Plyeras', 'Zapatos']}/>
                    <Category name="Mujer" subName={['Blusas', 'Vestidos', 'Zapatos']}/>
                    <Category name="Niños" subName={['Camisas']}/>
                    <Category name="Unisex" subName={['Gorras', 'Sueters']}/>
                </ul>
            </nav>
        );
    }
}
export default Menu;
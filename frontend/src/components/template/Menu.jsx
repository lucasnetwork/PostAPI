import React,{Component} from 'react'
import './../../css/menu.css'

class Menu extends Component{
    render(){
        return(
            <nav className="menu">
                <li><a href="">Admin</a></li>
                <li><a href="">Criar</a></li>
            </nav>
        )
    }
}

export default Menu
import React,{Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import './../../css/menu.css'
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component{
    render(){
        return(
            <nav className="menu">
                <li><a href="/admin"><i><FontAwesomeIcon icon={faUser}/></i>Admin</a></li>
                <li><a href="/create"><i><FontAwesomeIcon icon={faPlus}/></i>Criar</a></li>
            </nav>
        )
    }
}

export default Menu
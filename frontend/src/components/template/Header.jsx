import React,{Component} from 'react'
import Menu from './Menu'
import './../../css/header.css'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1>PostsApi</h1>
                <Menu /></header>
        )
    }
}

export default Header
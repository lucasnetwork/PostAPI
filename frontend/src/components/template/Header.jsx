import React,{Component} from 'react'
import Menu from './Menu'
import './../../sass/header.scss'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1><a href="/">PostsApi</a></h1>
                <Menu /></header>
        )
    }
}

export default Header
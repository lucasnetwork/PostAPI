import React,{Component} from 'react'
import axios from 'axios'
import {baseApiUrl} from './../global/global'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import './../css/admin.css'
class Renderpost extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <tr >
                <td>{this.props.post.id}</td>
                <td>{this.props.post.name}</td>
                <td>{this.props.post.title}</td>
                <td>
                    <button id={this.props.post.id} onClick={() =>this.deletedPost(this.props.id)}> <FontAwesomeIcon icon={faTrash}/></button>
                    <button id={this.props.post.id}><FontAwesomeIcon icon={faEdit}/></button>
                </td>
            </tr>
        )
    }
}

class Admin extends Component{
    constructor(props){
        super(props)
        this.state = ({
            posts:[],
            post: [],
        })
        this.getPosts = this.getPosts.bind(this)
        
    }
    getPosts = () => {
        axios.get(`${baseApiUrl}/post`)
            .then(res => {
                const posts = res.data.data.map(post => {
                    return {...post}
                })
                this.setState({posts})
            })
    }
    loadPost =() => {

    }
    deletedPost(id){
        const posts = this.state.posts
        axios.delete(`${baseApiUrl}/post/${id}`)
            .then(() => {
                const newPosts = posts.filter((value) => value.id !== id)
                this.setState({Posts:newPosts})
            })
    }
    componentDidMount(){
        this.getPosts()
    }
    //Temporário
    componentWillUpdate(){
        this.getPosts()

    }
    render(){
        return(
            <main className="admin-table">
                <h1>Admin</h1>
                <table className="table">
                        <thead className="t-header">
                            <tr>
                                <th>id</th>
                                <th>nome</th>
                                <th>titulo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                    {this.state.posts.map((post,id)=>{
                        return(
                            // <Renderpost post= {post}/>
                            <tr key={post.id} >
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.title}</td>
                                <td>
                                    <button id={post.id} onClick={() =>this.deletedPost(post.id)}> <FontAwesomeIcon icon={faTrash}/></button>
                                    <button id={post.id}><FontAwesomeIcon icon={faEdit}/></button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </main>
            
        )
    }
}

export default Admin
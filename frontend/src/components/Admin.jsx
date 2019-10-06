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
                <td>{this.props.name}</td>
                <td>{this.props.title}</td>
                <td>
                    <button id={this.props.id} onClick={this.deletedPost}> <FontAwesomeIcon icon={faTrash}/></button>
                    <button id={this.props.id}><FontAwesomeIcon icon={faEdit}/></button>
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
            lenght:0
        })
        this.getPosts = this.getPosts.bind(this)
        
    }
    getPosts = () => {
        axios.get(`${baseApiUrl}/post`)
            .then(res => {
                const posts = res.data.data.map(post => {
                    return {...post}
                })
                this.setState({posts,length:posts.length})
            })
    }
    deletedPost(e){
        const Id = e.target.id
        console.log(e.target)
        axios.delete(`${baseApiUrl}/post/60`)
        // .then(() => this.getPosts())
        
    }
    componentDidMount(){
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
                        return(<tr key={id}>
                                    <td>{post.id}</td>
                                    <td>{post.name}</td>
                                    <td>{post.title}</td>
                                    <td>
                                        <div className="button-action">
                                            <i> <FontAwesomeIcon icon={faTrash}/></i> 
                                            <button id={post.id} item={post} onClick ={this.deletedPost}></button>
                                        </div>
                                        <button id={id} onClick={this.loadPost}><FontAwesomeIcon icon={faEdit}/> </button>
                                    </td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </main>
            
        )
    }
}

export default Admin
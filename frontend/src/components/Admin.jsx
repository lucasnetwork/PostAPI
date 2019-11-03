import React,{Component} from 'react'
import axios from 'axios'
import {baseApiUrl} from './../global/global'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import './../sass/admin.scss'

class Avatar  extends Component{

    render(){
        return(
            <>
                <td>{this.props.header.id}</td>
                <td>{this.props.header.name}</td>
                <td>{this.props.header.title}</td>
            </>
        )
    }
}
class Admin extends Component{
    constructor(props){
        super(props)
        this.state = ({
            posts:[],
            post:[],
        })
        this.getPosts = this.getPosts.bind(this)
        this.loadPost = this.loadPost.bind(this)
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
    loadPost =(id) => {
        axios.get(`${baseApiUrl}/post/${id}`)
            .then(res => this.setState({post:res.data}))
    }
    deletedPost(id){
        const posts = this.state.posts
        axios.delete(`${baseApiUrl}/post/${id}`)
            .then(() => {
                const newPosts = posts.filter((value) => value.id !== id)
                this.setState({posts:newPosts})
            })

    }
    save(e){
        e.preventDefault()
        axios.put(`${baseApiUrl}/post/${e.target.id}`,this.state.post[0]).then(() => this.getPosts())
       
    }
    savePost(e){
        const post = this.state.post[0]
        const value = e.value
        const name = e.name
        post[`${name}`] = value
        this.setState(post) 
        this.getPosts()
    }
    componentDidMount(){
        this.getPosts()
    }
    render(){
        return(
            <main className="admin-table">
                <h1>Admin</h1>
                <section>
                    {this.state.post.map((post,id) =>(<form className="admin-post-update" key={id}>
                        <input value={post.name} onChange={() => this.onChange}></input>
                        <input name="title" value={post.title} onChange={(e) => this.savePost(e.target)}></input>
                        <button id={post.id} onClick={(e) =>this.save(e)}>salvar</button>
                    </form>))}
                </section>
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
                            {this.state.posts.map((posts,id)=>{
                                return(
                                    <tr key={posts.id} >
                                        <Avatar header={posts}/>
                                        <td className="table-actions">
                                            <button onClick={() =>this.deletedPost(posts.id)}><FontAwesomeIcon className="trash" icon={faTrash}/></button>
                                            <button onClick={() =>{this.loadPost(posts.id)}}><FontAwesomeIcon icon={faEdit}/></button>
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
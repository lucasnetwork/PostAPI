import React,{Component} from 'react'
import './../../css/content.css'
import axios from 'axios'


class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            limit:2,
            page:1,
        }
        

    }
    getPosts(){
        axios.get(`http://localhost:3010/post?page=${this.page}`)
            .then(res => {
                const posts = res.data.data.map(post => {
                    return {...post}
                })
                this.setState({posts})
            })
            
    }
    componentDidMount(){
        this.getPosts()
    }
    loadPosts(){

    }
    
    render(){
        return(
            <main className="content">
                <h2 className="title">Posts</h2>
                {this.state.posts.map((post) => {
                    return(<article className="post" key={post.id}>
                        <div className="post-header">
                            {/* <img src={url} alt="Author"/> */}
                            <div className="post-name">
                                {post.name}
                            </div>
                            <div className="post-description">
                                {post.description}
                            </div>
                        </div>
                        <div className="post-content">
                            {post.content}
                        </div>
                    </article>
                    )})
                }
            </main>
        )
    }
}
export default Content
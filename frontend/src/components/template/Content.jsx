import React,{Component} from 'react'
import './../../css/content.css'
import axios from 'axios'


class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }

    }
    getPosts(){
        axios.get('http://localhost:3010/post')
            .then(res => {
                const posts = res.data.map(post => {
                    return {...post}
                })
                this.setState({posts})
            })
    }
    componentDidMount(){
        this.getPosts()
    }
    render(){
        return(
            <main className="content">
                <h2 className="title">Posts</h2>
                {this.state.posts.map((post,id) => {
                    return(<div class="post" key={post.id}>
                        <div className="name">
                            {post.name}
                        </div>
                        {post.id}
                    </div>
                    )})
                }
            </main>
        )
    }
}
export default Content
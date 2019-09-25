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
        axios.get('http://localhost:3000/post')
            .then(res => {
                const posts = res.data.map(post => {
                    return {...post}
                })
                this.setState({posts})
                console.log(this.state.posts)
            })
    }
    componentDidMount(){
        this.getPosts()
    }
    render(){
        return(
            <main className="content">
                {this.state.posts.map((post,id) => {
                    return(<li key={post.id}>
                            {post.name}
                        </li>
                    )})
                }
            </main>
        )
    }
}
export default Content
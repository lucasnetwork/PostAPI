// eslint-disable-next-line no-unused-vars
import React,{Component} from 'react'
import './../../sass/content.scss'
import axios from 'axios'
import image from '../../images/image.jpg' //imagem padrão
import {baseApiUrl} from './../../global/global'
class PostRender extends Component{
	render(){
		return(
			<div className={this.props.class}>
				{this.props.content}
			</div>
		)
	}
}

class Content extends Component{
	constructor(props){
		super(props)
		this.state = {
			posts:[],
			limit:0,
			page:1,
		}
	}
	getPosts(){
		axios.get(`${baseApiUrl}/post?page=${this.page}`)
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
	
	render(){
		return(
			<main className="content">
				<h2 className="title">Posts</h2>

				{/* Utilizará a função map para renderizar cada um dos posts,
					Retornando sempre uma tag article */}
				{this.state.posts.map((post) => {
					return(<article className="post" key={post.id}>
						<div className="post-header">
							{/*Se existir imagem no banco de dados, vai utilizar, se não, utilizará a imagem padrão*/}
							<PostRender class="post-title" content={post.title}/>
							<img src={(post.imageUrl) ? post.imageUrl : image} alt="Author"/> 
							
							<PostRender class="post-name" content={post.name}/>
							<PostRender class="post-description" content={post.description}/>
						</div>
						<PostRender class="post-content" content={post.content}/>
					</article>
					)})
				}
			</main>
		)
	}
}
export default Content
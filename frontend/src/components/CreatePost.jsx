import React,{Component} from 'react'
import {baseApiUrl} from './../global/global.js'
import axios from 'axios'
import '../css/createPost.css'

class CreatePost extends Component{
    constructor(props){
        super(props)
        this.state=({
            title:'',
            name:'',
            imageUrl:'',
            description:'',
            content:'',
        })

        this.onChange = this.onChange.bind(this)
        this.post = this.post.bind(this)
    }
    onChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]:e.target.value
        })
    }
    post = (e)=>{
        e.preventDefault()
        /*
            Enviará os dados para o banco de dados usando axios,
            mostrará um alerta de sucesso e limpará os estado do componente,
            se não, enviará um erro.
        */
        const stateDefault = this.state
        const post = {...this.state}
        axios.post(`${baseApiUrl}/post`,post)
            .then(() => {alert('sucesso')
                this.setState({...stateDefault})
            })
            .catch(err => alert(err))
        
    }
    render(){
        return(
            <main className="post-create">
                <h2>Crie o seu post</h2>
                <form>
                    <input type="text" name="title" placeholder="Digite o Titulo do texto" value={this.state.title} onChange={this.onChange}/>
                    <input type="text" name="name" placeholder="Digite o Nome do autor do Post" value={this.state.name} onChange={this.onChange}/>
                    <input type="text" name="imageUrl" placeholder="Digite a url da image" value={this.state.imageUrl} onChange={this.onChange}/>
                    <input type="text" name="description" value={this.state.description} placeholder="Digite a descrição do Post" onChange={this.onChange}/>
                    <input type="text" name='content' value={this.state.content} placeholder="Digite o conteudo do post" onChange={this.onChange}/>
                    <button onClick={this.post}>Enviar</button>
                </form>
            </main>
        )
    }
}

export default CreatePost
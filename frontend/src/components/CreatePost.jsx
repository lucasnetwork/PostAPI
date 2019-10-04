import React,{Component} from 'react'
import {baseApiUrl} from './../global/global.js'
import axios from 'axios'
class CreatePost extends Component{
    constructor(props){
        super(props)
        this.onChange = (e) => {
            // console.log(this.state)
            // console.log(e)
            const name = e.target.name

            this.setState({
                [name]:e.target.value
            })
        }
        this.post = (e)=>{
            e.preventDefault()
            const post = {...this.state}
            axios.post(`${baseApiUrl}/post`,post)
            
        }
        this.state=({
            title:'',
            name:'',
            description:'',
            content:'',
        })
    }
    save(){
        
    }
    render(){
        return(
            <main>
                <form>
                    <input type="text" name="title" placeholder="Digite o Titulo do texto" ref={this.state.title} onChange={this.onChange}/>
                    <input defaultValue='' type="text" name="name" placeholder="Digite o Nome do autor do Post" ref={this.state.title} onChange={this.onChange}/>
                    <input type="text" name="description" ref={this.state.description} placeholder="Digite a descrição do Post" onChange={this.onChange}/>
                    <input type="text" name='content' ref={this.state.content} placeholder="Digite o conteudo do post" onChange={this.onChange}/>
                    <button onClick={this.post}>Enviar</button>
                </form>
            </main>
        )
    }
}

export default CreatePost
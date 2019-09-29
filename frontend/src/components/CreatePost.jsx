import React,{Component} from 'react'
import {Editor,EditorState} from 'draft-js'

class CreatePost extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            description:'',
            imageUrl:'',
            content:'',
            editorState: EditorState.createEmpty()
        }
        this.onChange = (editorState) => {
            console.log(editorState)
            this.setState({editorState})}
    }
    render(){
        return(
            <main>
                <form>
                    <input type="text" placeholder="Digite o Titulo do Post"/>
                    <input type="text" placeholder="Digite a descrição do Post"/>
                    <input type="text" placeholder="Digite a Url da Imagem"/>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </form>
            </main>
        )
    }
}

export default CreatePost
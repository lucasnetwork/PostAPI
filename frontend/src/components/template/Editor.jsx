import React,{Component} from 'react'
import {Editor,convertFromRaw,EditorState,ContentState} from 'draft-js'

// class ReadOnlyEditor extends Component{
//     constructor(props){
//         const state = convertFromRaw(JSON.parse(props.state))

//         this.state = {
//         editorState: EditorState.createWithContent(state),
//         };
//     }
//     render(){
//         return(
//             <Editor editorState={this.editorState}/>
//         )
//     }
//   }

class ReadOnlyEditor extends Component{
    constructor(props){
        super(props)
        const post = JSON.parse(props.state)
        const state = convertFromRaw(post._immutable.currentContent)
        console.log(props.state)
        const editor = state.getCurrent
        this.state = {
        editorState: EditorState.createWithContent(state)
        };
    }
    // render(){
    //     return(
    //         <Editor editorState={this.editorState}/>
    //     )
    // }
  }

export default ReadOnlyEditor
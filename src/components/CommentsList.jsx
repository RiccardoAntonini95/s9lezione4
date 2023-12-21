/* CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea.(come booklist)
 La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.      this.props.commenti*/

 import React from "react";
 import SingleComment from "./SingleComment";

 class CommentsList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <div>
            <ul>
             {this.props.commenti.map((commentsLi,index) =>(
                <SingleComment arrCommenti={commentsLi} key={index}/>
             ))}
            </ul>
          </div>
        )
    }
 }

 export default CommentsList
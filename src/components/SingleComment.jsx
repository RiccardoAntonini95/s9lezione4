//deve visualizzare la singola recensione e va esportata in CommentsList per farlo
// metti commento, voto e autore e passa id come key di su Commentslist
import React from "react";

class SingleComment extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
    return(
        <li key={this.props.arrCommenti._id}>
            Comment: {this.props.arrCommenti.comment}
            Rate: {this.props.arrCommenti.rate} stars
            Author: {this.props.arrCommenti.author}
        </li>
    )
   }
}

export default SingleComment
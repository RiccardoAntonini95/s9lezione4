/* CommentArea dovrà fare il fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. 
Conterrà inoltre due sotto-componenti: CommentsList and AddComment. */

/* Fare una GET su https://striveschool-api.herokuapp.com/api/comments/ ti ritornerà TUTTI i commenti a database */

/* https://striveschool-api.herokuapp.com/api/books/0316438960/comments troverà i commenti di un singolo libro. */

//fetch di questo ma con elementId che dipende dal libro (quello tra books e comments)

//qua va fatto fetch con url + this.props.libroSingolo.asin preso da singlebook 


// passa array commenti a commentlist   tipo..   <CommentList arrLibri={l'array estratto in questa pagina messo nello state di commentarea}
                                                                       // ovvero this.state.nomestato
import React from "react";
import CommentsList from "./CommentsList";

const headerAuth = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NGUzZGI1MjViYjAwMThlZDA4MmMiLCJpYXQiOjE3MDMxNjk1OTgsImV4cCI6MTcwNDM3OTE5OH0.1BZTwgvVGULqLhp0H6JXMCwgajB0SobgiU3wAKksmSc"}

class CommentArea extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            arrComments : []
        }
    }

    getComments = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.asin ,{
            method: "GET",
            headers: headerAuth
        })
        .then(response => {
            if(response.ok){
                 return response.json()
            } else {
                 throw new Error('Errore nel recupero commenti!')
            }
        })
        .then(data =>{
            console.log(data)
            this.setState({arrComments: data})
        })
        .catch(err => {
            console.log("Errore", err)
        })
    }

    componentDidMount() {
		this.getComments();
	}

    render(){
        return(
            <>
            <CommentsList commenti={this.state.arrComments}/>
            </>
        )
    }

}

export default CommentArea
import React from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";

//FUNCTIONAL COMPONENT
/* const BookList = (props) => {
 //console.log("questo è listalibri", props.listaLibri); //array contenuto in oggetto props
  //console.log("questo è props", props); //oggetto
  return (
    <>
      <Form.Label htmlFor="searchBar">Search a book:</Form.Label>
      <Form.Control
        type="text"
        id="searchBar"
        placeholder="Search your book here.."
      />
      <Row>
        {props.listaLibri.map((book, index) => (
          <SingleBook libroSingolo={book} key={index} />
        ))}
      </Row>
    </>
  );
}; */

class BookList extends React.Component{
    state = {
        searchQuery : " "
    }

    render(){
        return(
            <>
            <Form.Label htmlFor="searchBar">Search a book:</Form.Label>
            <Form.Control
              type="text"
              id="searchBar"
              placeholder="Search your book here.."
              onChange={(e) => this.setState({ searchQuery: e.target.value })}
            /> {/* modifica lo state all'evento change e lo riutilizza sotto */}
            <Row>
                {this.props.listaLibri.filter((book) => 
                book.title.toLowerCase().includes(this.state.searchQuery))
                .map((book, index) => (
                    <SingleBook libroSingolo={book} key={index} />
                )) //filter crea un nuovo array da listaLibri con condizione l'includere la search query e poi tramite map "cicla" creando card singole
                }
            </Row>
          </>
        )
    }
}

export default BookList;

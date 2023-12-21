import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CommentArea from './CommentArea';
/*  FUNCTIONAL COMPONENT
const SingleBook = ({libroSingolo}) => {
    return (
        <Col key={libroSingolo.asin}>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={libroSingolo.img} />
                <Card.Body>
                    <Card.Title>{libroSingolo.title}</Card.Title>
                    <Card.Text>
                        {libroSingolo.category} - {libroSingolo.price}$
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
} */
// CLASS COMPONENT
class SingleBook extends React.Component {
    constructor(props){
        super(props)
        this.state = { isSelected : false }
    }
    handleClick = () => {
        this.setState({ isSelected: !this.state.isSelected }) //ad ogni clic diventa diverso da quello che è    
    }

    render(){
        return(
            <Col key={this.props.libroSingolo.asin}>
            <Card style={{width: "12rem", boxShadow: this.state.isSelected? "0px 0px 10px black" : "none"}}
            onClick={this.handleClick}
            >
                <Card.Img variant="top" src={this.props.libroSingolo.img} />
                <Card.Body>
                    <Card.Title>{this.props.libroSingolo.title}</Card.Title>
                    <Card.Text>
                        {this.props.libroSingolo.category} - {this.props.libroSingolo.price}$
                    </Card.Text>
                </Card.Body>
            </Card>
            <CommentArea /* style={{display: this.state.isSelected? "block" : "none"}} *//>
           {/*  qua dentro va short-circuit operator, quando è true isSelected mostra commentArea insieme a boxshadow   */}
           {/* qua commentarea fa fetch usando this.props.libroSingolo.asin nell'url come fosse elementId dell'API */}
        </Col>
        )
    }
}

export default SingleBook



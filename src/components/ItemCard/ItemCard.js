import React from 'react';
import {Button, Card, Row, Col,Container}  from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {getAllProducts} from '../../services/DbServices'
import Badge from "react-bootstrap/Badge";


class ItemCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    defineRatingValue() {
        let total = 0
        this.props.ratings.forEach(rating => {
            total += rating.rating
        })
        return (total / this.props.ratings.length)
    }
    generateCategories(){
       return this.props.categories.map((categorie)=>{
            return <div className="horizontal-scroller-item "><Badge pill variant="primary">{categorie}</Badge></div>
        })
    }

    render() {

        return (<Card className="item-card">
            <Card.Img onClick={() => {
                console.log("go to page")
            }} variant="top" src={this.props.image_url}/>
            <Card.Body onClick={() => {
                console.log("go to page")
            }}>
                <Card.Title>{this.props.title}</Card.Title>  <Container className="horizontal-scroller">{this.generateCategories()}</Container>
                <Row>

                <Col><StarRatingComponent
                    name={this.props.title}
                    starCount={5}
                    value={this.defineRatingValue()}
                /></Col>
                <Col>{this.props.seller_pseudo}</Col>
            </Row>
                <Card.Text>
                    {this.props.description}
                </Card.Text>

            </Card.Body><Button variant="primary" onClick={() => {
            console.log("au panier")
        }}>{this.props.price} € </Button>
        </Card>);
    }
}


export default ItemCard;
import React from 'react';
import {Button, Card, Row,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {getAllProducts} from '../../services/DbServices'


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
        return (total/ this.props.ratings.length)
    }

    render() {

        return (<Card className="item-card">
            <Card.Img variant="top" src={this.props.image_url}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title><Row>
                <Col><StarRatingComponent
                    name={this.props.title}
                    starCount={5}
                    value={this.defineRatingValue()}
                /></Col>
            </Row>
                <Card.Text>
                    {this.props.description}

                </Card.Text>
                <Button variant="primary">{this.props.price} € </Button>
            </Card.Body>
        </Card>);
    }
}


export default ItemCard;
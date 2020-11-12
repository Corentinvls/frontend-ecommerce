import React from 'react';
import { Button ,Card,Container,Row,Col} from 'react-bootstrap';
import {getAllProducts} from '../../services/DbServices'
import ItemCard from "../ItemCard/ItemCard";


class ProductSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            result:[]
        }
    }
    componentDidMount() {
        getAllProducts().then((result)=> this.setState({result:result.data}))
    }
    generateView(){
        return  this.state.result.map((res,index)=>{
            return (<div className="horizontal-scroller-item"><ItemCard  key={index} {...res}/></div>)
        })
    }


    render() {

        return (<Container  fluid className="horizontal-scroller">{this.generateView()} </Container>);
    }
}

export default ProductSection;
import React from 'react';
import { Button ,Card,Container,Row,Col} from 'react-bootstrap';
import {getAllProducts} from '../../services/DbServices'
import ItemCard from "../ItemCard/Test";


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
            return (<ItemCard key={index} {...res}/>)
        })
    }


    render() {

        return (<Container><Row>{this.generateView()} </Row></Container>);
    }
}

export default ProductSection;
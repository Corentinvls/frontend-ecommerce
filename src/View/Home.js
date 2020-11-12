import React from 'react';
import ProductSection from "../components/productSection/ProductSection";
import {Container,Button} from "react-bootstrap";
import LogModal from "../components/LogModal/LogModal";


class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (<Container fluid><ProductSection/>
            <Button onClick={()=>{
                console.log("coucou")}}>Créer un produit</Button>
            <createProductModal show={this.state.modalLog} toggle={() => this.toggleModal()}/></Container>);
    }
}

export default Home;
import React from 'react';
import ProductSection from "../components/productSection/ProductSection";
import {Container} from "react-bootstrap";


class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (<Container fluid><ProductSection/></Container>);
    }
}

export default Home;
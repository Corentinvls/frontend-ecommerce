import React from 'react';
import { Button ,Card,Container} from 'react-bootstrap';
const axios = require('axios');

class Test extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            baseUrl:'http://localhost:3000',
            result:[]
    }
}
    componentDidMount() {

        axios.get(this.state.baseUrl+"/products").then((result)=> this.setState({result:result.data}))

    }
    generateView(){
        console.log(this.state)
       return  this.state.result.map((res)=>{
           return (<Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={res.image_url} />
               <Card.Body>
                   <Card.Title>{res.title}</Card.Title>
                   <Card.Text>
                       {res.description}
                   </Card.Text>
                   <Button variant="primary">{res.price}</Button>
               </Card.Body>
           </Card>)
        })
    }


    render() {

        return (<Container>{this.generateView()} </Container>);
    }
}

export default Test;
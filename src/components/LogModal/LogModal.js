import React from 'react';
import {Modal, Form,Col,Button} from "react-bootstrap";



class LogModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            firstname:"",
            lastname:"",
            seller:true
        }
    }



    render() {
        return (
            <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.show} onHide={()=>this.props.toggle()}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Inscription
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password"  value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstname">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control  value={this.state.firstname} onChange={(e)=>this.setState({firstname:e.target.value})}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control value={this.state.lastname} onChange={(e)=>this.setState({lastname:e.target.value})}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" checked={this.state.seller} onChange={()=>this.setState({seller:!this.state.seller})} label="Je souhaite être vendeur" />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outlined" onClick={() =>{
                    console.log("je m'inscrit")}}>J'ai déjà un compte</Button>
                <Button variant="primary" onClick={() =>{
                    console.log(this.state)}}>Je m'inscrit</Button>
            </Modal.Footer>
        </Modal>);
    }
}

export default LogModal;
import React from 'react';
import {Modal, Form, Col, Button} from "react-bootstrap";
import {checkIfUserExist, connect, subscribe} from '../../services/DbServices'


class CreateProductModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.props.show} onHide={() => this.props.toggle()}
            >


                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Création d'un produit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nom de produit</Form.Label>
                                <Form.Control
                                              value={this.state.title}
                                              onChange={(e) => {this.setState({title: e.target.value})}}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Catégories</Form.Label>
                                <Form.Control  value={this.state.password}
                                              onChange={(e) => this.setState({password: e.target.value}, () => this.checkPassword())}/>
                                {(!this.state.regexPassword && this.state.displayRegexFail) &&
                                <Form.Text muted>
                                    Votre mot de passe doit contenir au moins 6 caractères 1 minuscule 1 majuscule 1
                                    chiffre
                                </Form.Text>}
                            </Form.Group>
                        </Form.Row>
                        {this.state.register &&

                        [<Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstname">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control value={this.state.firstname}
                                              onChange={(e) => this.setState({firstname: e.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLastname">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control value={this.state.lastname}
                                              onChange={(e) => this.setState({lastname: e.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPseudo">
                                <Form.Label>Pseudo</Form.Label>
                                <Form.Control value={this.state.pseudo}
                                              onChange={(e) => this.setState({pseudo: e.target.value}, () => this.checkPseudo())}/>
                                {(!this.state.regexPseudo && this.state.displayRegexFail) &&
                                <Form.Text muted>
                                    Votre pseudo doit contenir au moins 2 caractères
                                </Form.Text>}
                                {this.state.pseudoAlreadyExist &&
                                <Form.Text muted>
                                    L'utilisateur existe déjà
                                </Form.Text>}
                            </Form.Group>
                        </Form.Row>,

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" checked={this.state.seller}
                                            onChange={() => this.setState({seller: !this.state.seller})}
                                            label="Je souhaite être vendeur"/>
                            </Form.Group>]
                        }
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outlined" onClick={() => {
                        this.setState({register: !this.state.register})
                    }}>
                        {this.state.register ? "J'ai déja un compte" : "je n'ai pas de compte"}
                    </Button>
                    <Button variant="primary" onClick={async () => {
                        await this.submit();
                    }
                    }>
                        {this.state.register ? "Je m'inscrit" : "Je me connecte"}
                    </Button>
                </Modal.Footer>
            </Modal>);
    }
}

export default CreateProductModal;
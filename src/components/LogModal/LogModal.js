import React from 'react';
import {Modal, Form, Col, Button} from "react-bootstrap";
import {checkIfUserExist, connect, subscribe} from '../../services/DbServices'


class LogModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            register: true,
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            pseudo: "",
            seller: true,
            login: "",
            regexMail: false,
            mailAlreadyExist: false,
            pseudoAlreadyExist: false,
            regexPassword: false,
            displayRegexFail: false
        }
    }

    checkEmail() {
        if (/^[a-zA-Z0-9].+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
            checkIfUserExist("email", this.state.email).then(r => {
                this.setState({mailAlreadyExist: r.data})
            })
            this.setState({regexMail: true})
        } else {
            this.setState({regexMail: false})
        }
    }

    checkPassword() {
        if (/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{6,})/.test(this.state.password)) {
            this.setState({regexPassword: true})
        } else {
            this.setState({regexPassword: false})
        }
    }

    checkPseudo() {
        if (/^(?=.{6,})/.test(this.state.pseudo)) {
            checkIfUserExist("pseudo", this.state.pseudo).then(r => {
                this.setState({pseudoAlreadyExist: r.data})
            })
            this.setState({regexPseudo: true})
        } else {
            this.setState({regexPseudo: false})
        }
    }

    async submit() {
        if (this.state.register) {
            if (this.state.regexMail && this.state.regexPassword && !this.state.mailAlreadyExist && !this.state.pseudoAlreadyExist) {
                await subscribe({
                        lastname: this.state.lastname, firstname: this.state.firstname,
                        pseudo: this.state.pseudo,
                        password: this.state.password,
                        email: this.state.email
                    }).then(() => {
                    this.props.toggle();
                    alert("Votre inscription à bien était enregistrer");
                })
            } else {
                this.setState({displayRegexFail: true})
                alert("formulaire invalide");
            }

        } else {
            await connect({login: this.state.login, password: this.state.password}).then(() => {
                alert("Bienvenu");
            })
        }
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
                        {this.state.register ? "Inscription" : "Connection"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>{this.state.register ? "Email" : "Email ou pseudo"}</Form.Label>
                                <Form.Control type="email"
                                              value={this.state.register ? this.state.email : this.state.login}
                                              onChange={(e) => {
                                                  this.setState({email: e.target.value}, () => this.checkEmail())
                                              }}/>
                                {(!this.state.regexMail && this.state.displayRegexFail) &&
                                <Form.Text muted>
                                    Votre Email n'est pas valide
                                </Form.Text>}
                                {this.state.mailAlreadyExist &&
                                <Form.Text muted>
                                    L'utilisateur existe déjà
                                </Form.Text>}

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" value={this.state.password}
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

export default LogModal;
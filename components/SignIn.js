import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Message, Grid, Segment, Header, List, Container, Image } from 'semantic-ui-react';
import AuthValidation from '../utils/AuthValidation';
import styles from "../styles/App.module.css";

class SignIn extends Component {
    state = {
        username: '',
        password: '',
        alertMessage: '',
        status: '',
        loggedIn: false,
    }

    onSignIn = async () => {

        if (this.state.username !== '' && this.state.password !== '') {
            let username = this.state.username.trim();
            let password = this.state.password.trim();

            let usernameToSend = username;

            if (password.length < 8) {
                this.setState({
                    alertMessage: "Introducir al menos 8 caracteres para la contraseña",
                    status: 'failed',
                    password: '',
                });
                return;
            } 
                   
            let userAddress = await this.props.contract.methods.getUserAddress()
                .call({ from: this.props.account });

            if (userAddress === '0x0000000000000000000000000000000000000000') {
                this.setState({
                    alertMessage: 'La cuenta no existe',
                    status: 'failed',
                    username: '',
                    password: '',
                });
                return;
            } else {
                let validated = await
                    AuthValidation(
                        username,
                        this.props.account,
                        password,
                        this.props.web3,
                        this.props.contract
                    );

                if (!validated) {
                    this.setState({
                        alertMessage: 'Inicio de sesión incorrecto',
                        status: 'failed',
                        username: '',
                        password: '',
                    });
                    return
                } else {
                    this.props.userSignedIn(
                        this.state.loggedIn = true,
                        usernameToSend
                    );

                    return;
                }
            }
        }
    
        this.setState({
            username: '',
            password: '',
        })
    }
    render() {
        return (
            <div className={styles.signup}>
                <div className={styles.signupform}>
                    <Card fluid centered>
                        <Card.Content> Iniciar sesión
                            <Form size='large'>
                                {
                                    this.state.alertMessage !== '' && this.state.status === 'failed' ?
                                        <Message negative>
                                            {this.state.alertMessage}
                                        </Message> :
                                    this.state.alertMessage !== '' && this.state.status === 'success' ?
                                        <Message positive>
                                            {this.state.alertMessage}
                                        </Message> :
                                            console.log('')
                                }
                                &nbsp;
                                &nbsp;
                                <Form.Field required>
                                    <input
                                        type='text'
                                        placeholder='usuario'
                                        value={this.state.username}
                                        autoComplete="usuario"
                                        onChange={e => this.setState({ username: e.target.value })}
                                    />
                                </Form.Field>
                                &nbsp;
                                &nbsp;
                                <Form.Field required>
                                    <input
                                        type='password'
                                        placeholder='Contraseña'
                                        value={this.state.password}
                                        autoComplete="current-password"
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </Form.Field>
                                &nbsp;
                                &nbsp;
                                <Form.Field>
                                    <Button type='submit' primary fluid size='large' onClick={this.onSignIn}>
                                        Iniciar sesión
                                    </Button>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                    </Card>

                    {
                        this.props.signedUp ?
                            console.log() :
                            <div className={styles.signinonUp}>
                                ¿No tienes una cuenta? <Link to='/sign-up'>Registrate</Link>
                            </div>
                    }
                </div>
                &nbsp;
                &nbsp;
                <div className={styles.signinpie}>
                    2023 Blockchain. Todos los derechos reservados
                </div>

                <div className={styles.signinpie}>
                    Términos y Condiciones | Políticas de Privacidad | Desarrollado por Insiscomp
                </div>
                &nbsp;
                &nbsp;
                <Segment inverted vertical style={{ padding: '6m 0em' }}>
                    <Container >
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={4}>
                                    <Header inverted as='h4' content='Descentralización' />
                                    <List link inverted>
                                        <List.Item as='a'>La seguridad y la privacidad</List.Item>
                                        <List.Item as='a'>Blockchain más allá de la Tecnología</List.Item>
                                        <List.Item as='a'>y de las Criptomonedas.</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Blockchain' />
                                    <List link inverted>
                                        <List.Item as='a'>Solidity</List.Item>
                                        <List.Item as='a'>Criptomonedas</List.Item>
                                        <List.Item as='a'>NFT</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <Header as='h4' inverted>
                                        Insiscomp
                                    </Header>
                                    <p>
                                        Accede a los cursos de tecnología más novedosos y destacados del mercado.
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={2}>
                                    <Image bordered rounded size='large' src='https://emprende.municipiodequeretaro.gob.mx/uploads/2020-03/4_20200304104551_SU5TSV.png' />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default SignIn

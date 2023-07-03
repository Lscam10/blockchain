import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Message, Grid, Segment, Header, List, Container, Image } from 'semantic-ui-react';
import AuthenticationHash from '../utils/AuthenticationHash';
import styles from '../styles/App.module.css';

class SignUp extends Component {
    state = {
        username: '',
        password: '',
        alertMessage: '',
        status: '',
        signedUp: false
    }

    onSignUp = async () => {

        if (this.state.username !== '' && this.state.password !== '') {
            let username = this.state.username.trim();
            let password = this.state.password.trim();

            if (password.length < 8) {
                this.setState({
                    alertMessage: "Contraseña mínima de ocho caracteres",
                    status: 'failed',
                    password: '',
                });
                return;
            } else {
                let userAddress = await this.props.contract.methods.getUserAddress()
                    .call({ from: this.props.account });

                if (userAddress !== '0x0000000000000000000000000000000000000000') {
                    this.setState({
                        alertMessage: 'Esta cuenta ya existe',
                        status: 'failed',
                        username: '',
                        password: '',
                    });

                    return;
                } else {
                    let hash = await AuthenticationHash(username, this.props.account, password, this.props.web3);

                    await this.props.contract.methods.register(hash).send({ from: this.props.account });

                    this.setState({
                        username: '',
                        password: '',
                        status: 'success',
                        alertMessage: "Registro exitoso",
                        signedUp: true
                    });

                    this.props.accountCreated(this.state.signedUp);
                    return;
                }
            }
        }

    }

    render() {
        return (
            <div className= {styles.signup}>
                <div className= {styles.signupform}>
                    <Card fluid centered>
                        <Card.Content> Registrate
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
                                <Form.Field>
                                    <input
                                        required
                                        type='text'
                                        placeholder='usuario'
                                        value={this.state.username}
                                        autoComplete="username"
                                        onChange={e => this.setState({ username: e.target.value })}
                                    />
                                </Form.Field>
                                &nbsp;
                                &nbsp;
                                <Form.Field>
                                    <input
                                        required
                                        type='password'
                                        placeholder='contraseña'
                                        value={this.state.password}
                                        autoComplete="current-password"
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </Form.Field>
                                &nbsp;
                                &nbsp;
                                <Form.Field>
                                    <Button type='submit' primary fluid size='large' onClick={this.onSignUp}>
                                        Crear cuenta
                                    </Button>
                                </Form.Field>
                            </Form>
                        </Card.Content>
                    </Card>
                    <div className={styles.signinonUp}>
                        ¿Ya tienes una cuenta? <Link to='/sign-in'>Iniciar sesión</Link>
                    </div>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <div className={styles.signinpie}>
                   Al hacer clic en "Crear cuenta", acepta los términos de servicio y la política de privacidad.
                </div>
                <div className={styles.signinpie}>
                2023 Blockchain. Todos los derechos reservados
                </div>
                &nbsp;
                &nbsp;
                <Segment inverted vertical style={{ padding: '6m 0em' }}>
                    <Container>
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

export default SignUp;

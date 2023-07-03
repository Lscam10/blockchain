import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import {
    Container,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

class Home extends Component {

    render() {
        return (
            <div>
                <Segment inverted vertical style={{ padding: '9em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header
                                        as='h1'
                                        content='Sistema de Registro de '
                                        inverted
                                        style={{

                                            fontSize: '4em',
                                            fontWeight: 'normal',
                                            Top: '0em',
                                            fontFamily: 'Georgia',
                                        }}
                                    />
                                    <Header
                                        as='h1'
                                        content='Usuario en Blockchain'
                                        inverted
                                        style={{
                                            fontSize: '4em',
                                            fontWeight: 'normal',
                                            Top: '0em',
                                            fontFamily: 'Georgia',
                                        }}
                                    />
                                    <Header
                                        as='h2'
                                        content='Asegúrese de que sus registros estén sanos y salvos'
                                        inverted
                                        style={{
                                            fontSize: '1.7em',
                                            fontWeight: 'normal',
                                            marginTop: '1.5em',
                                        }}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                &nbsp;
                &nbsp;

                {/* <Segment style={{ padding: '1em' }} vertical>
                </Segment> */}
                <Carousel />
                <Segment style={{ padding: '1em' }} vertical>
                </Segment>

                <Grid.Column floated='right' width={6}>
                </Grid.Column>
                <Segment style={{ padding: '3em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    INSISCOMP
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Empresa 100% mexicana, dedicada al desarrollo de software, soporte técnico, venta de
                                    hardware, capacitación en diferentes tecnologías y Coaching empresarial y ejecutivo..</p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Innovando Sistemas Comunicando Personas
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    La transformación digtal como eje para la evolución de tu empresa,
                                    aplicando tecnologías de la información ágiles.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src='https://emprende.municipiodequeretaro.gob.mx/uploads/2020-03/4_20200304104551_SU5TSV.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Bienvenido a Blockchain
                                </Header>
                                <p style={{ fontSize: '1.33em' }}>  Entra en una nueva economía.
                                    La seguridad y la privacidad de Blockchain más allá de la Tecnología
                                    y de las Criptomonedas.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src='https://cryptoast.fr/wp-content/uploads/2019/01/blockchain-avantages-inconvenients.jpg' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment style={{ padding: '1em' }} vertical>
                </Segment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Desarrollo' />
                                    <List link inverted>
                                        <List.Item as='a'>COBOL</List.Item>
                                        <List.Item as='a'>React Native</List.Item>
                                        <List.Item as='a'>PHP</List.Item>
                                        <List.Item as='a'>API</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Servicios Blockchain' />
                                    <List link inverted>
                                        <List.Item as='a'>Sistemas Blockchain</List.Item>
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
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>

            </div>
        );
    }

}

export default Home;



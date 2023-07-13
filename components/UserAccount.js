import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '../routes';
import { Router } from '../routes';
import Web3 from '../ethereum/web3';
//import dynamic from "next/dynamic";

import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const HomepageHeading = ({ mobile }) => (
  <Container text>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
    <Header
      as='h1'
      content='Sistema de Registro de Usuario en Blockchain'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1.5em',
        fontFamily: 'Georgia',
      }}
    />
    <Header
      as='h2'
      content='Asegúrese de que sus registros estén sanos y salvos'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  onClickedUserEdit = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/edit/${accounts[0]}`);
  }


  // onClickedUserList = async event => {
  //   event.preventDefault();
  //   const accounts = await Web3.eth.getAccounts();
  //   Router.pushRoute(`/list/${accounts[0]}`);
  // }

  onClickedUserregister = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/register/${accounts[0]}`);
  }

  onClickedUserDocument = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/document/${accounts[0]}`);
  }

  onClickedUserPerfil = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }


  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu size='large' inverted>
              <Menu.Menu position='right'>               
            {/* <Dropdown item text='Lista'>
              <Dropdown.Menu>
                <Dropdown.Item>
                <Link route='/list' style={{ color: 'black' }} onClick={this.onClickedUserList}>Lista</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
               
               
                <Dropdown item text='Usuario'>
                  <Dropdown.Menu>
                  <Dropdown.Item>
                <Link route='/details' style={{ color: 'black' }} onClick={this.onClickedUserPerfil}>Perfil</Link>
                </Dropdown.Item>
                    <Dropdown.Item>
                    <Link route='/edit' style={{ color: 'black' }} onClick={this.onClickedUserEdit}>Editar Perfil</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown item text='Registrar'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                    <Link route='/register' style={{ color: 'black' }} onClick={this.onClickedUserregister}>Usuario</Link>
                    </Dropdown.Item>
                    {/* <Dropdown.Item>
                    <Link route='/document' style={{ color: 'black' }} onClick={this.onClickedUserDocument}>Documento</Link>
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>

              </Menu.Menu>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  onClickedUserEdit = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/edit/${accounts[0]}`);
  }

  // onClickedUserList = async event => {
  //   event.preventDefault();
  //   const accounts = await Web3.eth.getAccounts();
  //   Router.pushRoute(`/list/${accounts[0]}`);
  // }

  onClickedUserregister = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/register/${accounts[0]}`);
  }

  onClickedUserDocument = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/document/${accounts[0]}`);
  }

  onClickedUserPerfil = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/record/${accounts[0]}`);
  }


  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            {/* <Dropdown item text='Lista'>
              <Dropdown.Menu>
                <Dropdown.Item>
                <Link route='/list' style={{ color: 'black' }} onClick={this.onClickedUserList}>Lista</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            <Dropdown item text='Usuario'>
              <Dropdown.Menu>
              <Dropdown.Item>
                  <Link route='/details' style={{ color: 'black' }} onClick={this.onClickedUserPerfil}>Editar Perfil</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link route='/edit' style={{ color: 'black' }} onClick={this.onClickedUserEdit}>Editar Perfil</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='Registrar'>    
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register' style={{ color: 'black' }} onClick={this.onClickedUserregister}>Usuario</Link>                  
                </Dropdown.Item>
                {/* <Dropdown.Item>
                    <Link route='/document' style={{ color: 'black' }} onClick={this.onClickedUserDocument}>Documento</Link>
                    </Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const UserAccount = () => (
  <ResponsiveContainer>
             <Segment style={{ padding: '0em' }} vertical>
                </Segment>
                <Segment style={{ padding: '3em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '3em' }}>
              Bienvenido Usuario
            </Header>

            <Segment style={{ padding: '0em 0em' }} vertical></Segment>
            &nbsp;
            &nbsp;
            <p style={{ fontSize: '1.33em' }}>
              Blockchain es una de las tecnologías que se esta utilizando hoy en día y que se hizo famosa al ser la tecnología que está
              detrás del Bitcoin.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              ¿Porqué Blockchain?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Blockchain aumenta la confianza, la seguridad, la transparencia y la trazabilidad de los datos compartidos en una red empresarial, aumentando los ahorros en costos gracias a sus nuevas eficiencias.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://static.toiimg.com/photo/msid-88116362/88116362.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

<Segment style={{ padding: '1em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '0em', paddingTop: '0em' }}>
          <Header as='h3' style={{ fontSize: '2em' }} >
              Blockchain en las Industrias
            </Header>  
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
            <p style={{ fontSize: '1.33em' }}>- Blockchain en cadenas de suministro y cadena alimentaria.</p>
            <p style={{ fontSize: '1.33em' }}>- Blockchain de la industria bancaria y financiera.</p>
            <p style={{ fontSize: '1.33em' }}>- Blockchain para la salud.</p> 
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '2em', paddingTop: '2em' }}>
          <p style={{ fontSize: '1.33em' }}>- Blockchain a la industria farmacéutica.</p>
          <p style={{ fontSize: '1.33em' }}>- Blockchain en el gobierno.</p>
          <p style={{ fontSize: '1.33em' }}>- Blockchain para los seguros.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Registro en Blockchain
        </Header>
        <p style={{ fontSize: '1.22em' }}>   
        Las empresas están utilizando blockchain y los contratos inteligentes para automatizar procesos manuales y que
        requieren mucho papel; blockchain puede ayudar a mejorar la seguridad de la información de los usuarios y, al
        mismo tiempo, facilitar el intercambio de registros entre personas a fines. Los intercambios de datos verificables
        y más rápidos de Blockchain ayudan a reducir el fraude y el abuso.
        </p>
      </Container>
    </Segment>
   
      <Segment style={{ padding: '1em' }} vertical> </Segment>
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

  </ResponsiveContainer>
)

export default UserAccount;

//*******************************************************************************************************/
//*******************************************************************************************************/
//*                    APP.JS                                                                           */
//*******************************************************************************************************/
//http://localhost:3000/
//============================================================================================================
//============================================================================================================
// import React, { Component } from 'react';
// // import { Card, Message, Grid } from 'semantic-ui-react';
// import { Form, Button, Card, Message, Grid, Segment, Header, List, Container, Image } from 'semantic-ui-react';
// import styles from '../styles/App.module.css';
// import Layout from '../components/Layout';


// class UserAccount extends Component {

//     renderDisplay() {

//         return (
//             <div className={styles.useraccount}>
//                 <Grid centered stackable>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Card fluid>
//                                 <Card.Content style={{ margin: 'auto', fontSize: '2em', fontWeight: 'normal', Top: '10em', fontFamily: 'Georgia', }}> Bienvenido Usuario
//                                     &nbsp;
//                                     &nbsp;
//                                 </Card.Content>
//                                 <Card.Header style={{ margin: 'auto', fontSize: '2em', fontWeight: 'normal', Top: '100em', fontFamily: 'Georgia', }}
//                                 >{this.props.username}
//                                 </Card.Header>
//                                 &nbsp;
//                                 &nbsp;
//                                 <Card.Header style={{ margin: '25px', fontSize: '1.5em', fontWeight: 'normal', Top: '0em', fontFamily: 'Georgia', }}>
//                                     Dirección de usuario:
//                                 </Card.Header>
//                                 <Card.Content extra>
//                                     <Message size='100px'>
//                                         {this.props.account.toLowerCase()}
//                                     </Message>
//                                 </Card.Content>
//                             </Card>
//                         </Grid.Column>

                        
//                     </Grid.Row>

                    
//                 </Grid>

//                 <Segment style={{ padding: '1em' }} vertical>
//                 </Segment>

                

                
//             </div>
//         );

//     }


//     render() {
//         return (
//             <Layout>
//                 <div style={{ fontFamily: 'Helvetica' }}>{this.renderDisplay()}</div>
//             </Layout>
//         );
//     }
// }

// export default UserAccount;

// // ==========================================================================================================
// // ==========================================================================================================



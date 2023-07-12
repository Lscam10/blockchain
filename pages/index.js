import React, { Component } from "react";
import web3 from '../ethereum/web3';
import Formate from '../utils/Formate';
import 'semantic-ui-css/semantic.min.css'
import { Menu, Divider } from "semantic-ui-react";
import { BrowserRouter, Switch, Route, Link, Redirect  } from 'react-router-dom';
import Home from '../components/Home';
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn"
import SignOut from "../components/SignOut";
import UserAccount from '../components/UserAccount';
import styles from "../styles/App.module.css";
import Record from '../ethereum/build/Record.json';

class index extends Component {
  state = {
    web3: null,
    account: null,
    contract: null,
    balance: null,
    activeItem: 'home',
    signedUp: false,
    loggedIn: false,
    username: ''
    //color: 'teal'
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name, color: 'teal' })

  componentDidMount = async () => {
    try {

      const contract = new web3.eth.Contract((Record.abi),
  '0x5718F4F37C30466FEB99a34e41EA562cbF5d3AA1'       
  )

      // const accounts = await web3.eth.getAccounts();
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      this.setState({ web3, contract, account: accounts[0] }, this.start);
    } catch (error) {
      alert(
        `Error al cargar web3`,
      );
      console.error(error);
    }

    await this.getAccount();
  };

  start = async () => {
    await this.getAccount();
    const { web3, contract, account } = this.state;

    console.log("web3 =", web3);
    console.log("Contract =", contract);
    console.log("Account =", account);
  };

  getAccount = async () => {
    if (this.state.web3 !== null || this.state.web3 !== undefined) {
      await window.ethereum.on('accountsChanged', async (accounts) => {
        this.setState({
          account: accounts[0],
          loggedIn: false
        });

        this.state.web3.eth.getBalance(accounts[0], (err, balance) => {
          if (!err) {
            this.setState({ balance: Formate(this.state.web3.utils.fromWei(balance, 'ether')) });
          }
        });
      });
    }
  }

  accountCreated = async (signedUp) => {
    this.setState({ signedUp });
  }

  userSignedIn = async (loggedIn, username) => {
    this.setState({ loggedIn, username });
  }

  loggedOut = async (loggedIn) => {
    this.setState({ loggedIn });
  }

  render() {
    const { activeItem, color } = this.state;

    if (!this.state.web3) {
      return <div>Cargando Web3, cuentas y contrato...</div>;
    }
    return (
      <div className={styles.App}>
        <div className={styles.mainpage}>
          <BrowserRouter>
            <div className={styles.homenav}>
              <Menu stackable inverted secondary size='large'>
                <Menu.Item
                  name='home'
                  color={color}
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/'
                />
                {
                 this.state.loggedIn ?
                 <Menu.Item
                   position='right'
                   name='Cuenta de Usuario'
                   color={color}
                   active={activeItem === 'Cuenta de Usuario'}
                   onClick={this.handleItemClick}
                   as={Link}
                   to='/UserAccount'
                 />
                 :
                 console.log('')
             }
             {
                  !this.state.loggedIn ?
                    <Menu.Item
                      position='right'
                      name='Iniciar sesión'
                      color={color}
                      active={activeItem === 'Iniciar sesión'}
                      onClick={this.handleItemClick}
                      as={Link}
                      to='/sign-in'
                    />
                    :
                    console.log('')
                }

                {
                  this.state.loggedIn ?
                    <Menu.Item
                      name='Cerrar Sesión'
                      color='red'
                      active={activeItem === 'Cerrar Sesión'}
                      onClick={this.handleItemClick}
                      as={Link}
                      to='/sign-out'
                    />
                    :
                    <Menu.Item
                      name='Registrarse'
                      color={color}
                      active={activeItem === 'Registrarse'}
                      onClick={this.handleItemClick}
                      as={Link}
                      to='/sign-up'
                    />
                }
              </Menu>
            </div>
            <Divider inverted />

            <Switch>
              <Route exact path='/' >
                <Home />
              </Route>

              {
                this.state.loggedIn ?
                  <Route path='/UserAccount' >
                    <UserAccount />
                  </Route>
                  :
                  <Route path='/UserAccount'>
                    Has sido desconectado
                  </Route>
              }
              {
                <Route path='/sign-in' >
                  {
                    this.state.loggedIn ?
                      <Redirect to='/UserAccount' />
                      :
                      <SignIn
                        web3={this.state.web3}
                        contract={this.state.contract}
                        account={this.state.account}
                        signedUp={this.state.signedUp}
                        userSignedIn={this.userSignedIn}
                      />
                  }
                </Route>
              }

              {
                this.state.loggedIn ?
                  <Route path='/sign-out'>
                    <SignOut
                      loggedOut={this.loggedOut}
                    />
                    Has sido desconectado
                    <br></br>
                    Gracias
                  </Route>
                  :
                  <Route path='/sign-up' >
                    <SignUp
                      web3={this.state.web3}
                      contract={this.state.contract}
                      account={this.state.account}
                      accountCreated={this.accountCreated}
                    />
                  </Route>
              }
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default index;

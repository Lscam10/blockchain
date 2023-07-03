import React, { Component } from 'react';
import { Menu, Dropdown} from 'semantic-ui-react';
//import record from '../ethereum/record';
import Web3 from '../ethereum/web3';
import { Link } from '../routes';
import { Router } from '../routes';



export default class MenuBar extends Component {

  onClickedUserEdit = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/edit/${accounts[0]}`);
  }

  onClickedUserList = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/list/${accounts[0]}`);
  }

  onClickedUserregister = async event => {
    event.preventDefault();
    const accounts = await Web3.eth.getAccounts();
    Router.pushRoute(`/register/${accounts[0]}`);
  }
 
  render() {
    return (
      <Menu size='large' inverted>

<Link route='/' className='item'>Cerrar sesión</Link>


          <Menu.Menu position='right'>

            {/* <Link route='/list' className='item'>Lista de Registros</Link> */}
            <Dropdown item text='Lista'>
              <Dropdown.Menu>
                <Dropdown.Item>
                <Link route='/list' style={{ color: 'black' }} onClick={this.onClickedUserList}>Lista</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown item text='Usuario'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/edit' style={{color:'black'}} onClick={this.onClickedUserEdit}>Editar Perfil</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Registro'>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link route='/register' style={{color:'black'}} onClick={this.onClickedUserregister}>Usuario</Link>            
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Menu.Menu>
      </Menu>  
    );
  }
}
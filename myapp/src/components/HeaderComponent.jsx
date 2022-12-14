import React, { Component } from 'react'
import { Link, Redirect, browserHistory } from 'react-router-dom'
import { Menu,Image } from 'semantic-ui-react'
import ModalComponentCreate from './ModalComponentCreate'

export default class HeaderComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted className='fixed' stackable>
          <Menu.Item
            as={Link}
            to="/Game"
            name='Game'
            active={activeItem === 'Game'}
            onClick={this.handleItemClick}
          >
            <Image src={"https://cdn.discordapp.com/attachments/1052126650646675456/1052243988624707636/Pokemon_Sus.png"} size='tiny'/>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/"
            name='Pokemon'
            active={activeItem === 'Pokemon'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Pokedex"
            name='Pokedex'
            active={activeItem === 'Pokedex'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Admin"
            name='Panel Admin'
            active={activeItem === 'Admin'}
            onClick={this.handleItemClick}
          />
          <ModalComponentCreate />
        </Menu>
     
    )
  }
}
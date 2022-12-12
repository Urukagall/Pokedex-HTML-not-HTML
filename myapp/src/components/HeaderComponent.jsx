import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import Pokedex from '../pages/Pokedex'
import Pokemon from '../pages/Pokemon'

export default class HeaderComponent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/">
            <Menu.Item
              name='Pokemon'
              active={activeItem === 'Pokemon'}
            />
          </Link>
          <Link to="/pokedex">
            <Menu.Item
              name='Pokedex'
              active={activeItem === 'Pokedex'}
            />
          </Link>
        </Menu>
      </Segment>
    )
  }
}
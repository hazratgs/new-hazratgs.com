import React, { PureComponent } from 'react'
import { Wrapper, Logo, Profile, Geolocation } from './styles'

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo>
          <img src='/hazratgs.jpg' alt='hazratgs'/>
        </Logo>
        <Profile>
          <h1>Хазрат Гаджикеримов</h1>
          <p>Backend and Frontend Developer</p>
          <Geolocation>
            <img src='/map.svg' alt='Derbent, Russia Federation'/>
            <span>Дербент, Республика Дагестан</span>
          </Geolocation>
        </Profile>
      </Wrapper>
    )
  }
}

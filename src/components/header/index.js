import React, { PureComponent } from 'react'
import { Wrapper, Logo, Profile, Geolocation } from './styles'

export default class Header extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo>
          <img src='/hazrat-gadjikerimov.jpg' alt='Hazrat Gadjikermov'/>
        </Logo>
        <Profile>
          <h1>Хазрат Гаджикеримов</h1>
          <p>Frontend developer</p>
          <Geolocation>
            <img src='/map.svg' alt='Derbent, Russia Federation'/>
            Дербент, Республика Дагестан
          </Geolocation>
        </Profile>
      </Wrapper>
    )
  }
}

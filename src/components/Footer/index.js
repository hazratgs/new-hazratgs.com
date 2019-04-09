import React from 'react'
import { Footer, Copyright, Nav, Link } from './styles'

export default () => {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <Nav>
        <Link target='_blank' href='https://github.com/hazratgs'>
          <img src='/github.svg' alt='github'/>
          <span>GitHub</span>
        </Link>
        <Link target='_blank' href='https://t.me/hazratgs'>
          <img src='/telegram.png' alt='telegram'/>
          <span>Telegram</span>
        </Link>
        <Link href='mailto:hazratgs@gmail.com'>
          <img src='/arroba.svg' alt='email'/>
          <span>Email</span>
        </Link>
      </Nav>
      <Copyright>© 2012–{year} Хазрат Гаджикеримов</Copyright>
    </Footer>
  )
}

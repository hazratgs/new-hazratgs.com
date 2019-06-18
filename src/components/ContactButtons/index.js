import React from 'react'
import { Nav, Link } from './styles'

const ContactButtons = () => (
  <>
    <Nav>
      <Link target='_blank' href='https://github.com/hazratgs'>
        <img src='/github.svg' alt='github' />
        <span>GitHub</span>
      </Link>
      <Link href='tg://resolve?domain=hazratgs'>
        <img src='/telegram.svg' alt='telegram' />
        <span>Telegram</span>
      </Link>
      <Link href='mailto:hazratgs@gmail.com'>
        <img src='/arroba.svg' alt='email' />
        <span>Email</span>
      </Link>
    </Nav>
  </>
)

export default ContactButtons

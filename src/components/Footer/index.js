import React from 'react'
import ContactButtons from '../ContactButtons'
import { Footer, Copyright } from './styles'

export default () => {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <ContactButtons />
      <Copyright>© 2012–{year} Хазрат Гаджикеримов</Copyright>
    </Footer>
  )
}

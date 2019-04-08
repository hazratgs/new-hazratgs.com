import React from 'react'
import { Footer, Copyright } from './styles'

export default () => {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <Copyright>© 2012–{year} Хазрат Гаджикеримов</Copyright>
    </Footer>
  )
}

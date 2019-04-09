import React, { Fragment } from 'react'
import { Wrapper } from './styles'
import Header from '../../components/Header'
import Description from '../../components/Description'
import Skills from '../../components/Skills'
import Experience from '../../components/Experiens'
import Contact from '../../components/Contact'

export default () => (
  <Fragment>
    <Wrapper>
      <Header />
      <Description />
      <Skills />
      <Experience />
      <Contact />
    </Wrapper>
  </Fragment>
)

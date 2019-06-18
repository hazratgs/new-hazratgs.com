import React, { Fragment } from 'react'
import { Wrapper, FirstScreen } from './styles'
import Header from '../../components/Header'
import Description from '../../components/Description'
import Skills from '../../components/Skills'
import Experience from '../../components/Experiens'
import Contact from '../../components/Contact'
import ContactButtons from '../../components/ContactButtons'

export default () => (
  <Fragment>
    <Wrapper>
      <FirstScreen>
        <Header />
        <Description />
        <br />
        <ContactButtons />
      </FirstScreen>
      <Skills />
      <Experience />
      <Contact />
    </Wrapper>
  </Fragment>
)

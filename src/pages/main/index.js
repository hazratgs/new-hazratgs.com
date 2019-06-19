import React, { Fragment, useRef, useEffect } from 'react'
import { Wrapper, FirstScreen, FirstScreenWrapper } from './styles'
import Header from '../../components/Header'
import Description from '../../components/Description'
import Skills from '../../components/Skills'
import Experience from '../../components/Experiens'
import Contact from '../../components/Contact'
import ContactButtons from '../../components/ContactButtons'

export default () => {
  const video = useRef()

  useEffect(() => {
    video.current.pause()
    video.current.play()
  }, [])

  return (
    <Fragment>
      <Wrapper>
        <FirstScreen>
          <FirstScreenWrapper>
            <Header />
            <Description />
            <br />
            <ContactButtons />
          </FirstScreenWrapper>
          <video ref={video} autoPlay={true} loop preload="true" playsInline muted>
            <source src="/bg.mp4" />
          </video>
        </FirstScreen>
        <Skills />
        <Experience />
        <Contact />
      </Wrapper>
    </Fragment>
  )
}
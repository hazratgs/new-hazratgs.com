import React from 'react'
import Title from '../Title'
import { Experience, Wrapper, Item, Company, Type, DateWork } from './styles'

export default () => (
  <Experience>
    <Title>Опыт работы</Title>
    <Wrapper>
      <Item>
        <Company target='_blank' href='https://crypterium.com/'>
          <img src='https://crypterium.com/favicon.png' alt='crypterium'/>
          Crypterium
        </Company>
        <Type>Senior Frontend Developer</Type>
        <DateWork>Июнь 2018 - Март 2019</DateWork>
      </Item>
      <Item>
        <Company target='_blank' href='https://payqr.ru/'>
          <img src='https://payqr.ru/favicon.ico' alt='payqr'/>
          PayQR
        </Company>
        <Type>Middle Frontend Developer</Type>
        <DateWork>Июнь 2017 - Май 2018</DateWork>
      </Item>
      <Item>
        <Company target='_blank' href='https://febox.ru/'>
          <img src='https://febox.ru/public/img/favicon.png' alt='payqr'/>
          Febox
        </Company>
        <Type>Fullstack Developer</Type>
        <DateWork>Июнь 2013 - Май 2017</DateWork>
      </Item>
    </Wrapper>
  </Experience>
)

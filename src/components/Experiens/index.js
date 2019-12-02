import React from 'react'
import Title from '../Title'
import {
  Experience,
  Wrapper,
  Item,
  Company,
  Type,
  DateWork,
  Description
} from './styles'

export default () => (
  <Experience>
    <Title>Опыт работы</Title>
    <Wrapper>
      <Item>
        <Company target='_blank' href='http://injoy.org/'>
          <img src='https://docdoc.ru/static/new-doc-doc/favicon/favicon-32x32.png' alt='docdoc' />
          docdoc
        </Company>
        <Type>Senior Frontend Developer</Type>
        <DateWork>Сентябрь 2019 - По настоящее время</DateWork>
        <Description>
          <b>Основные обязаности:</b>
          <p>• Проектирование архитектуры проектов</p>
          <p>• Разработка приложений для телемедицины</p>
          <p>• Покрытие тестами всего функционала</p>
          <p>• Code Review</p>
          <p>• Построение графиков с помощью Influxdb и Grafana</p>
          <p>• Openvidu</p>
          <p>• New Relic</p>
          <p>• CI/CD</p>
        </Description>
        <Description>
          <b>Используемые технологии:</b>
          <p className='english'>TypeScript • React • Redux-Saga • Linaria • Node.js</p>
        </Description>
      </Item>
      <Item>
        <Company target='_blank' href='http://injoy.org/'>
          <img src='//u20.filesonload.ru/e49a25e4fab78006866e605c952cc2d6/57dd20997bd4dfcd302b8c0abc32c0bb.png' alt='injoy' />
          Injoy
        </Company>
        <Type>Senior Frontend Developer</Type>
        <DateWork>Апрель 2019 - Август 2019</DateWork>
        <Description>
          <b>Основные обязаности:</b>
          <p>• Разработка и поддержка инновационного образовательного проекта по принципу Финского образования</p>
          <p>• Server Side Render</p>
          <p>• CI/CD</p>
        </Description>
        <Description>
          <b>Используемые технологии:</b>
          <p className='english'>TypeScript • React • Redux-Saga • Reselect • Styled-components • Node.js • Amazon Web Services</p>
        </Description>
      </Item>
      <Item>
        <Company target='_blank' href='https://crypterium.com/'>
          <img src='https://crypterium.com/favicon.png' alt='crypterium' />
          Crypterium
        </Company>
        <Type>Senior Frontend Developer</Type>
        <DateWork>Июнь 2018 - Март 2019</DateWork>
        <Description>
          <b>Основные обязаности:</b>
          <p>• Проектирование архитектуры новых проектов</p>
          <p>• Разработка и поддержка основного сайта компании</p>
          <p>• Разработка админ панелей</p>
          <p>• Server Side Render</p>
          <p>• CI/CD</p>
          <p>• Рефакторинг проектов</p>
        </Description>
        <Description>
          <b>Используемые технологии:</b>
          <p className='english'>JavaScript • React • Redux • Redux-Saga • Styled-components • Node.js • Amazon Web Services</p>
        </Description>
      </Item>
      <Item>
        <Company target='_blank' href='https://payqr.ru/'>
          <img src='https://payqr.ru/favicon.ico' alt='' />
          PayQR
        </Company>
        <Type>Middle Frontend Developer</Type>
        <DateWork>Июнь 2017 - Май 2018</DateWork>
        <Description>
          <b>Основные обязаности:</b>
          <p>• Поддержка текущих проектов компании</p>
          <p>• Разработка новых проектов на основе успешных проектов</p>
          <p>• Взаимодействие с сайтами партнеров с помощью .postMessage()</p>
          <p>• CI/CD</p>
          <p>• Рефакторинг проектов</p>
        </Description>
        <Description>
          <b>Используемые технологии:</b>
          <p className='english'>JavaScript • React • Redux • Node.js • GitLab CI/CD</p>
        </Description>
      </Item>
      <Item>
        <Company target='_blank' href='https://febox.ru/'>
          <img src='https://febox.ru/public/img/favicon.png' alt='payqr' />
          Febox
        </Company>
        <Type>Fullstack Developer</Type>
        <DateWork>Июнь 2013 - Май 2017</DateWork>
        <Description>
          <b>Основные обязаности:</b>
          <p>• Разработка проектов начиная от сервисов служб доставки и заканчивая официальными сайтами для администраций районов и городов</p>
          <p>• Интеграция проектов с различными API (iiko, merlion, telegram)</p>
          <p>• Разработка гибридных мобильных приложений с помощью PhoneGap</p>
          <p>• Адаптивная верстка</p>
        </Description>
        <Description>
          <b>Используемые технологии:</b>
          <p className='english'>PHP • JavaScript • React • Redux • Node.js • MySQL • MongoDB • HTML • CSS</p>
        </Description>
      </Item>
    </Wrapper>
  </Experience>
)

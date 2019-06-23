import React from 'react'
import { Container, Wrapper, Title, Item } from './styles'

const BlogLinks = () => (
  <Container>
    <Title>Последние статьи</Title>
    <Wrapper>
      <Item>
        <span>7 мая 2018 в 13:26</span>
        <a target='_blank' href='https://habr.com/ru/post/355014/'>Разработка Telegram бота для массфаловинга в Instagram</a>
      </Item>
      <Item>
        <span>16 марта 2018 в 19:26</span>
        <a target='_blank' href='https://habr.com/ru/post/351352/'>Онлайн имплементация localStorage</a>
      </Item>
    </Wrapper>
  </Container>
)

export default BlogLinks

import React, { PureComponent } from 'react'
import { Container, Form, Row, Input, Button } from './styles'
import Title from '../Title'
import TextareaAutosize from 'react-textarea-autosize'
import ReCAPTCHA from 'react-google-recaptcha'

export default class Contact extends PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    recaptcha: false
  }

  change = (key) => (e) => this.setState({ [key]: e.target.value })

  captcha = () => this.setState({ recaptcha: true })

  render() {
    return (
      <Container>
        <Title>Контакты</Title>
        <Form>
          <Row>
            <Input empty={!!this.state.name}>
              <input type='text' onChange={this.change('name')} />
              <span>имя</span>
            </Input>
          </Row>
          <Row>
            <Input empty={!!this.state.email}>
              <input type='text' onChange={this.change('email')} />
              <span>email</span>
            </Input>
            <Input empty={!!this.state.phone}>
              <input type='text' onChange={this.change('phone')} />
              <span>телефон</span>
            </Input>
          </Row>
          <Row>
            <Input empty={!!this.state.message}>
              <TextareaAutosize onChange={this.change('message')} />
              <span>сообщение</span>
            </Input>
          </Row>
          <Row>
            <ReCAPTCHA
              sitekey='6Lds3pwUAAAAAAHsvWQMzqu_YTpL9wrDfvE6hgca'
              onChange={this.captcha}
            />
          </Row>
          <Row>
            <Button>
              <span>отправить</span>
            </Button>
          </Row>
        </Form>
      </Container>
    )
  }
}

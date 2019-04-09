import React, { PureComponent } from 'react'
import { Container, Form, Row, Input, Button, Policy, SuccessMessageWrapper } from './styles'
import Title from '../Title'
import TextareaAutosize from 'react-textarea-autosize'
import ReCAPTCHA from 'react-google-recaptcha'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import InputMask from 'react-input-mask'

export default class Contact extends PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    recaptcha: false,
    errors: [],
    success: false
  }

  change = (key) => (e) => this.setState({
    [key]: e.target.value,
    errors: this.state.errors.filter(item => item !== key)
  })

  captcha = () => this.setState({ recaptcha: true })

  send = () => {
    const { name, email, phone, message, recaptcha } = this.state
    const numberPhone = phone.replace(/[^\d;]/g, '')
    const errors = []

    if (!isEmail(email)) errors.push('email')
    if (name.length < 4) errors.push('name')
    if (!isMobilePhone(numberPhone)) errors.push('phone')
    if (message.length < 10) errors.push('message')
    if (!recaptcha) errors.push('recaptcha')

    if (errors.length) {
      this.setState({ errors })
    } else {
      this.setState({ success: true })
    }
  }

  render() {
    const { errors, success } = this.state
    if (success) return <SuccuessMessage />
    return (
      <Container>
        <Title>Контакты</Title>
        <Form>
          <Row>
            <Input empty={!!this.state.name} error={errors.includes('name')}>
              <input type='text' onChange={this.change('name')} />
              <span>имя</span>
            </Input>
          </Row>
          <Row>
            <Input empty={!!this.state.email} error={errors.includes('email')}>
              <input type='text' onChange={this.change('email')} />
              <span>email</span>
            </Input>
            <Input empty={!!this.state.phone} error={errors.includes('phone')}>
              <InputMask
                mask='+7 (999) 999-99-99'
                maskChar=' '
                onChange={this.change('phone')}
              />
              <span>телефон</span>
            </Input>
          </Row>
          <Row>
            <Input empty={!!this.state.message} error={errors.includes('message')}>
              <TextareaAutosize onChange={this.change('message')} />
              <span>сообщение</span>
            </Input>
          </Row>
          <Row>
            <Input error={errors.includes('recaptcha')}>
              <ReCAPTCHA
                sitekey='6Lds3pwUAAAAAAHsvWQMzqu_YTpL9wrDfvE6hgca'
                onChange={this.captcha}
              />
            </Input>
          </Row>
          <Row>
            <Button onClick={this.send}>
              <span>отправить</span>
            </Button>
          </Row>
          <Row>
            <Policy>
              Нажимая на кнопку «Отправить» Вы даете согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»
            </Policy>
          </Row>
        </Form>
      </Container>
    )
  }
}

const SuccuessMessage = () => (
  <SuccessMessageWrapper>
    <h2>Спасибо!</h2>
    <p>Ваше сообщение успешно отправлено. В ближайшее время мы с вами свяжемся.</p>
  </SuccessMessageWrapper>
)

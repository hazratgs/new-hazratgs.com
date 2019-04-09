import styled from 'styled-components'

export const Container = styled.div`

`

export const Form = styled.div`
  width: 490px;
  padding: 20px 0;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`

export const Input = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;

  &:nth-child(2) {
    margin-left: 15px;
  }

  ${props => props.error && `
    animation: 0.5s shake ease-in-out;

    span {
      color: red;
    }

    input, textarea {
      border-color: red!important;
    }
    
  `}

  span {
    position: absolute;
    left: 10px;
    top: 6px;
    z-index: 1;
    transition: all ease-in-out 0.3s;

    ${props => props.empty && `
      top: -15px;
      opacity: .4;
      font-size: small;
    `}
  }

  input {
    border: 0;
    border-bottom: 1px solid #e2e2e2;
    padding: 5px 10px;
    font-size: 16px;
    height: 33px;
    box-sizing: border-box;
    outline: none;
    font-family: gerbera;
    position: relative;
    z-index: 5;
    background-color: transparent;
    transition: all ease-in-out 0.3s;

    &:focus ~ span {
      top: -15px;
      opacity: .4;
      font-size: small;
    }
  }

  textarea {
    border: 0;
    border-bottom: 1px solid #e2e2e2;
    padding: 5px 10px;
    font-size: 16px;
    min-height: 33px;
    box-sizing: border-box;
    outline: none;
    font-family: gerbera;
    position: relative;
    z-index: 5;
    background-color: transparent;
    resize: none;
    overflow: hidden;
    transition: all ease-in-out 0.3s;

    &:focus ~ span {
      top: -15px;
      opacity: .4;
      font-size: small;
    }
  }
`

export const Button = styled.button`
  border: 1px solid #000;
  height: 60px;
  width: 245px;
  font-size: 16px;
  cursor: pointer;
  font-family: gerbera;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  outline: none;

  &:hover {
    &::after {
      width: 120%;
    }

    span {
      color: #fff;
    }
  }

  span {
    position: relative;
    z-index: 5;
    color: #000;
    transition: all ease-in-out 0.3s;
  }

  &::after {
    display: block;
    box-sizing: border-box;
    height: 120%;
    left: -10%;
    transform: skewX(15deg);
    z-index: 0;
    position: absolute;
    transition: all ease-in-out 0.3s;
    content: '';
    width: 0;
    bottom: 0;
    background: #000;
  }
`

export const Policy = styled.p`
  font-size: 13px;
  opacity: .4;
  line-height: 20px;
`

export const SuccessMessageWrapper = styled.div`
  padding: 10px 0 80px;

  h2 {
    font-family: bandera;
    font-weight: normal;
    font-size: 32px;
    padding: 10px 0;
  }
`

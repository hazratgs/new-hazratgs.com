import styled from 'styled-components'

export const Experience = styled.div`
  padding: 20px 80px;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const Item = styled.div`
  margin-bottom: 50px;
  padding-left: 100px;
  box-sizing: border-box;
  position: relative;

  &:last-child {
    &::after {
      display: none;
    }
  }

  &::before {
    width: 4px;
    height: 4px;
    background-color: #333;
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 22px;
    content: '';
    margin: auto;
    display: block;
    opacity: .6;
  }

  &::after {
    width: 1px;
    height: calc(100% + 34px);
    background-color: #999;
    position: absolute;
    top: calc(50% + 8px);
    left: 23px;
    content: '';
    opacity: .18;
  }
`

export const Company = styled.a`
  font-size: 15px;
  text-decoration: underline;
  font-weight: 400;
  color: black;
  display: flex;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
    margin-right: 7.5px;
  }
`

export const Type = styled.p`
  font-size: 15px;
  padding: 5px 0;
  margin: 0;
`

export const DateWork = styled.span`
  font-size: 13px;
  opacity: .4;
  display: block;
`

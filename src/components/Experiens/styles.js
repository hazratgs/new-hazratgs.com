import styled from 'styled-components'

export const Experience = styled.div`
  padding: 60px 80px 20px;
  margin-bottom: 40px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const Wrapper = styled.div`
  padding: 20px 0;
`

export const Item = styled.div`
  margin-bottom: 50px;
  padding-left: 60px;
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
    top: 35px;
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
    top: 45px;
    left: 23px;
    content: '';
    opacity: .18;
  }

  @media (max-width: 767px) {
    padding-left: 50px;
  }
`

export const Company = styled.a`
  font-size: 15px;
  text-decoration: underline;
  font-weight: 400;
  color: black;
  display: flex;
  align-items: center;
  font-family: Josefin Sans;
  padding-bottom: 10px;

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
  font-family: Josefin Sans;
`

export const DateWork = styled.span`
  font-size: 14px;
  opacity: .4;
  display: block;
  font-family: Marck Script;
`

export const Description = styled.div`
  padding: 15px 0;
  max-width: 720px;
  
  b {
    padding-bottom: 10px;
    display: block;
  }

  p {
    margin-bottom: 5px;

    &.english {
      /* font-family: Josefin Sans;
      font-size: 12px; */
    }
  }
`

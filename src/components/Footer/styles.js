import styled from 'styled-components'

export const Footer = styled.div`
  padding: 20px 80px 40px;

  @media (max-width: 768px) {
    padding: 20px 20px 40px;
  }
`

export const Copyright = styled.p`
  font-size: 13px;
  opacity: .4;
`

export const Nav = styled.div`
  padding: 20px 0;
  display: flex;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  margin-right: 25px;

  img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }

  span {
    text-decoration: underline;
    font-size: 14px;
  }
`

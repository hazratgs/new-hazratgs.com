import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0 40px;
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
  margin-right: 35px;

  img {
    margin-right: 10px;
    width: 22px;
    height: 22px;
  }

  span {
    font-size: 16px;
    font-family: Josefin Sans;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
    top: 1px;
  }

  &:hover {
    span {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    margin-right: 25px;

    img {
      width: 16px;
      height: 16px;
      margin-right: 7px;
    }

    span {
      font-size: 14px;
    }
  }
`

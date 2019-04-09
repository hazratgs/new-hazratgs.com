import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 140px 0 50px;
  display: flex;

  @media (max-width: 767px) {
    padding: 20px 0 40px;
  }
`

export const Logo = styled.div`
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
  }
`

export const Profile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;

  h1 {
    font-size: 26px;
    font-family: bandera;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    padding: 5px 0;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }
`

export const Geolocation = styled.div`
  padding: 2px 0;
  font-size: 13px;
  opacity: .5;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    opacity: .5;
    margin-right: 5px;
  }

  @media (max-width: 767px) {
    font-size: 12px;

    img {
      width: 16px;
    }
  }
`


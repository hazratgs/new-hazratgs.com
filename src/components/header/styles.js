import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 140px 0 50px;
  display: flex;

  @media (max-width: 767px) {
    padding: 20px 0 40px;
  }
`

export const Logo = styled.div`
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
    box-shadow: 3px 3px 10px -5px rgba(152, 114, 98, 0.59); 
    /* border: 2px solid #f7e9e3; */
  }

  @media (max-width: 767px) {
    width: 72px;
    height: 72px;
  }
`

export const Profile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-family: Yeseva One, Cormorant Garamond;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    padding: 5px 0;
    font-family: Josefin Sans;
    opacity: .8;
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 19px;
    }

    p {
      font-size: 13px;
    }
  }
`

export const Geolocation = styled.div`
  padding: 7px 0 0;
  font-size: 14px;
  opacity: .5;
  display: flex;
  align-items: center;

  img {
    width: 16px;
    opacity: .5;
    margin-right: 5px;
  }

  span {
    position: relative;
    top: 1px;
    font-family: Marck Script;
  }

  @media (max-width: 767px) {
    font-size: 12px;

    img {
      width: 16px;
    }
  }
`


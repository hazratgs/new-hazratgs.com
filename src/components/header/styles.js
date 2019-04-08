import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 100px 80px 50px;
  display: flex;
`

export const Logo = styled.div`
  width: 90px;
  height: 90px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
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
  }

  p {
    font-size: 15px;
    padding: 5px 0;
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
`


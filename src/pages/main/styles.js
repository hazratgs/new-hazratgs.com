import styled from 'styled-components'

export const Wrapper = styled.div`
  
`

export const FirstScreen = styled.div`
  height: 720px;
  background: #f7e9e3;
  padding: 0 80px;
  position: relative;

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: red;
    z-index: 5;
    background-image: url('/bg.jpg');
    background-position: center;
    background-size: cover;
    opacity: .05;
  }

  @media (max-width: 768px) {
    padding: 0 20px 0px;
    height: auto;
  }
`

export const FirstScreenWrapper = styled.div`
  position: relative;
  z-index: 6;
`

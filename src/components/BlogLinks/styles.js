import styled from 'styled-components'

export const Container = styled.div`
  padding: 60px 0 100px;
`

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`

export const Title = styled.h3`
  opacity: .3;
  font-weight: 300;
  padding-bottom: 30px;
  font-family: Yeseva One, Cormorant Garamond;
`

export const Item = styled.div`
  display: block;
  width: 380px;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: #000;
    font-size: 18px;
    font-family: Cormorant Garamond;
    font-weight: bold;
    text-decoration: none;
    line-height: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, .12);

    &:hover {
      border-bottom: 1px solid rgba(0, 0, 0, .5);
    }
  }

  span {
    display: block;
    margin-bottom: 5px;
    font-size: 11px;
    opacity: .4;
    display: block;
    font-family: Arial, Helvetica, sans-serif, Marck Script;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 30px;
  }
`

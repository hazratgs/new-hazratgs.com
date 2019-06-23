import styled from 'styled-components'

export const Description = styled.div`
  max-width: 920px;

  p {
    margin-bottom: 10px;
    line-height: 34px;
    font-size: 26px;
    font-family: Cormorant Garamond;
    font-weight: bold;

    &.text {
      font-size: 20px;
      line-height: 24px;
      font-weight: normal;
      margin-top: 20px;
    }

    &.small {
      line-height: 24px;
      font-size: 18px;
      font-weight: 400;
      opacity: .5;
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 18px;
      line-height: 26px;
      font-weight: bold;

      &.text {
        font-size: 16px;
      }
    
      &.small {
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
`

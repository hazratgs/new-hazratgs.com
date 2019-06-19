import styled from 'styled-components'

export const Description = styled.div`
  max-width: 920px;

  p {
    margin-bottom: 10px;
    line-height: 34px;
    font-size: 26px;
    font-family: Cormorant Garamond;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 26px;
    }

    &.small {
      line-height: 24px;
      font-size: 18px;
      font-weight: 400;
      opacity: .5;
    }
  }

  @media (max-width: 768px) {
    p {
      &.small {
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
`

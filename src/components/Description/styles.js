import styled from 'styled-components'

export const Description = styled.div`
  max-width: 740px;

  p {
    margin-bottom: 10px;
    line-height: 27px;
    font-size: 18px;
    font-family: gerbera;
    font-weight: normal;

    &.text {
      /* font-size: 20px; */
      /* line-height: 24px; */
      font-weight: normal;
      margin-top: 20px;
    }

    &.small {
      line-height: 24px;
      font-size: 13px;
      font-weight: 400;
      opacity: .5;
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
      line-height: 24px;

      &.text {
        /* font-size: 14px; */
      }
    
      &.small {
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
`

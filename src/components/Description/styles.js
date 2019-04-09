import styled from 'styled-components'

export const Description = styled.div`
  max-width: 720px;

  p {
    margin-bottom: 20px;
    line-height: 34px;
    font-size: 22px;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }

    &.small {
      line-height: 24px;
      font-size: 16px;
      font-weight: 300;
    }
  }
`

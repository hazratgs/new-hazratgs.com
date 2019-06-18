import styled from 'styled-components'

export const Skills = styled.div`
  padding: 60px 80px;
  max-width: 640px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

export const Description = styled.p`
  margin-bottom: 10px;
  font-family: Cormorant Garamond;
  font-weight: bold;
  line-height: 24px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

`

export const Item = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;

  ${props => props.disabled && `opacity: .2;` }

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
    position: relative;
  }

  span {
    font-size: 12px;
    font-family: Josefin Sans;

  }
`

export const New = styled.div`
  position: absolute;
  right: 3px;
  top: 7px;
  background-color: red;
  border-radius: 1px;
  color: #fff;
  font-size: 8px;
  font-weight: 300;
  padding: 1px 4px;
  cursor: default;
`

export const Old = styled.div`
  position: absolute;
  right: 3px;
  top: 7px;
  background-color: #6f3d12;
  border-radius: 1px;
  color: #fff;
  font-size: 8px;
  font-weight: 300;
  padding: 1px 4px;
  cursor: default;
`

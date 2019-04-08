import styled from 'styled-components'

export const Skills = styled.div`
  padding: 20px 80px;
  max-width: 640px;

  h2 {
    font-size: 20px;
    margin-bottom: 30px;
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

  ${props => props.disabled && `opacity: .1;` }

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
    position: relative;
  }

  span {
    font-size: 12px;
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

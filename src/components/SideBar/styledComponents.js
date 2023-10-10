import styled from 'styled-components'

export const HomeIconContainer = styled.button`
  display: flex;
  align-items: center;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  width: 10vw;
  padding-left: 10px;
  padding-right: 20px;
  background-color: transparent;
`
export const IconButton = styled.button`
  outline: none;
  border-width: 0px;
  margin-right: 12px;
  background-color: transparent;
  color: #606060;
`
export const PageName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

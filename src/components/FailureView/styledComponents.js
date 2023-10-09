import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  margin-top: 30px;
  height: 250px;
  width: 300px;
`
export const FailureHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.lightTheme ? '#231f20' : '#ffffff')};
`
export const FailureInfo = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  text-align: center;
  margin: 0px;
  color: #909090;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 11px;
  font-weight: bold;
  margin-top: 10px;
  padding: 9px 20px 9px 20px;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
`

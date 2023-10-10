import styled from 'styled-components'

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchResultsImage = styled.img`
  height: 300px;
  width: 300px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`
export const SearchHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.lightTheme ? '#181818' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const SearchPara = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px;
  color: #909090;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SearchButtonRetry = styled.button`
  font-family: 'Roboto';
  color: #ffffff;
  background-color: #4f46e5;

  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  padding: 9px 20px 9px 20px;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
`

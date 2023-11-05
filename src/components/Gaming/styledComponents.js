import styled from 'styled-components'

export const GamingPageContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
`
export const SideBarAndGamingContainer = styled.div`
  display: flex;
`
export const LeftBannerVideosContainer = styled.div`
  display: flex;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
`
export const LeftBannerIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GamingLogoAndDisplay = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#424242')};
  flex-grow: 1;
`
export const PageIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;
  background-color: ${props => (props.lightTheme ? '#e2e8f0' : '#000000')};
`
export const PageName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const IconTrendingButton = styled.button`
  border-width: 0px;
  margin-right: 30px;
  color: #ff0000;
  background-color: #cbd5e1;
  height: 40px;
  width: 40px;
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
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
export const GameUnOrderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  list-style-type: none;
  padding: 0px;
`
export const GameListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const GameImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  height: 200px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`
export const GameName = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  margin: 0px;
`

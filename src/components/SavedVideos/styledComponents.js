import styled from 'styled-components'

export const SavedVideosPageContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  min-height: 700px;
`
export const SideBarAndGamingContainer = styled.div`
  display: flex;
  min-height: 700px;
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
export const SavedVideosLogoAndDisplay = styled.div`
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#424242')};
  flex-grow: 1;
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
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NoVideosImage = styled.img`
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#0f0f0f')};
`
export const LeftBannerVideosContainer = styled.div`
  display: flex;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
`

export const LeftBannerIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 15vw;

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const IconAndVideosDisplayContainer = styled.div`
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
export const TrendingVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const TrendingListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TrendingImage = styled.img`
  height: 200px;

  width: 100%;
`
export const TrendingContainer = styled.div`
  display: flex;
  min-height: 1100px;
  width: 100vw;
`
export const ChannelLogoAndDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding-left: 14px;
  padding-right: 14px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Tittle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  margin-top: 0px;
  color: ${props => (props.lightTheme ? '#313131' : '#f4f4f4')};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  line-height: 26px;
  margin-top: 0px;
  color: ${props => (props.lightTheme ? '#313131' : '#606060')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ChannelNameSmallSize = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
  color: ${props => (props.lightTheme ? '#313131' : '#606060')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

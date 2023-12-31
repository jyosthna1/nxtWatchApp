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
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#231f20')};
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
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#0f0f0f')};
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
  background-color: ${props => (props.lightTheme ? '#e2e8f0' : '#181818')};
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
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  height: 200px;
  width: 200px;
  margin-top: 30px;
`
export const NoSavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  padding-top: 12px;
  color: ${props => (props.lightTheme ? '#0f0f0f' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const DescriptionNoSavedVideos = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  color: ${props => (props.lightTheme ? '#606060' : '#ffffff')};
`
export const SavedVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const TrendingListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
  }
`
export const TrendingImage = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
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
  @media screen and (min-width: 768px) {
    display: none;
  }
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
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
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
  color: ${props => (props.lightTheme ? '#313131' : '#cbd5e1')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

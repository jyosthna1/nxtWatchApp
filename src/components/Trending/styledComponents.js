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

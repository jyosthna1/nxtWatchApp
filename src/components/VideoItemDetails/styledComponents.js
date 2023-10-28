import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
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
export const VideoDetailsView = styled.div`
  flex-grow: 1;
  background-color: ${props => (props.lightTheme ? '#f1f1f1' : '#181818')};
  padding: 20px;
`
export const VideoContainer = styled.div`
  width: 90%;
`
export const VideoDetailPage = styled.div``
export const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-size: 400;
  color: ${props => (props.lightTheme ? '#606060' : '#ffffff')};
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
`
export const ViewTimeDisplay = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #7e858e;
  margin: 0px;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 0px;
`
export const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`
export const LikeButton = styled.button`
  outline: none;
  border-width: 0px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
  background-color: transparent;
`
export const ViewAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const LogoAndChannelNameContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const ChannelNameAndSubscriber = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Subscriber = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  padding-top: 7px;
  color: #7e858e;
  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 300;
  color: ${props => (props.lightTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

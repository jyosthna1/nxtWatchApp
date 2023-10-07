import styled from 'styled-components'

export const ListItem = styled.li`
  margin-bottom: 50px;
  width: 300px;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
`
export const VideoImage = styled.img`
  margin-bottom: 10px;
  width: 100%;
  margin: 0px;
`
export const ChannelLogoAndDetailsContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Tittle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  line-height: 26px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ViewAndYearContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelNameSmallSize = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

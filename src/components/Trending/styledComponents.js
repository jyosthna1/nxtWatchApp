import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  height: 100vh;
`

export const SideBarAndTrendContainer = styled.div`
  display: flex;
`
export const LeftBannerVideosContainer = styled.div`
  display: flex;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
`

export const LeftBannerIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  margin-top: 20px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HomeIconContainer = styled.button`
  display: flex;
  align-items: center;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  width: 100%;
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
export const TrendingContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#000000')};
  flex-grow: 1;
`
export const TrendingIconAndVideos = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingIcon = styled.button`
  border-width: 0px;
`

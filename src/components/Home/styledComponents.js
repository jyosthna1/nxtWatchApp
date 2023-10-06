import styled from 'styled-components'

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
export const bannerAndVideos = styled.div`
  background-color: #f9f9f9;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 26vh;
  background-size: cover;
  padding: 22px;
`
export const SearchContainer = styled.div`
  display: flex;
`
export const BannerAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const SearchInput = styled.input`
  font-family: 'Roboto';
`
export const SearchAndVideoContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#181818')};
`
export const BannerAndClose = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoInBanner = styled.img`
  height: 20px;
  width: 60px;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 80px;
  }
`
export const CloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`
export const Heading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: black;
`
export const GetItNowButton = styled.button`
  border: 1px solid black;
  color: black;
  font-family: 'Roboto';
  padding: 6px 10px 6px 10px;
  background-color: transparent;
  font-size: 14px;
`

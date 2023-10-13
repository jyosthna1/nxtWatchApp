import styled from 'styled-components'

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
export const HomeIconContainer = styled.button`
  display: flex;
  align-items: center;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  width: 10vw;
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
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 400px;
  border: 1px solid;
  border-color: ${props => (props.lightTheme ? '#cccccc' : '#424242')};
`
export const SearchButton = styled.button`
  border-width: 0px;
  height: 100%;
  flex-grow: 1;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#424242')};
`
export const BannerAndSearch = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const SearchInput = styled.input`
  font-family: 'Roboto';
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  padding: 10px;
  border: none;
  outline: none;
  height: 100%;
  width: 80%;
  background-color: ${props => (props.lightTheme ? '#ebebeb' : '#000000')};
`
export const SearchAndVideoContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#181818')};
  min-height: 900px;
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
export const UnOrderVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 30px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

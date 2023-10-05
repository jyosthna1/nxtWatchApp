import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 26vh;
  background-size: cover;
  padding: 22px;
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

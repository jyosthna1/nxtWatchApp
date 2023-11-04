import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9 ' : '#0f0f0f')};
  height: 100vh;
`
export const LeftBannerVideosContainer = styled.div`
  display: flex;
  height: 90vh;
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
export const TrendingContainer = styled.div`
  display: flex;
`
export const NotFoundDetailsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
`
export const NotFoundImage = styled.img`
  margin-top: 30px;
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  @media screen and (min-width: 767px) {
    height: 260px;
    width: 260px;
  }
`
export const NotFoundMessage = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  @media screen and (min-width: 767px) {
    font-size: 22px;
  }
  color: ${props => (props.lightTheme ? '#0f0f0f ' : '#ffffff')};
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  color: #909090;
`

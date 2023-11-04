import styled from 'styled-components'

export const NotFoundContainer = styled.div`
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
export const TrendingContainer = styled.div`
  display: flex;
  min-height: 900px;
`
export const NotFoundDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 100px;
  width: 100px;
`

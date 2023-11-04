import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotFoundContainer,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  TrendingContainer,
  NotFoundImage,
  NotFoundDetailsContainer,
  NotFoundMessage,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      const image = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundContainer lightTheme={lightTheme}>
          <Header />
          <TrendingContainer>
            <LeftBannerVideosContainer lightTheme={lightTheme}>
              <LeftBannerIcons>
                <SideBar />
              </LeftBannerIcons>
            </LeftBannerVideosContainer>
            <NotFoundDetailsContainer>
              <NotFoundImage src={image} alt="not found" />
              <NotFoundMessage lightTheme={lightTheme}>
                Page Not Found
              </NotFoundMessage>
              <NotFoundDescription>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundDetailsContainer>
          </TrendingContainer>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

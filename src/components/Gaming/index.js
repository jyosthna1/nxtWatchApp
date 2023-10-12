import {GiGamepad} from 'react-icons/gi'
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  GamingPageContainer,
  SideBarAndGamingContainer,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  GamingLogoAndDisplay,
  PageIconContainer,
  IconTrendingButton,
  PageName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GameVideosComponent extends Component {
  state = {apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
  }

  render() {
    return (
      <>
        <h1>Hi</h1>
      </>
    )
  }
}

const Gaming = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <GamingPageContainer lightTheme={lightTheme} data-testid="gaming">
          <Header />
          <SideBarAndGamingContainer>
            <LeftBannerVideosContainer lightTheme={lightTheme}>
              <LeftBannerIcons>
                <SideBar />
              </LeftBannerIcons>
            </LeftBannerVideosContainer>
            <GamingLogoAndDisplay lightTheme={lightTheme}>
              <PageIconContainer lightTheme={lightTheme}>
                <IconTrendingButton type="button">
                  <GiGamepad size="30px" />
                </IconTrendingButton>
                <PageName lightTheme={lightTheme}>Gaming</PageName>
              </PageIconContainer>
              <GameVideosComponent />
            </GamingLogoAndDisplay>
          </SideBarAndGamingContainer>
        </GamingPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Gaming

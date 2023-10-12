import {GiGamepad} from 'react-icons/gi'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
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
  LoaderContainer,
  FailureContainer,
  FailureHead,
  FailureImage,
  FailureInfo,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const FailureView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value

      const image = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <FailureContainer>
          <FailureImage src={image} alt="failure view" />
          <FailureHead lightTheme={lightTheme}>
            Oops! Something went wrong
          </FailureHead>
          <FailureInfo lightTheme={lightTheme}>
            We are having some trouble to complete some request. <br /> Please
            try again.
          </FailureInfo>
          <Link to="/gaming">
            <RetryButton type="button">Retry</RetryButton>
          </Link>
        </FailureContainer>
      )
    }}
  </ThemeContext.Consumer>
)

class GameVideosComponent extends Component {
  state = {apiStatus: apiStatusConstants.initial, gameList: []}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachGameData => ({
        title: eachGameData.title,
        id: eachGameData.id,
        thumbnailUrl: eachGameData.thumbnail_url,
        viewCount: eachGameData.view_count,
      }))
      this.setState({
        gameList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  LoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  renderGame = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.LoadingView()
      case apiStatusConstants.failure:
        return <FailureView />

      default:
        return null
    }
  }

  render() {
    return <>{this.renderGame()}</>
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

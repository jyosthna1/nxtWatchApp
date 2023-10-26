import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import {
  LeftBannerVideosContainer,
  LeftBannerIcons,
  TrendingContainer,
  IconAndVideosDisplayContainer,
  PageIconContainer,
  PageName,
  IconTrendingButton,
  TrendingVideosContainer,
  LoaderContainer,
  TrendingListItem,
  TrendingPageContainer,
  TrendingImage,
  ChannelLogoAndDetailsContainer,
  ProfileImage,
  InformationContainer,
  Tittle,
  ChannelName,
  ChannelNameSmallSize,
  FailureContainer,
  FailureImage,
  FailureHead,
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
          <Link to="/trending">
            <RetryButton type="button">Retry</RetryButton>
          </Link>
        </FailureContainer>
      )
    }}
  </ThemeContext.Consumer>
)

const RenderTrendingVideos = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      const {details} = props
      const {
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        channelName,
        profileImageUrl,
      } = details
      const time = formatDistanceToNow(new Date(publishedAt))

      return (
        <TrendingListItem>
          <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
          <ChannelLogoAndDetailsContainer>
            <ProfileImage src={profileImageUrl} alt="channel logo" />
            <InformationContainer>
              <Tittle lightTheme={lightTheme}>{title}</Tittle>
              <ChannelName>
                {channelName} <br /> {viewCount} views . {time} ago
              </ChannelName>
              <ChannelNameSmallSize>
                {channelName} . {viewCount} views . {time} ago
              </ChannelNameSmallSize>
            </InformationContainer>
          </ChannelLogoAndDetailsContainer>
        </TrendingListItem>
      )
    }}
  </ThemeContext.Consumer>
)

class TrendingVideos extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const trendingVideosData = await response.json()

      const updatedData = trendingVideosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingVideosContainer>
        {trendingVideosList.map(eachItem => (
          <RenderTrendingVideos key={eachItem.id} details={eachItem} />
        ))}
      </TrendingVideosContainer>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView />

      default:
        return null
    }
  }

  render() {
    return <>{this.renderTrendingVideos()}</>
  }
}

const Trending = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <TrendingPageContainer data-testid="trending" lightTheme={lightTheme}>
          <Header />
          <TrendingContainer>
            <LeftBannerVideosContainer lightTheme={lightTheme}>
              <LeftBannerIcons>
                <SideBar />
              </LeftBannerIcons>
            </LeftBannerVideosContainer>
            <IconAndVideosDisplayContainer lightTheme={lightTheme}>
              <PageIconContainer lightTheme={lightTheme}>
                <IconTrendingButton type="button">
                  <HiFire size="20px" />
                </IconTrendingButton>
                <PageName lightTheme={lightTheme}>Trending</PageName>
              </PageIconContainer>
              <TrendingVideos />
            </IconAndVideosDisplayContainer>
          </TrendingContainer>
        </TrendingPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Trending

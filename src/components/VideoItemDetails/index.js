import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoDetailsSuccessDisplay from '../VideoItemDetailsSuccessDisplay'
import {
  LoaderContainer,
  SideBarAndGamingContainer,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  VideoDetailPage,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const VideoItemDetailsHeader = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <LeftBannerVideosContainer lightTheme={lightTheme}>
            <LeftBannerIcons>
              <SideBar />
            </LeftBannerIcons>
          </LeftBannerVideosContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

class VideoItemDetails extends Component {
  state = {
    videoData: [],
    apiStatus: apiStatusConstants.initial,
    likeButtonOn: false,
    disLikeButtonOn: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedData = data => ({
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
    description: data.video_details.description,
    id: data.video_details.id,
    publishedAt: data.video_details.published_at,
    thumbnailUrl: data.video_details.thumbnail_url,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    viewCount: data.video_details.view_count,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.getFormattedData(data)
      this.setState({
        videoData: updatedData,
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

  onClickChangeLikeButton = () => {
    this.setState(prevState => ({likeButtonOn: !prevState.likeButtonOn}))
    this.setState({disLikeButtonOn: false})
  }

  onClickChangeDisLikeButton = () => {
    this.setState(prevState => ({disLikeButtonOn: !prevState.disLikeButtonOn}))
    this.setState({likeButtonOn: false})
  }

  renderSuccessView = () => {
    const {videoData, likeButtonOn, disLikeButtonOn} = this.state
    return (
      <VideoDetailsSuccessDisplay
        videoData={videoData}
        likeButtonOn={likeButtonOn}
        disLikeButtonOn={disLikeButtonOn}
        onClickChangeLikeButton={this.onClickChangeLikeButton}
        onClickChangeDisLikeButton={this.onClickChangeDisLikeButton}
      />
    )
  }

  renderFailureView = () => <FailureView />

  renderVideoDetailsSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoDetailPage>
        <Header />
        <SideBarAndGamingContainer>
          <VideoItemDetailsHeader />
          {this.renderVideoDetailsSwitch()}
        </SideBarAndGamingContainer>
      </VideoDetailPage>
    )
  }
}

export default VideoItemDetails

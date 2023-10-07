import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineClose, AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import Header from '../Header'
import VideoCard from '../VideoCard'
import {
  BannerContainer,
  LogoInBanner,
  BannerAndClose,
  CloseButton,
  Heading,
  GetItNowButton,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  HomeIconContainer,
  PageName,
  IconButton,
  SearchContainer,
  SearchInput,
  BannerAndSearch,
  SearchAndVideoContainer,
  SearchButton,
  UnOrderVideoList,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const RenderBanner = props => {
  const {onClickBannerClose} = props

  const onClickBanner = () => {
    onClickBannerClose()
  }

  return (
    <>
      <BannerContainer>
        <BannerAndClose>
          <LogoInBanner
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <CloseButton>
            <AiOutlineClose size="20px" onClick={onClickBanner} />
          </CloseButton>
        </BannerAndClose>
        <Heading>Buy Nxt Watch Premium prepaid plans with UPI</Heading>
        <GetItNowButton type="button" data-testid="close">
          Get It Now
        </GetItNowButton>
      </BannerContainer>
    </>
  )
}

class HomeClass extends Component {
  state = {
    bannerClose: true,
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosCart()
  }

  getVideosCart = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const videosData = await response.json()

      const updatedData = videosData.videos.map(eachVideo => ({
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickBannerClose = () => {
    this.setState(prevState => ({bannerClose: !prevState.bannerClose}))
  }

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <UnOrderVideoList>
        {videosList.map(eachItem => (
          <VideoCard key={eachItem.id} details={eachItem} />
        ))}
      </UnOrderVideoList>
    )
  }

  renderVideosPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()

      default:
        return null
    }
  }

  render() {
    const {bannerClose, videosList} = this.state
    const {lightTheme} = this.props

    return (
      <>
        <LeftBannerVideosContainer lightTheme={lightTheme}>
          <LeftBannerIcons>
            <HomeIconContainer to="/" data-testid="home">
              <HomeIconContainer>
                <IconButton>
                  <AiFillHome size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Home</PageName>
              </HomeIconContainer>
            </HomeIconContainer>
          </LeftBannerIcons>
          <BannerAndSearch>
            {bannerClose && (
              <RenderBanner onClickBannerClose={this.onClickBannerClose} />
            )}
            <SearchAndVideoContainer lightTheme={lightTheme}>
              <SearchContainer lightTheme={lightTheme}>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  lightTheme={lightTheme}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  lightTheme={lightTheme}
                >
                  <AiOutlineSearch size="15" />
                </SearchButton>
              </SearchContainer>
              {this.renderVideosPage()}
            </SearchAndVideoContainer>
          </BannerAndSearch>
        </LeftBannerVideosContainer>
      </>
    )
  }
}

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <HomeClass lightTheme={lightTheme} />
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

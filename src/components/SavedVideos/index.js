import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  SavedVideosPageContainer,
  SideBarAndGamingContainer,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  SavedVideosLogoAndDisplay,
  IconTrendingButton,
  PageIconContainer,
  PageName,
  NoVideosContainer,
  NoVideosImage,
  NoSavedVideosText,
  DescriptionNoSavedVideos,
  SavedVideosContainer,
  TrendingListItem,
  TrendingImage,
  ChannelLogoAndDetailsContainer,
  ProfileImage,
  InformationContainer,
  Tittle,
  ChannelName,
  ChannelNameSmallSize,
} from './styledComponents'

const RenderSavedVideosItem = props => (
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

const RenderNoItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <NoVideosContainer>
          <NoVideosImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedVideosText lightTheme={lightTheme}>
            No saved videos found
          </NoSavedVideosText>
          <DescriptionNoSavedVideos lightTheme={lightTheme}>
            You can save your videos while watching them
          </DescriptionNoSavedVideos>
        </NoVideosContainer>
      )
    }}
  </ThemeContext.Consumer>
)

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, savedList} = value
      const savedListLength = savedList.length === 0
      return (
        <SavedVideosPageContainer
          lightTheme={lightTheme}
          data-testid="savedVideos"
        >
          <Header />
          <SideBarAndGamingContainer>
            <LeftBannerVideosContainer lightTheme={lightTheme}>
              <LeftBannerIcons>
                <SideBar />
              </LeftBannerIcons>
            </LeftBannerVideosContainer>
            <SavedVideosLogoAndDisplay lightTheme={lightTheme}>
              {savedListLength ? (
                <RenderNoItems />
              ) : (
                <>
                  <PageIconContainer lightTheme={lightTheme}>
                    <IconTrendingButton type="button">
                      <MdPlaylistAdd size="30px" />
                    </IconTrendingButton>
                    <PageName lightTheme={lightTheme}>Saved Videos</PageName>
                  </PageIconContainer>
                  <SavedVideosContainer>
                    {savedList.map(eachItem => (
                      <RenderSavedVideosItem
                        key={eachItem.id}
                        details={eachItem}
                      />
                    ))}
                  </SavedVideosContainer>
                </>
              )}
            </SavedVideosLogoAndDisplay>
          </SideBarAndGamingContainer>
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos

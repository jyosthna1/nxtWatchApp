import {MdPlaylistAdd} from 'react-icons/md'
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
} from './styledComponents'

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
              <PageIconContainer lightTheme={lightTheme}>
                <IconTrendingButton type="button">
                  <MdPlaylistAdd size="30px" />
                </IconTrendingButton>
                <PageName lightTheme={lightTheme}>Saved Videos</PageName>
              </PageIconContainer>
              {savedListLength ? <RenderNoItems /> : <h1>Hi</h1>}
            </SavedVideosLogoAndDisplay>
          </SideBarAndGamingContainer>
        </SavedVideosPageContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos

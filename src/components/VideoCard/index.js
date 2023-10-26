import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'
import {
  ListItem,
  VideoImage,
  ChannelLogoAndDetailsContainer,
  ProfileImage,
  InformationContainer,
  Tittle,
  ChannelName,
  ViewAndYearContainer,
  ChannelNameSmallSize,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const VideoCard = props => (
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
        id,
      } = details
      const time = formatDistanceToNow(new Date(publishedAt))
      return (
        <ListItem>
          <Link to={`/videos/${id}`} className="link">
            <VideoImage src={thumbnailUrl} alt="video thumbnail" />
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
          </Link>
        </ListItem>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoCard

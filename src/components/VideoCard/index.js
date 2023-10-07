import {formatDistanceToNow} from 'date-fns'
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

const VideoCard = props => {
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
    <ListItem>
      <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ChannelLogoAndDetailsContainer>
        <ProfileImage src={profileImageUrl} alt="channel logo" />
        <InformationContainer>
          <Tittle>{title}</Tittle>
          <ChannelName>
            {channelName} <br /> {viewCount} views . {time} ago
          </ChannelName>
          <ChannelNameSmallSize>
            {channelName} . {viewCount} views . {time} ago
          </ChannelNameSmallSize>
        </InformationContainer>
      </ChannelLogoAndDetailsContainer>
    </ListItem>
  )
}

export default VideoCard

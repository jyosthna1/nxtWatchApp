import {
  ListItem,
  VideoImage,
  ChannelLogoAndDetailsContainer,
  ProfileImage,
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

  return (
    <ListItem>
      <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ChannelLogoAndDetailsContainer>
        <ProfileImage src={profileImageUrl} alt="channel logo" />
      </ChannelLogoAndDetailsContainer>
    </ListItem>
  )
}

export default VideoCard

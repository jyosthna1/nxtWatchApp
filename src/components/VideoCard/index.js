import {ListItem, VideoImage} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {publishedAt, thumbnailUrl, title, viewCount} = details

  return (
    <ListItem>
      <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      <p>{title}</p>
    </ListItem>
  )
}

export default VideoCard

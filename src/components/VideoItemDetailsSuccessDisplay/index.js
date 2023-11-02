import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoDetailsView,
  Title,
  VideoContainer,
  ViewsAndTimeContainer,
  ViewTimeDisplay,
  ButtonContainer,
  LikeButtonContainer,
  LikeButton,
  ViewAndButtonContainer,
  LogoAndChannelNameContainer,
  ProfileImage,
  ChannelNameAndSubscriber,
  ChannelName,
  Subscriber,
  Description,
  DisLikeButton,
  SaveButton,
} from './styledComponents'

const VideoDetailsSuccessDisplay = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, addSaveListItem} = value
      const {
        videoData,
        likeButtonOn,
        disLikeButtonOn,
        onClickChangeLikeButton,
        onClickChangeDisLikeButton,
      } = props
      const {
        videoUrl,
        description,
        title,
        viewCount,
        publishedAt,
        thumbnailUrl,
        channelName,
        subscriberCount,
        profileImageUrl,
        id,
      } = videoData
      const time = formatDistanceToNow(new Date(publishedAt))

      const onClickAddItem = () => {
        addSaveListItem(videoData)
      }

      const onClickLikeButtonOn = () => {
        onClickChangeLikeButton()
      }

      const onClickDisLikeButtonOn = () => {
        onClickChangeDisLikeButton()
      }

      return (
        <VideoDetailsView lightTheme={lightTheme}>
          <VideoContainer>
            <ReactPlayer url={videoUrl} controls />
          </VideoContainer>
          <Title lightTheme={lightTheme}>{title}</Title>
          <ViewAndButtonContainer>
            <ViewsAndTimeContainer>
              <ViewTimeDisplay lightTheme={lightTheme}>
                {viewCount} views . {time} ago
              </ViewTimeDisplay>
            </ViewsAndTimeContainer>
            <ButtonContainer>
              <LikeButtonContainer>
                <LikeButton
                  type="button"
                  likeButtonOn={likeButtonOn}
                  onClick={onClickLikeButtonOn}
                >
                  <BiLike size="17px" /> Like
                </LikeButton>
              </LikeButtonContainer>
              <LikeButtonContainer>
                <DisLikeButton
                  type="button"
                  disLikeButtonOn={disLikeButtonOn}
                  onClick={onClickDisLikeButtonOn}
                >
                  <BiDislike size="17px" /> Dislike
                </DisLikeButton>
              </LikeButtonContainer>
              <LikeButtonContainer>
                <SaveButton type="button" onClick={onClickAddItem}>
                  <MdPlaylistAdd size="17px" /> Save
                </SaveButton>
              </LikeButtonContainer>
            </ButtonContainer>
          </ViewAndButtonContainer>
          <hr />
          <LogoAndChannelNameContainer>
            <ProfileImage src={profileImageUrl} alt="channel logo" />
            <ChannelNameAndSubscriber>
              <ChannelName lightTheme={lightTheme}>{channelName}</ChannelName>
              <Subscriber>{subscriberCount} subscribers</Subscriber>
            </ChannelNameAndSubscriber>
          </LogoAndChannelNameContainer>
          <Description lightTheme={lightTheme}>{description}</Description>
        </VideoDetailsView>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideoDetailsSuccessDisplay
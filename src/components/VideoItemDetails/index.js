import Component from 'react'
import Cookies from 'js-cookie'

class VideoItemDetails extends Component {
  state = {videoData: []}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/${id}'
    const options = {
      headers: {
        Authorization: `Bearer${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return <h1>Hi</h1>
  }
}

export default VideoItemDetails

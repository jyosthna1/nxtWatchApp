import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingPageContainer,
  TrendingContainer,
  TrendingIcon,
  SideBarAndTrendContainer,
  LeftBannerVideosContainer,
  LeftBannerIcons,
  HomeIconContainer,
  IconButton,
  PageName,
} from './styledComponents'

class TrendingPage extends Component {
  render() {
    const {lightTheme} = this.props
    return (
      <TrendingContainer lightTheme={lightTheme}>
        <TrendingIcon type="button">
          <HiFire />
        </TrendingIcon>
      </TrendingContainer>
    )
  }
}

const Trending = () => (
  <ThemeContext>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <SideBarAndTrendContainer>
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
            </LeftBannerVideosContainer>
            <TrendingPage lightTheme={lightTheme} />
          </SideBarAndTrendContainer>
        </>
      )
    }}
  </ThemeContext>
)

export default Trending

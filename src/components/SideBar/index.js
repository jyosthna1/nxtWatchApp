import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {
  HomeIconContainer,
  IconButton,
  PageName,
  SideBarContainer,
  SideBarLastMenu,
  LinkItems,
  ContactUs,
  SocialMediaContainer,
  SocialMediaImage,
  LogoDescription,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <SideBarContainer>
          <LinkItems>
            <Link to="/">
              <HomeIconContainer data-testid="home">
                <IconButton>
                  <AiFillHome size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Home</PageName>
              </HomeIconContainer>
            </Link>
            <Link to="/trending">
              <HomeIconContainer>
                <IconButton>
                  <HiFire size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Trending</PageName>
              </HomeIconContainer>
            </Link>
            <Link to="/gaming">
              <HomeIconContainer>
                <IconButton>
                  <GiGamepad size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Gaming</PageName>
              </HomeIconContainer>
            </Link>
            <Link to="/saved-videos">
              <HomeIconContainer>
                <IconButton>
                  <MdPlaylistAdd size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Saved videos</PageName>
              </HomeIconContainer>
            </Link>
          </LinkItems>
          <SideBarLastMenu>
            <ContactUs lightTheme={lightTheme}>CONTACT US</ContactUs>
            <SocialMediaContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <LogoDescription lightTheme={lightTheme}>
              Enjoy! now to see your channels and recommendations!
            </LogoDescription>
          </SideBarLastMenu>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiGamepad} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {HomeIconContainer, IconButton, PageName} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
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
            <Link to="/gaming">
              <HomeIconContainer>
                <IconButton>
                  <GiGamepad size="15px" />
                </IconButton>
                <PageName lightTheme={lightTheme}>Gaming</PageName>
              </HomeIconContainer>
            </Link>
          </Link>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar

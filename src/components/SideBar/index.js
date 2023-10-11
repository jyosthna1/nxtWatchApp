import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {
  HomeIconContainer,
  IconButton,
  PageName,
  LinkStyle,
} from './styledComponents'
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
          <HomeIconContainer>
            <IconButton>
              <HiFire size="15px" />
            </IconButton>
            <PageName lightTheme={lightTheme}>Trending</PageName>
          </HomeIconContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar

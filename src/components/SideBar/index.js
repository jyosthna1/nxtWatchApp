import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {HomeIconContainer, IconButton, PageName} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <HomeIconContainer to="/" data-testid="home">
            <IconButton>
              <AiFillHome size="15px" />
            </IconButton>
            <PageName lightTheme={lightTheme}>Home</PageName>
          </HomeIconContainer>
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

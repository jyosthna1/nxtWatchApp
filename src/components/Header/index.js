import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'

import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  NavBarContainer,
  WebsiteLogo,
  MenuBarContainer,
  ThemeButton,
  LogoutButton,
  LogoutButtonLarge,
  ProfileButton,
  ProfileImage,
  NavBarContainerDark,
  LogoutButtonLargeDark,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value

      const onClickTheme = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <>
          {lightTheme ? (
            <NavBarContainer>
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
              <MenuBarContainer>
                <ThemeButton type="button" onClick={onClickTheme}>
                  <FaMoon size="20px" />
                </ThemeButton>
                <LogoutButton type="button">
                  <GiHamburgerMenu size="20px" />
                </LogoutButton>
                <LogoutButton type="button" onClick={onClickLogout}>
                  <FiLogOut size="20px" />
                </LogoutButton>
                <ProfileButton type="button">
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>
                <LogoutButtonLarge type="button" onClick={onClickLogout}>
                  Logout
                </LogoutButtonLarge>
              </MenuBarContainer>
            </NavBarContainer>
          ) : (
            <NavBarContainerDark>
              <Link to="/">
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
              <MenuBarContainer>
                <ThemeButton type="button" onClick={onClickTheme}>
                  <FiSun size="20px" color="white" />
                </ThemeButton>
                <LogoutButton type="button">
                  <GiHamburgerMenu size="20px" color="white" />
                </LogoutButton>
                <LogoutButton type="button">
                  <FiLogOut size="20px" color="white" onClick={onClickLogout} />
                </LogoutButton>
                <ProfileButton type="button">
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>
                <LogoutButtonLargeDark type="button" onClick={onClickLogout}>
                  Logout
                </LogoutButtonLargeDark>
              </MenuBarContainer>
            </NavBarContainerDark>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header

import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  NavBarContainer,
  WebsiteLogo,
  MenuBarContainer,
  ThemeButton,
  LogoutButton,
  ProfileButton,
  ProfileImage,
  LogoutButtonLargeDark,
  PopupContainer,
  PopupDisplayContainer,
  DisplayMessage,
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

      const websiteLogoUrl = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      return (
        <NavBarContainer lightTheme={lightTheme}>
          <Link to="/">
            <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
          </Link>
          <MenuBarContainer>
            {lightTheme ? (
              <ThemeButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                <FaMoon size="20px" />
              </ThemeButton>
            ) : (
              <ThemeButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                <FiSun size="20px" color="#ffffff" />
              </ThemeButton>
            )}
            <ProfileButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileButton>
            <LogoutButton type="button" lightTheme={lightTheme}>
              <GiHamburgerMenu size="20px" />
            </LogoutButton>
            <LogoutButton
              type="button"
              lightTheme={lightTheme}
              onClick={onClickLogout}
            >
              <FiLogOut size="20px" />
            </LogoutButton>
            <LogoutButtonLargeDark
              type="button"
              onClick={onClickLogout}
              lightTheme={lightTheme}
            >
              Logout
            </LogoutButtonLargeDark>
          </MenuBarContainer>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header

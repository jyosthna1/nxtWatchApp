import styled from 'styled-components'

export const NavBarContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#231f20')};
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`

export const WebsiteLogo = styled.img`
  width: 90px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 110px;
    height: 30px;
  }
`
export const MenuBarContainer = styled.div`
  display: flex;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const LogoutButton = styled(ThemeButton)`
  margin-left: 10px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  height: 22px;
  width: 22px;
`

export const LogoutButtonLargeDark = styled.button`
  background-color: transparent;
  border: 1px solid;
  border-color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  text-align: center;
  padding: 4px 10px 4px 10px;
  border-radius: 3px;
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  font-family: 'Roboto';
  font-weight: 600;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const PopupDisplayContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
`
export const DisplayMessage = styled.p`
  font-family: 'Roboto';
`

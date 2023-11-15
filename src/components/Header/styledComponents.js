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
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#000000')};
  border-radius: 10px;
  padding: 20px;
`
export const DisplayMessage = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  font-size: 14px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: #7e858e;
  border: 1px solid #7e858e;
  padding: 7px;

  font-family: 'Roboto';
  font-size: 12px;
`
export const ConformButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  border-width: 0px;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 7px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  padding-top: 10px;
  justify-content: space-evenly;
`

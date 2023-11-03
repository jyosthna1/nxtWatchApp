import styled from 'styled-components'

export const NavBarContainer = styled.div`
  background-color: #ffffff;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButtonLarge = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  text-align: center;
  padding: 4px 10px 4px 10px;
  border-radius: 3px;
  color: #3b82f6;
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
export const NavBarContainerDark = styled.div`
  background-color: #231f20;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoutButtonLargeDark = styled.button`
  background-color: transparent;
  border: 1px solid #ffffff;
  text-align: center;
  padding: 4px 10px 4px 10px;
  border-radius: 3px;
  color: #ffffff;
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

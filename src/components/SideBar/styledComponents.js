import styled from 'styled-components'

export const HomeIconContainer = styled.button`
  display: flex;
  align-items: center;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  width: 13vw;
  padding-left: 10px;
  padding-right: 20px;
  background-color: transparent;
  text-decoration: none;
`
export const IconButton = styled.button`
  outline: none;
  border-width: 0px;
  margin-right: 12px;
  background-color: transparent;
  color: #606060;
`
export const PageName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 600px;
  width: 200px;
`
export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
`
export const SideBarLastMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`
export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`
export const SocialMediaContainer = styled.div`
  display: flex;
`
export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const LogoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

import {Component} from 'react'
import {
  LoginContainer,
  Image,
  LoginContainerDark,
  UserNameContainer,
  Label,
  Input,
  LoginPage,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class LoginDetails extends Component {
  render() {
    const {lightTheme} = this.props

    return (
      <LoginPage>
        {lightTheme ? (
          <LoginContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <UserNameContainer>
              <Label htmlFor="userName">USERNAME</Label>
              <Input type="text" id="userName" placeholder="Username" />
            </UserNameContainer>
          </LoginContainer>
        ) : (
          <LoginContainerDark>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          </LoginContainerDark>
        )}
      </LoginPage>
    )
  }
}

const Login = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return <LoginDetails lightTheme={lightTheme} />
    }}
  </ThemeContext.Consumer>
)
export default Login

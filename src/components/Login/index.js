import {Component} from 'react'
import {
  LoginContainer,
  Image,
  LoginContainerDark,
  UserNameContainer,
  Label,
  Input,
  LoginPage,
  LabelShowPassword,
  PasswordContainer,
  InputCheckbox,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class LoginDetails extends Component {
  state = {userName: '', password: '', showPassword: false}

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {lightTheme} = this.props
    const {userName, password} = this.state

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
              <Input
                type="text"
                id="userName"
                placeholder="Username"
                value={userName}
                onChange={this.onChangeUserName}
              />
            </UserNameContainer>
            <UserNameContainer>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type="password"
                id="userName"
                placeholder="password"
                value={password}
                onChange={this.onChangePassword}
              />
            </UserNameContainer>
            <PasswordContainer>
              <InputCheckbox type="checkbox" id="showPassword" />
              <LabelShowPassword htmlFor="showPassword">
                Show Password
              </LabelShowPassword>
            </PasswordContainer>
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

import {Component} from 'react'
import {
  LoginContainer,
  Image,
  LoginContainerDark,
  UserNameContainer,
  LabelLight,
  LoginPage,
  LabelShowPassword,
  PasswordContainer,
  InputCheckbox,
  ButtonLogin,
  LoginPageDark,
  LabelDark,
  InputLight,
  InputDark,
  LabelShowPasswordDark,
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

  onClickChangeStatus = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {lightTheme} = this.props
    const {userName, password, showPassword} = this.state

    return (
      <>
        {lightTheme ? (
          <LoginPage>
            <LoginContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <UserNameContainer>
                <LabelLight htmlFor="userName">USERNAME</LabelLight>
                <InputLight
                  type="text"
                  id="userName"
                  placeholder="Username"
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </UserNameContainer>
              <UserNameContainer>
                <LabelLight htmlFor="password">PASSWORD</LabelLight>
                {showPassword ? (
                  <InputLight
                    type="text"
                    id="userName"
                    placeholder="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                ) : (
                  <InputLight
                    type="password"
                    id="userName"
                    placeholder="password"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                )}
              </UserNameContainer>
              <PasswordContainer>
                <InputCheckbox
                  type="checkbox"
                  id="showPassword"
                  onClick={this.onClickChangeStatus}
                />
                <LabelShowPassword htmlFor="showPassword">
                  Show Password
                </LabelShowPassword>
              </PasswordContainer>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </LoginContainer>
          </LoginPage>
        ) : (
          <LoginPageDark>
            <LoginContainerDark>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
              <UserNameContainer>
                <LabelDark htmlFor="usernameDark">USERNAME</LabelDark>
                <InputDark
                  type="text"
                  id="userName"
                  placeholder="Username"
                  value={userName}
                  onChange={this.onChangeUserName}
                />
              </UserNameContainer>
              <UserNameContainer>
                <LabelDark htmlFor="passwordDark">PASSWORD</LabelDark>
                <InputDark
                  type="password"
                  id="passwordDark"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </UserNameContainer>
              <PasswordContainer>
                <InputCheckbox
                  type="checkbox"
                  id="showPassword"
                  onClick={this.onClickChangeStatus}
                />
                <LabelShowPasswordDark htmlFor="showPassword">
                  Show Password
                </LabelShowPasswordDark>
              </PasswordContainer>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </LoginContainerDark>
          </LoginPageDark>
        )}
      </>
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

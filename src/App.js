import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Header from './components/Header'
import ThemeContext from './context/ThemeContext'

// Replace your code here

class App extends Component {
  state = {lightTheme: false}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.theme}))
  }

  render() {
    const {lightTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Header} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

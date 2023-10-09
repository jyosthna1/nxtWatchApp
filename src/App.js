import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

class App extends Component {
  state = {lightTheme: true}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

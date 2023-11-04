import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'
import Trending from './components/Trending'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here

class App extends Component {
  state = {lightTheme: true, savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  addSaveListItem = videoData => {
    this.setState(prevState => ({saveButton: !prevState.saveButton}))
    this.setState(prevState => ({
      savedList: [...prevState.savedList, videoData],
    }))
  }

  removeSaveItem = id => {
    const {savedList} = this.state
    this.setState(prevState => ({saveButton: !prevState.saveButton}))
    const updatedList = savedList.filter(eachItem => eachItem.id !== id)
    this.setState({savedList: updatedList})
  }

  render() {
    const {lightTheme, savedList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          lightTheme,
          savedList,
          changeTheme: this.changeTheme,
          addSaveListItem: this.addSaveListItem,
          removeSaveItem: this.removeSaveItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

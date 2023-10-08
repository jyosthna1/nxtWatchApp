import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {TrendingContainer, TrendingIcon} from './styledComponents'

class TrendingPage extends Component {
  render() {
    const {lightTheme} = this.props
    return (
      <TrendingContainer lightTheme={lightTheme}>
        <TrendingIcon type="button">
          <HiFire />
        </TrendingIcon>
      </TrendingContainer>
    )
  }
}

const Trending = () => (
  <ThemeContext>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <TrendingPage lightTheme={lightTheme} />
        </>
      )
    }}
  </ThemeContext>
)

export default Trending

import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import {LeftBannerVideosContainer, LeftBannerIcons} from './styledComponents'

const Trending = () => (
  <ThemeContext>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <LeftBannerVideosContainer lightTheme={lightTheme}>
            <LeftBannerIcons>
              <SideBar />
            </LeftBannerIcons>
          </LeftBannerVideosContainer>
        </>
      )
    }}
  </ThemeContext>
)

export default Trending

import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import SideBar from '../SideBar'
import {
  LeftBannerVideosContainer,
  LeftBannerIcons,
  TrendingContainer,
  IconAndVideosDisplayContainer,
  PageIconContainer,
  PageName,
  IconTrendingButton,
} from './styledComponents'

const Trending = () => (
  <ThemeContext>
    {value => {
      const {lightTheme} = value
      return (
        <>
          <Header />
          <TrendingContainer>
            <LeftBannerVideosContainer lightTheme={lightTheme}>
              <LeftBannerIcons>
                <SideBar />
              </LeftBannerIcons>
            </LeftBannerVideosContainer>
            <IconAndVideosDisplayContainer lightTheme={lightTheme}>
              <PageIconContainer lightTheme={lightTheme}>
                <IconTrendingButton type="button">
                  <HiFire size="20px" />
                </IconTrendingButton>
                <PageName lightTheme={lightTheme}>Trending</PageName>
              </PageIconContainer>
            </IconAndVideosDisplayContainer>
          </TrendingContainer>
        </>
      )
    }}
  </ThemeContext>
)

export default Trending

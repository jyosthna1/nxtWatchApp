import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  FailureContainer,
  FailureImage,
  FailureHead,
  FailureInfo,
  RetryButton,
} from './styledComponents'

const FailureView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value

      const image = lightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      return (
        <FailureContainer>
          <FailureImage src={image} alt="failure view" />
          <FailureHead lightTheme={lightTheme}>
            Oops! Something Went Wrong
          </FailureHead>
          <FailureInfo lightTheme={lightTheme}>
            We are having some trouble to complete some request. <br /> Please
            try again.
          </FailureInfo>
          <Link to="/">
            <RetryButton type="button">Retry</RetryButton>
          </Link>
        </FailureContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default FailureView

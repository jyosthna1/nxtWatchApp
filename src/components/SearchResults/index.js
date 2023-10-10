import {
  NoSearchResultsContainer,
  NoSearchResultsImage,
  SearchHead,
  SearchPara,
  SearchButtonRetry,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const SearchResults = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightTheme} = value
      return (
        <NoSearchResultsContainer>
          <NoSearchResultsImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <SearchHead lightTheme={lightTheme}>
            No Search results found
          </SearchHead>
          <SearchPara>
            Try different key words or remove search filter
          </SearchPara>
          <SearchButtonRetry type="button">Retry</SearchButtonRetry>
        </NoSearchResultsContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SearchResults

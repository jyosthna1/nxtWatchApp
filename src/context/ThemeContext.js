import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
  savedList: [],
  addSaveListItem: () => {},
})

export default ThemeContext

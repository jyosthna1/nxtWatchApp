import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
  savedList: [],
  addSaveListItem: () => {},
  removeSaveItem: () => {},
})

export default ThemeContext

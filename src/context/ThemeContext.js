import React from 'react'

const ThemeContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
  savedList: [],
  addSaveListItem: () => {},
  saveButton: false,
  removeSaveItem: () => {},
})

export default ThemeContext

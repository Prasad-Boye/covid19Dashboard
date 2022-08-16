import React from 'react'

const ThemeContext = React.createContext({
  activeSectionId: 'HOME',
  changeActiveSection: () => {},
})

export default ThemeContext

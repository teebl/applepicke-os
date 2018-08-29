import React from 'react'

export const MenuContext = React.createContext({
  topbar: {
    widgets: [
      'date',
      'time'
    ]
  },
  bottombar: {
    widgets: [
    ]
  }
})


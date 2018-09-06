import React from 'react'

export const Menu = React.createContext({
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


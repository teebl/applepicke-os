import React from 'react'

export const Window = React.createContext({
  windows: [],
  addWindow: windowType => {},
  removeWindow: windowId => {},
  minimizeWindow: windowId => {}
})


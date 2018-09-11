import { createStore } from 'react-contextual'

export const windowStore = createStore({
  lastId: 0,
  windows: [],

  addWindow: windowType => state => {
    const newId = state.lastId + 1
    const windows = [...state.windows, {
      id: newId
    }]

    return {
      lastId: newId,
      focusedWindowId: newId,
      windows
    }
  },

  removeWindow: windowId => state => {
    const windows = state.windows.filter(w => w.id !== windowId)
    return { windows }
  },

  focusWindow: windowId => state => {
    return {
      focusedWindowId: windowId
    }
  },

  minimizeWindow: windowId => {}
})


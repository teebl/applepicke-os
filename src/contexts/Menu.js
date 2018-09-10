import { createStore } from 'react-contextual'

export const menuStore = createStore({
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


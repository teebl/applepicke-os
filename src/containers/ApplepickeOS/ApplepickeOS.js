import './ApplepickeOS.css'

import React from 'react'
import Helmet from 'react-helmet'
import { Provider } from 'react-contextual'
import { menuStore } from '../../contexts/Menu'
import { windowStore } from '../../contexts/Window'

import { TopBar } from '../../components/Menu/TopBar'
import { BottomBar } from '../../components/Menu/BottomBar'
import { WindowManager } from '../../containers/WindowManager'

class ApplepickeOS extends React.Component {
  render() {
    return (
      <div className='applepicke-os'>
        <Provider store={windowStore}>
          <Helmet>
            <title>Applepicke OS</title>
          </Helmet>

          <Provider store={menuStore}>
            <TopBar />
            <BottomBar />
          </Provider>

          <WindowManager />
        </Provider>
      </div>
    )
  }
}

export default ApplepickeOS

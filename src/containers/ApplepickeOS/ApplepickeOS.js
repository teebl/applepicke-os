import './ApplepickeOS.css'

import React from 'react'
import Helmet from 'react-helmet'

import { TopBar } from '../../components/Menu/TopBar'
import { BottomBar } from '../../components/Menu/BottomBar'

class ApplepickeOS extends React.Component {
  render() {
    return (
      <div className='applepicke-os'>
        <Helmet>
          <title>Applepicke OS</title>
        </Helmet>

        <TopBar />
        <BottomBar />
      </div>
    )
  }
}

export default ApplepickeOS

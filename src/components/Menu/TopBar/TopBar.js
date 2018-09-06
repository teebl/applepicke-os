import './TopBar.css'
import React from 'react'

import { WidgetGroup } from '../Widgets/WidgetGroup'

import { Menu } from '../../../contexts/Menu'

class TopBar extends React.Component {
  render() {
    return (
      <Menu.Consumer>
        {({ topbar }) => (
          <header className='topbar menu'>
            <div className='topbar-inner'>
              <div style={{ marginRight: 'auto' }}>
                <span>
                  Applepicke OS
                </span>
              </div>

              <WidgetGroup widgets={topbar.widgets} />
            </div>
          </header>
        )}

      </Menu.Consumer>
    )
  }
}

export default TopBar

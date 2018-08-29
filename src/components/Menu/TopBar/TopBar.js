import './TopBar.css'
import React from 'react'

import { WidgetGroup } from '../Widgets/WidgetGroup'

import { MenuContext } from '../../../contexts/MenuContext'

class TopBar extends React.Component {
  render() {
    return (
      <MenuContext.Consumer>
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

      </MenuContext.Consumer>
    )
  }
}

export default TopBar

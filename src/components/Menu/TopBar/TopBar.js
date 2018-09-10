import './TopBar.css'
import React from 'react'
import { Subscribe } from 'react-contextual'
import { WidgetGroup } from '../Widgets/WidgetGroup'
import { menuStore } from '../../../contexts/Menu'
import { windowStore } from '../../../contexts/Window'

class TopBar extends React.Component {
  render() {
    return (
      <Subscribe to={menuStore}>
        {({ topbar }) => (
          <header className='topbar menu'>
            <div className='topbar-inner'>
              <div style={{ marginRight: 'auto' }}>
                <span>
                  Applepicke OS
                </span>
                <Subscribe to={windowStore}>
                  {({ addWindow }) => (
                    <button onClick={() => addWindow('hello')}>Add Window</button>
                  )}
                </Subscribe>
              </div>

              <WidgetGroup widgets={topbar.widgets} />
            </div>
          </header>
        )}
      </Subscribe>
    )
  }
}

export default TopBar

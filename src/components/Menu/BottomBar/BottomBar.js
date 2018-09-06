import './BottomBar.css'
import React from 'react'
import { WidgetGroup } from '../Widgets/WidgetGroup'
import { Menu } from '../../../contexts/Menu'

class BottomBar extends React.Component {
  render() {
    return (
      <Menu.Consumer>
        {({ bottombar }) => (
          <footer className='bottombar menu'>
            <div className='bottombar-inner'>
              <WidgetGroup widgets={bottombar.widgets} />
            </div>
          </footer>
        )}
      </Menu.Consumer>
    )
  }
}

export default BottomBar

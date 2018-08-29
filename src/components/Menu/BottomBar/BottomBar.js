import './BottomBar.css'
import React from 'react'
import { WidgetGroup } from '../Widgets/WidgetGroup'
import { MenuContext } from '../../../contexts/MenuContext'

class BottomBar extends React.Component {
  render() {
    return (
      <MenuContext.Consumer>
        {({ bottombar }) => (
          <footer className='bottombar menu'>
            <div className='bottombar-inner'>
              <WidgetGroup widgets={bottombar.widgets} />
            </div>
          </footer>
        )}
      </MenuContext.Consumer>
    )
  }
}

export default BottomBar

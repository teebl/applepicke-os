import './BottomBar.css'
import React from 'react'
import { Subscribe } from 'react-contextual'
import { WidgetGroup } from '../Widgets/WidgetGroup'
import { menuStore } from '../../../contexts/Menu'

class BottomBar extends React.Component {
  render() {
    return (
      <Subscribe to={menuStore}>
        {({ bottombar }) => (
          <footer className='bottombar menu'>
            <div className='bottombar-inner'>
              <WidgetGroup widgets={bottombar.widgets} />
            </div>
          </footer>
        )}
      </Subscribe>
    )
  }
}

export default BottomBar

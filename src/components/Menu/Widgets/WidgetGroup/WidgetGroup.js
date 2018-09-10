import './WidgetGroup.css'

import React from 'react'
import { DateWidget } from '../DateWidget'
import { TimeWidget } from '../TimeWidget'

const WIDGETS = {
  'date': DateWidget,
  'time': TimeWidget
}

class WidgetGroup extends React.Component {
  render() {
    const { widgets } = this.props
    return (
      <div className='widget-group'>
        {widgets.map(widget => {
          const Widget = WIDGETS[widget]

          return (
            <Widget key={widget} />
          )
        })}
      </div>
    )
  }
}

export default WidgetGroup

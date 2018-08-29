import React from 'react'
import moment from 'moment'

class TimeWidget extends React.Component {
  getTime = () => {
    return moment().format('LT')
  }

  render() {
    return (
      <div className='time-widget'>
        {this.getTime()}
      </div>
    )
  }
}

export default TimeWidget

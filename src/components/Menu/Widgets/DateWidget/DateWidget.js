import React from 'react'
import moment from 'moment'

class DateWidget extends React.Component {
  getDate = () => {
    return moment().format('LL')
  }

  render() {
    return (
      <div className='date-widget'>
        {this.getDate()}
      </div>
    )
  }
}

export default DateWidget

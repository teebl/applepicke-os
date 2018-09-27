import React from 'react'
import moment from 'moment'

class TimeWidget extends React.Component {
  state = {
    time: moment()
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: moment() }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { time } = this.state

    return (
      <div className='time-widget'>
        {time.format('LT')}
      </div>
    )
  }
}

export default TimeWidget

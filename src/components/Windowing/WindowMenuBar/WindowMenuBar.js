import './WindowMenuBar.css'

import React from 'react'

export class WindowMenuBar extends React.Component {
  constructor(props) {
    const {
      handleWindowMove,
      handleClickStart,
      handleClickEnd
    } = props

    super(props)

    this.onWindowMove = window.addEventListener('mousemove', handleWindowMove)
    this.onMouseDown = window.addEventListener('mousedown', handleClickStart)
    this.onMouseUp = window.addEventListener('mouseup', handleClickEnd)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onWindowMove)
    window.removeEventListener('mousedown', this.onMouseDown)
    window.removeEventListener('mouseup', this.onMouseUp)
  }

  render() {
    const { innerRef, removeWindow, windowId } = this.props

    return (
      <div
        className='window-menu-bar'
        ref={innerRef}
      >
        <div className='menu-items'>
        </div>

        <div
          className='menu-close'
          onClick={() => { removeWindow(windowId) }}
        >
          <i className='icon-cross' />
        </div>
      </div>
    )
  }
}

export default WindowMenuBar

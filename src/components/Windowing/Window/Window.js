import './Window.css'
import React from 'react'
import { WindowMenuBar } from '../WindowMenuBar'

const WINDOW_OFFSET_TOP = 40

export class Window extends React.Component {

  handleClickStart = e => {
    if (e.target === this.menuBar) {
      this.mouseDown = true
      this.currentX = e.clientX
      this.currentY = e.clientY
    }
  }

  handleClickEnd = e => {
    this.mouseDown = false
  }

  handleWindowMove = e => {
    const { top, left } = this.state

    if (this.mouseDown) {
      const newX = left + e.clientX - this.currentX
      const newY = top + e.clientY - this.currentY

      this.currentX = e.clientX
      this.currentY = e.clientY

      this.setState({
        left: newX,
        top: newY < WINDOW_OFFSET_TOP ? WINDOW_OFFSET_TOP : newY
      })
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      width: 500,
      height: 400,
      top: WINDOW_OFFSET_TOP,
      left: 0,
      focused: false
    }
  }

  render() {
    const {
      children,
      id,
      focused,
      focusWindow,
      removeWindow
    } = this.props

    const {
      width,
      height,
      top,
      left,
    } = this.state

    return (
      <div
        className='window'
        style={{
          width,
          height,
          top,
          left,
          zIndex: focused ? 2999 : null
        }}
        onMouseDown={focusWindow}
        ref={w => this.window = w}
      >
        <WindowMenuBar
          innerRef={menuBar => this.menuBar = menuBar}
          handleWindowMove={this.handleWindowMove}
          handleClickStart={this.handleClickStart}
          handleClickEnd={this.handleClickEnd}
          removeWindow={removeWindow}
          windowId={id}
        />

        {children}
      </div>
    )
  }
}

export default Window

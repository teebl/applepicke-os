import './Window.css'
import React from 'react'
import classnames from 'classnames'
import { WindowMenuBar } from '../WindowMenuBar'

const WINDOW_OFFSET_TOP = 40

export class Window extends React.Component {

  handleClickStart = e => {
    if (e.target === this.menuBar) {
      this.mouseDown = true
      this.currentX = e.clientX
      this.currentY = e.clientY
    } else if (e.target === this.grabTop) {
      this.grabbing = 'top'
    } else if (e.target === this.grabRight) {
      this.grabbing = 'right'
    } else if (e.target === this.grabBottom) {
      this.grabbing = 'bottom'
    } else if (e.target === this.grabLeft) {
      this.grabbing = 'left'
    }
  }

  handleClickEnd = e => {
    this.mouseDown = false
    this.grabbing = null
    this.setState({  })
  }

  handleWindowMove = e => {
    const { top, left, width, height } = this.state

    const newPosition = { left, top, width, height }
    const deltaX = e.clientX - this.currentX
    const deltaY = e.clientY - this.currentY
    const newX = left + deltaX
    const newY = top + deltaY

    this.currentX = e.clientX
    this.currentY = e.clientY

    if (this.mouseDown) {
      newPosition.left = newX
      newPosition.top = newY < WINDOW_OFFSET_TOP ? WINDOW_OFFSET_TOP : newY
    }
    else if (this.grabbing) {
      if (this.grabbing === 'right')
        newPosition.width += deltaX
      else if (this.grabbing === 'left') {
        newPosition.left += deltaX
        newPosition.width -= deltaX
      }
      else if (this.grabbing === 'top') {
        newPosition.top += deltaY
        newPosition.height -= deltaY
      }
      else if (this.grabbing === 'bottom')
        newPosition.height += deltaY
    }
    else {
      return
    }

    this.setState(newPosition)
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

    const className = classnames(
      'window',
      'grab-container',
      { 'window-dragging': this.mouseDown }
    )

    return (
      <div
        className={className}
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
        <div ref={grabTop => this.grabTop = grabTop} className='grab-top' />
        <div ref={grabRight => this.grabRight = grabRight} className='grab-right' />
        <div ref={grabBottom => this.grabBottom = grabBottom} className='grab-bottom' />
        <div ref={grabLeft => this.grabLeft = grabLeft} className='grab-left' />

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

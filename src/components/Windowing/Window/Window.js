import "./Window.css";
import React from "react";
import classnames from "classnames";
import { WindowMenuBar } from "../WindowMenuBar";
import Calculator from "../../Applications/Calculator/Calculator";

const WINDOW_OFFSET_TOP = 40;
const BORDER_SIZE = 2;

const APPS = {
  calculator: <Calculator />
};

export class Window extends React.Component {
  handleClickStart = e => {
    if (e.button !== 0) {
      return;
    }

    if (e.target === this.menuBar) {
      this.mouseDown = true;
      this.currentX = e.clientX;
      this.currentY = e.clientY;
    } else if (e.target === this.grabTop) {
      this.grabbing = "top";
    } else if (e.target === this.grabTopRight) {
      this.grabbing = "topright";
    } else if (e.target === this.grabRight) {
      this.grabbing = "right";
    } else if (e.target === this.grabBottomRight) {
      this.grabbing = "bottomright";
    } else if (e.target === this.grabBottom) {
      this.grabbing = "bottom";
    } else if (e.target === this.grabBottomLeft) {
      this.grabbing = "bottomleft";
    } else if (e.target === this.grabLeft) {
      this.grabbing = "left";
    } else if (e.target === this.grabTopLeft) {
      this.grabbing = "topleft";
    }
  };

  handleClickEnd = e => {
    this.mouseDown = false;
    this.grabbing = "";
    this.setState({});
  };

  handleWindowMove = e => {
    const { top, left, width, height } = this.state;

    const newPosition = { left, top, width, height };
    const deltaX = e.clientX - this.currentX;
    const deltaY = e.clientY - this.currentY;
    const newX = left + deltaX;
    const newY = top + deltaY;

    this.currentX = e.clientX;
    this.currentY = e.clientY;

    if (this.mouseDown) {
      newPosition.left = newX;
      newPosition.top = newY < WINDOW_OFFSET_TOP ? WINDOW_OFFSET_TOP : newY;
    } else if (this.grabbing) {
      if (this.grabbing.includes("right")) newPosition.width += deltaX;
      if (this.grabbing.includes("left")) {
        newPosition.left += deltaX;
        newPosition.width -= deltaX;
      }
      if (this.grabbing.includes("top")) {
        newPosition.top += deltaY;
        newPosition.height -= deltaY;
      }
      if (this.grabbing.includes("bottom")) newPosition.height += deltaY;
    } else {
      return;
    }

    this.setState(newPosition);
  };

  maximize = () => {
    const border = BORDER_SIZE * 2;

    this.setState({
      top: WINDOW_OFFSET_TOP,
      left: 0,
      height: window.innerHeight - WINDOW_OFFSET_TOP - border,
      width: window.innerWidth - border
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      width: 500,
      height: 400,
      top: WINDOW_OFFSET_TOP,
      left: 0,
      focused: false
    };

    this.grabbing = "";
  }

  render() {
    const { application, id, focused, focusWindow, removeWindow } = this.props;

    const { width, height, top, left } = this.state;

    const className = classnames("window", "grab-container", {
      "window-dragging": this.mouseDown
    });

    const windowApp = APPS[this.props.application];

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
        ref={w => (this.window = w)}
      >
        <div ref={grabTop => (this.grabTop = grabTop)} className="grab-top" />
        <div
          ref={grabRight => (this.grabRight = grabRight)}
          className="grab-right"
        />
        <div
          ref={grabBottom => (this.grabBottom = grabBottom)}
          className="grab-bottom"
        />
        <div
          ref={grabLeft => (this.grabLeft = grabLeft)}
          className="grab-left"
        />
        <div
          ref={grabTopRight => (this.grabTopRight = grabTopRight)}
          className="grab-top-right"
        />
        <div
          ref={grabBottomRight => (this.grabBottomRight = grabBottomRight)}
          className="grab-bottom-right"
        />
        <div
          ref={grabBottomLeft => (this.grabBottomLeft = grabBottomLeft)}
          className="grab-bottom-left"
        />
        <div
          ref={grabTopLeft => (this.grabTopLeft = grabTopLeft)}
          className="grab-top-left"
        />
        <WindowMenuBar
          innerRef={menuBar => (this.menuBar = menuBar)}
          handleWindowMove={this.handleWindowMove}
          handleClickStart={this.handleClickStart}
          handleClickEnd={this.handleClickEnd}
          maximizeWindow={this.maximize}
          removeWindow={removeWindow}
          windowId={id}
        />
        {windowApp}
      </div>
    );
  }
}

export default Window;

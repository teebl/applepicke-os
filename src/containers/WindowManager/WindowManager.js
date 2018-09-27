import "./WindowManager.css";

import React from "react";
import { Subscribe } from "react-contextual";
import { windowStore } from "../../contexts/Window";
import { Window } from "../../components/Windowing/Window";

export class WindowManager extends React.Component {
  render() {
    return (
      <div className="window-manager">
        <Subscribe to={windowStore}>
          {({ focusedWindowId, windows, focusWindow, removeWindow }) =>
            windows.map(w => (
              <Window
                key={w.id}
                application={w.application}
                {...w}
                focused={w.id === focusedWindowId}
                focusWindow={() => focusWindow(w.id)}
                removeWindow={() => removeWindow(w.id)}
              />
            ))
          }
        </Subscribe>
      </div>
    );
  }
}

export default WindowManager;

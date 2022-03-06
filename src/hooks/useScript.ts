import { useState, useEffect } from "react";

const READY_STATUS = 'ready'
const LOAD_STATUS = 'load'
const ERROR_STATUS = 'error'

const useScript = (src: string) => {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");
  useEffect(
    () => {
      // Allow falsy src value if waiting on other data needed for
      // constructing the script URL passed to this hook.
      if (!src) {
        setStatus("idle");
        return;
      }

      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script: any = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        // Create script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Add script to document body
        document.body.appendChild(script);
        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event: any) => {
          script.setAttribute(
            "data-status",
            event.type === LOAD_STATUS ? READY_STATUS : ERROR_STATUS
          );
        };
        script.addEventListener(LOAD_STATUS, setAttributeFromEvent);
        script.addEventListener(ERROR_STATUS, setAttributeFromEvent);
      } else {
        // Grab existing script status from attribute and set to state.
        setStatus(script.getAttribute("data-status"));
      }
      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event: any) => {
        setStatus(event.type === LOAD_STATUS ? READY_STATUS : ERROR_STATUS);
      };
      // Add event listeners
      script.addEventListener(LOAD_STATUS, setStateFromEvent);
      script.addEventListener(ERROR_STATUS, setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener(LOAD_STATUS, setStateFromEvent);
          script.removeEventListener(ERROR_STATUS, setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );

  return { status, isReady: status === READY_STATUS };
};

export default useScript;

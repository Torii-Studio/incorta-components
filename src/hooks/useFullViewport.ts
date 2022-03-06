import { useState, useEffect } from "react";

import { getRectDimensions } from 'utils/general';

const DEFAULT_RECT = {
  width: 400,
  height: 400
};

const useFullViewport = (ref: any) => {
  const [rect, setRect] = useState(DEFAULT_RECT)

  const updateProps = () => {
    if (!ref ||  !ref?.current?.parentNode) return null

    const { width, height } = getRectDimensions(ref?.current.parentNode)

    setRect({
      width,
      height
    })
  }

  useEffect(() => {
    updateProps()
  }, [ref])


  useEffect(() => {
    window.addEventListener('resize', updateProps)

    return () => {
      window.removeEventListener('resize', updateProps)
    }
  }, [])


  return {
    rect
  };
};

export default useFullViewport;

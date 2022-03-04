import React from 'react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import './index.css'

const {
  ipad,
  ipad10p,
  ipad12p,
  iphone8p,
  iphonex,
  iphonexsmax,
  nexus6p,
  pixel,
  pixelxl,
} = INITIAL_VIEWPORTS

export const parameters = {
  viewport: {
    viewports: {
      ipad,
      ipad10p,
      ipad12p,
      iphone8p,
      iphonex,
      iphonexsmax,
      nexus6p,
      pixel,
      pixelxl,
    },
  },
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sortStoriesByKind: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    enableShortcuts: true,
    isToolshown: true,
  },
}

export const decorators = [
  Story => (
    <Story />
  ),
]

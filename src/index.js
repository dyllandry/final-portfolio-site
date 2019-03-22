import lazyload from './scripts/lazyload.js'

// styles
require(`./styles/global-styles.scss`)
require(`./styles/index.scss`)
require(`./styles/about-tile.scss`)
require(`./styles/featured-work-tile.scss`)

// scripts
require(`./scripts/lazyload.js`)
require(`./scripts/burger.js`)
require(`./scripts/handle-outline.js`)
require(`./scripts/nav-location-outline.js`)
require(`./scripts/featured-work.js`)

document.addEventListener('DOMContentLoaded', lazyload.init)

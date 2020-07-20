const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/contact.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/elements.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/gallery.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/landing.js"))),
  "component---src-pages-lux-floors-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/lux-floors.js"))),
  "component---src-pages-lux-garage-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/lux-garage.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/Users/danielmonk/Sites/lux-floors/src/pages/success.js")))
}


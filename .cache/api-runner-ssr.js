var plugins = [{
      plugin: require('/Users/danielmonk/Sites/lux-floors/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/danielmonk/Sites/lux-floors/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/assets/images/LuxFloors-white.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"47c59053f4bbea07f33f2ae057fe1f17"},
    },{
      plugin: require('/Users/danielmonk/Sites/lux-floors/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"'UA-182568014-1"},
    },{
      plugin: require('/Users/danielmonk/Sites/lux-floors/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-KPPZ658","includeInDevelopment":false,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}},"gtmAuth":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING","gtmPreview":"YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME","dataLayerName":"YOUR_DATA_LAYER_NAME","routeChangeEventName":"YOUR_ROUTE_CHANGE_EVENT_NAME"},
    },{
      plugin: require('/Users/danielmonk/Sites/lux-floors/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

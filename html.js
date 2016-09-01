import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let css
    // if (process.env.NODE_ENV === 'production') {
    //   css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    // }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.0.0-beta.31/css/tachyons.min.css" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons-flex@1.1.1/tachyons-flex.min.css" />
          {css}
          <script src="https://use.typekit.net/akb7dng.js"></script>
          <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: true });}catch(e){}' }} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})

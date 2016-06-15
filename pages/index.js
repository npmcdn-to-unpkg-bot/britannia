import React from 'react'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { compose, addIndex, map, split } from 'ramda'
import PersonGrid from '../components/PersonGrid'
import './example.css'

const mapI = addIndex(map)

function Paragraphs ({ className, children }) {
  return (
    <div>
      { compose(
          mapI((pg, i) => <p className={className}>{pg}</p>),
          split('\n')
        )(children)
      }
    </div>
  )
}

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
        <section className="tc bg-beige pa3 ph5-ns">
          <h1 className="tk-p22-underground ttu red lh-title">{config.hero.title}</h1>
          <h2 className="tk-p22-underground lh-title">{ config.hero.subtitle }</h2>
        </section>
        <div className="cf">
          <PersonGrid title="Goodies" text={ config.goodies.text } people={ config.goodies.people } />
          <PersonGrid title="Baddies" text={ config.baddies.text } people={ config.baddies.people } />
        </div>
        <section className="pa3">
          <h1 className="tk-p22-underground ttu lh-title">{ config.footer.title }</h1>
          <Paragraphs className="f5 f4-ns measure-wide lh-copy tk-franklin-gothic-urw">{ config.footer.text }</Paragraphs>
          <div className="bg-blue fw5 white tk-p22-underground dib pv3 ph4 br2 f4 ttu tracked mr4">Testing</div>
          <div className="bg-red white tk-p22-underground dib pv3 ph4 br2 f4 ttu tracked">Testing</div>
        </section>
      </div>
        {/* <div> */}
        {/*   <h1> */}
        {/*     Hi people */}
        {/*   </h1> */}
        {/*   <p>Welcome to your new Gatsby site</p> */}
        {/*   <h2>Below are some pages showing different capabilities built-in to Gatsby</h2> */}
        {/*   <h3>Supported file types</h3> */}
        {/*   <ul> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/markdown/')}>Markdown</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/react/')}>JSX (React components)</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/html/')}>HTML</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/json/')}>JSON</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/yaml/')}>YAML</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/toml/')}>TOML</Link> */}
        {/*     </li> */}
        {/*   </ul> */}
        {/*   <h3>Supported CSS processors</h3> */}
        {/*   <ul> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/postcss/')}>PostCSS</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/sass/')}>Sass</Link> */}
        {/*     </li> */}
        {/*     <li> */}
        {/*       <Link to={prefixLink('/less/')}>Less</Link> */}
        {/*     </li> */}
        {/*   </ul> */}
        {/* </div> */}
      </DocumentTitle>
    )
  }
}

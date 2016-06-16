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
        <section className="pa3">
          <Paragraphs className="f5 f4-ns measure-wide lh-copy tk-franklin-gothic-urw">{ config.letter.text }</Paragraphs>
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
      </DocumentTitle>
    )
  }
}

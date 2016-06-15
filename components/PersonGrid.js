import React from 'react'

function Person ({ title, d }) {
  return <li className="w-50 w-50-m w-33-l ma0 pa2">
    <h3 className="tk-franklin-gothic-urw lh-title">{ title }</h3>
    <p className="tk-franklin-gothic-urw lh-title">{ d }</p>
  </li>
}

export default function PersonGrid ({title, text, people}) {
  return (
    <div className="bg-near-white w-50-ns fl pa2">
      <h3 className="ph2 f4 lh-title tk-franklin-gothic-urw">{title}</h3>
      <p className="ph2 f4 lh-copy tk-franklin-gothic-urw">{text}</p>
      <ul className="df list pa0 flx-w">
        { people.map(p => <Person key={p.title} {...p} /> ) }
      </ul>
    </div>
  )
}

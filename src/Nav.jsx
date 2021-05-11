import * as React from 'react'
import './Nav.css'

export default function Navigation() {
  return (
    <section className="Nav">
      <button className="NavButton" data-active>
        Home
      </button>
      <button className="NavButton">Setting</button>
      <button className="NavButton">Profile</button>
    </section>
  )
}

import * as React from 'react'
import './Cards.css'

export default function Cards({ isActive }) {
  return (
    <section className="Cards">
      <h2>Frage</h2>
      <p>Du oder Ich?</p>
      <div
        role="button"
        className={isActive ? 'Cards__bookmark--selected' : 'Cards__bookmark'}
        aria-label="Add bookmarks"
      ></div>
    </section>
  )
}

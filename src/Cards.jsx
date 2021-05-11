import * as React from 'react'
import './Cards.css'

export default function Cards({ isBookmarked, title, text }) {
  return (
    <section className="Cards">
      <h2>{title}</h2>
      <p>{text}</p>
      <div
        role="button"
        className={
          isBookmarked
            ? 'Cards__bookmark--selected Cards__bookmark'
            : 'Cards__bookmark'
        }
        aria-label="Add bookmarks"
      ></div>
    </section>
  )
}

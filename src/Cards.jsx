import * as React from 'react'
import './Cards.css'

export default function Cards({
  isVisible,
  isBookmarked,
  question,
  textQuestion,
  answer,
  textAnswer,
  tags,
}) {
  return (
    <section className="Cards">
      <h2>{question}</h2>
      <p>{textQuestion}</p>
      <h2>{answer}</h2>
      <p className={isVisible ? 'textAnswer' : 'hidden'}>{textAnswer}</p>
      <div
        role="button"
        className={
          isBookmarked
            ? 'Cards__bookmark--selected Cards__bookmark'
            : 'Cards__bookmark'
        }
        aria-label="Add bookmarks"
      ></div>
      <div>
        <ul className="Tags">
          {/* alles was ich mappe, braucht einen "key" */}
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

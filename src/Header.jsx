import * as React from 'react'
import './Header.css'

export default function Header({ text }) {
  return (
    <section className="Header">
      <h1>{text}</h1>
    </section>
  )
}

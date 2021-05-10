import * as React from 'react'
import './Header.css'

export default function Header({ text }) {
  return (
    <section className="Header">
      <H1>{text}</H1>
    </section>
  )
}

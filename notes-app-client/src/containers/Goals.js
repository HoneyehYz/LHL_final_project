import React from 'react'
import "./Goals.css"
import Empty from "./components/Empty"

export default function Goals() {
  return (
    <main className="goals">
    <section className="goal">
      <h3>Goals</h3>
      <Empty/>
    </section>
    <section className="milestone">
      <h3>Milestones</h3>
      </section>
  </main>
  )
}

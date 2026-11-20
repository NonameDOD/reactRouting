import React from 'react'
import { Link } from 'react-router/internal/react-server-client'

function Public() {
  return (
    <section>
        <h2>Publikus oldal</h2>
        <p> Itt jelennek meg a termékek.</p>
        <Link to="/termek/5">5-ös termék</Link>
    </section>

  )
}

export default Public
import React from 'react'
import { Link } from 'react-router/internal/react-server-client'

function Admin() {
  return (

    <section>
        <h2>Admin oldal</h2>
        <p> Itt jelennek meg a termékek.</p>
        <Link to="/Admin/uj-termek">Új termék hozzáadása</Link>
    </section>
  )
}

export default Admin
import React from 'react'
import { Link, useParams } from 'react-router';

function AdottTermek() {
    const { id } = useParams();

  return (
    <section>
        <h2>Adott termék oldal</h2>
        <p> termék azonositója {id}</p>
        <Link to="/">Vissza a publikus oldalra</Link>
    </section>
  )
}

export default AdottTermek
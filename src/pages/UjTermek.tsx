import React, { type FormEvent } from 'react'
import { useNavigate } from 'react-router';

function UjTermek() {
    const[title, setTitle] = React.useState("");
    const navigate = useNavigate();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Új termék mentése: ${title}`);
        navigate("/Admin");
    }

  return (
    <div>
      <h2>Új termék hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Termék neve: </label>
          Cím:
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <button type="submit">Mentés</button>
      </form>
    </div>
  )
}

export default UjTermek
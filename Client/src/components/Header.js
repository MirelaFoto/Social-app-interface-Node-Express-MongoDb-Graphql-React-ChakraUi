import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
         <Link to="/">Movie app</Link>
        <div>
            <form>
                <Link to='new'>Add Movie</Link>
                <input type="text" placeholder="search..." name='search' ></input>
  <button type='submit'>Submit</button>          </form>
        </div>
    </div>
  )
}

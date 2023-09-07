import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <nav>
            <Link to="/insert">Add Element</Link>
            <Link to="/getall">Show all element</Link>
        </nav>
        <hr></hr>
        <div style={{border:"1px solid black", margin:"10px"}}>
            <Outlet>
                We should see the component here
            </Outlet>
        </div>
    </div>
  )
}

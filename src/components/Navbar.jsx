import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-[var(--color-blue)] shadow-md">
      <h1 className="text-xl font-bold text-[var(--color-pink)]">My Portfolio</h1>
      <div className="space-x-4">
        <Link className="text-[var(--color-purple)] hover:underline" to="/">Home</Link>
        <Link className="text-[var(--color-purple)] hover:underline" to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar

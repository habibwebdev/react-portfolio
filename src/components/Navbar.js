import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center p-4">
          <NavLink
            className="inline-flex item-center mx-4 py-2 px-3 text-green-100 hover:text-green-200 tracking-widest logo"
            to="/"
            exact
          >
            Abbas Ali
          </NavLink>
          <NavLink
            className="inflex-flex item-center mx-2 p-3 text-green-100 hover:text-green-200 tracking-widest"
            to="/blog"
            activeClassName="text-green-100 bg-green-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            className="inflex-flex item-center mx-2 p-3 text-green-100 hover:text-green-200 tracking-widest"
            to="/projects"
            activeClassName="text-green-100 bg-green-700"
          >
            Projects
          </NavLink>
          <NavLink
            className="inflex-flex item-center mx-2 p-3 text-green-100 hover:text-green-200 tracking-widest"
            to="/about"
            activeClassName="text-green-100 bg-green-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://facebook.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, widht: 35 }}
          />
          <SocialIcon
            url="https://twitter.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, widht: 35 }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, widht: 35 }}
          />
          <SocialIcon
            url="https://Instagram.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, widht: 35 }}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar

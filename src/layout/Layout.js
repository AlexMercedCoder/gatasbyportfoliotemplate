import React from "react"
import {RedH1} from "../styles/mainstyles"
import {Link} from "gatsby"
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <RedH1>Header</RedH1>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/projects">Projects</Link>
          <a href="">Github</a>
          <a href="">LinkedIN</a>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default Layout

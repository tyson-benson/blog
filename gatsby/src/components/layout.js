import * as React from "react"
import { Link } from "gatsby"
import { isBrowser } from "../utils"
import ColorModeToggle from "./colormode"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const preference = isBrowser()
    ? window.localStorage.preferDark == "true"
    : false
  let isDarkPreference =
    preference === true || preference === undefined ? true : false
  let [isDark, setIsDark] = React.useState(isDarkPreference)

  const updateDarkModeClass = () => {
    if (isBrowser()) {
      if (isDark) {
        document.documentElement.setAttribute("data-color-mode", "dark")
      } else {
        document.documentElement.setAttribute("data-color-mode", "light")
      }
      window.localStorage.setItem("preferDark", `${isDark}`)
    }
  }
  updateDarkModeClass()

  const toggleColorMode = e => {
    e.preventDefault()
    setIsDark(!isDark)
    updateDarkModeClass()
  }

  let header = (
    <header className="global-header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reading">Reading</Link>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://github.com/tyson-benson/" className="github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            role="img"
            style={{ height: 25 + "px" }}
          >
            <title>Github</title>
            <path d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"></path>
            <path d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/Tyson_net_au" className="twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            role="img"
            style={{ height: 25 + "px" }}
          >
            <title>Twitter</title>
            <path d="M64 13.194a23.1 23.1 0 0 1-7.3 2.1 14.119 14.119 0 0 0 5.5-7.2c-1.9 1.2-6.1 2.9-8.2 2.9a13.782 13.782 0 0 0-9.6-4 13.187 13.187 0 0 0-13.2 13.2 13.576 13.576 0 0 0 .3 2.9c-9.9-.3-21.5-5.2-28-13.7a13.206 13.206 0 0 0 4 17.4c-1.5.2-4.4-.1-5.7-1.4-.1 4.6 2.1 10.7 10.2 12.9-1.6.8-4.3.6-5.5.4.4 3.9 5.9 9 11.8 9-2.1 2.4-9.3 6.9-18.3 5.5a39.825 39.825 0 0 0 20.7 5.8 36.8 36.8 0 0 0 37-38.6v-.5a22.861 22.861 0 0 0 6.3-6.7z"></path>
          </svg>
        </a>
        {/* <a href="https://youtube.com/tyson-benson" className="youtube">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            role="img"
            style={{ height: 25 + "px" }}
          >
            <title>Youtube</title>
            <path d="M50.708 9H13.292A13.25 13.25 0 0 0 0 22.207v18.586A13.25 13.25 0 0 0 13.292 54h37.416A13.25 13.25 0 0 0 64 40.793V22.207A13.25 13.25 0 0 0 50.708 9zm-8.989 23.4l-17.501 8.3a.7.7 0 0 1-1.005-.63V22.962a.7.7 0 0 1 1.02-.623l17.5 8.812a.7.7 0 0 1-.015 1.253zm0 0"></path>
          </svg>
        </a> */}
        <a
          href="https://www.linkedin.com/in/tysonrbenson/"
          className="linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            role="img"
            style={{ height: 25 + "px" }}
          >
            <title>Linkedin</title>
            <path d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"></path>
          </svg>
        </a>
      </div>
      <div>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </div>
    </header>
  )

  return (
    <div
      className="global-wrapper"
      data-is-root-path={isRootPath}
      data-color-mode={isDark ? `dark` : `light`}
    >
      {header}
      <main className="content-wrapper">{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `}
        <a href="https://www.gatsbyjs.com">Tyson Benson</a>. Powered by
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        and
        {` `}
        <a href="https://azure.microsoft.com">Azure</a>.{` `}
        Build
        {` `}
        <a href="https://github.com/tyson-benson/blog/commit/6167acae10b3bb9ba88aa3af7a2f3d0603ae56c9">
          6167acae
        </a>
      </footer>
    </div>
  )
}

export default Layout

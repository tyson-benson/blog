import * as React from "react"
import { Link } from "gatsby"
import { isBrowser } from "../utils"
import TwitterIcon from "../images/twitter-icon.svg"
import GitHubIcon from "../images/github-icon.svg"
import YouTubeIcon from "../images/youtube-icon.svg"
import LinkedInIcon from "../images/linkedin-icon.svg"
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
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://github.com/tyson-benson/" className="github">
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a href="https://twitter.com/Tyson_net_au" className="twitter">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="https://youtube.com/tyson-benson" className="youtube">
          <img src={YouTubeIcon} alt="YouTube" />
        </a>
        <a
          href="https://www.linkedin.com/in/tysonrbenson/"
          className="linkedin"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </div>
    </header>
  )

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

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

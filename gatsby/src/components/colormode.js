import * as React from "react"
import DarkModeIcon from "../images/dark-mode.svg"
import LightModeIcon from "../images/light-mode.svg"

const ColorModeToggle = ({ isDark, toggle }) => (
  <button
    className="color-toggle-btn"
    onClick={toggle}
    type="button"
    aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
  >
    <img src={isDark ? LightModeIcon : DarkModeIcon} />
  </button>
)

export default ColorModeToggle

import { isBrowser } from "../utils"

if (isBrowser()) {
  window.Tawk_API = window.Tawk_API || {}
  window.Tawk_LoadStart = new Date()
  ;(function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/6177aacaf7c0440a591ffd8a/1fitn6a1o"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0.parentNode.insertBefore(s1, s0)
  })()
}

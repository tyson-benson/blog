export const isBrowser = () => typeof window !== "undefined"

export const getDarkPreference = () =>
  isBrowser() ? window.localStorage.preferDark == "true" : false

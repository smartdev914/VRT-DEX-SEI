import { useContext } from 'react'
import Cookie from 'js-cookie'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { useTheme as useNextTheme } from 'next-themes'

export const COOKIE_THEME_KEY = 'theme'
export const THEME_DOMAIN = '.v2.vrtdex.metabest.tech/'

const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme()
  const theme = useContext(StyledThemeContext)

  const handleSwitchTheme = (themeValue: 'light' | 'dark') => {
    try {
      setTheme('dark')
      Cookie.set(COOKIE_THEME_KEY, 'dark', { domain: THEME_DOMAIN })
      // setTheme(themeValue)
      // Cookie.set(COOKIE_THEME_KEY, themeValue, { domain: THEME_DOMAIN })
    } catch (err) {
      // ignore set cookie error for perp theme
    }
  }

  // return { isDark: resolvedTheme === 'dark', theme, setTheme: handleSwitchTheme }
  return { isDark: true, theme, setTheme: handleSwitchTheme }
}

export default useTheme

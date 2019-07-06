import Typography from "typography"
import TypographyTheme from "typography-theme-bootstrap"

// TypographyTheme.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }
//
// delete TypographyTheme.googleFonts

const typography = new Typography(TypographyTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

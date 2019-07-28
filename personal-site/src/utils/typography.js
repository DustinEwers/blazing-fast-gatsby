import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.headerFontFamily = ['Lato', '-apple-system', 'sans-serif'];
githubTheme.bodyFontFamily = ['Lato', '-apple-system', 'sans-serif' ];

githubTheme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
  'img': {
    maxWidth:'100%',
    height: 'auto'
  },
  'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a': {
    color: 'inherit'
  }
})

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

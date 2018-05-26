var Color = require('color')

const tintColor = '#2f95dc'
const main = '#7E57C2'
const background = '#292D3E'
const lightRed = '#e34848'

export default {
  background,
  backgroundLight: Color(background)
    .lighten(0.5)
    .toString(),
  backgroundLighter: Color(background)
    .lighten(0.75)
    .toString(),
  header: Color(background).lighten(0.5),
  tabBarBottom: Color(background).lighten(0.5),
  main,
  secondary: '#89D9ED',
  text: '#fff',
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  lightRed,
  error: lightRed,
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
}

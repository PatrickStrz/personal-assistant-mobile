var Color = require('color')

const tintColor = '#2f95dc'
const background = '#292D3E'
export default {
  background,
  header: Color(background).lighten(0.5),
  main: '#7E57C2',
  secondary: '#89D9ED',
  text: '#fff',
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
}

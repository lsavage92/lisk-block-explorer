import latestBlocks from './components/latest-blocks'

export default {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: latestBlocks }
  ]
}

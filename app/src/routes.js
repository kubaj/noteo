export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView'),
    children: [
      {
        path: '',
        component: require('components/LandingPageView/AlbumList')
      },
      {
        path: 'album',
        component: require('components/LandingPageView/AlbumView')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

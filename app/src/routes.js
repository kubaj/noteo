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
        path: 'album/:id',
        name: 'album',
        component: require('components/LandingPageView/AlbumView')
      },
      {
        path: 'favourites',
        name: 'favourites',
        component: require('components/LandingPageView/FavouriteView')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

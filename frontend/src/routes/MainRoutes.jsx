import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';



// render - sample page
const AlbumsPage = Loadable(lazy(() => import('pages/albums/albums')));
const AlbumAddPage=  Loadable(lazy(() => import('pages/albums/addAlbum')));
const AlbumShowPage=  Loadable(lazy(() => import('pages/albums/albumShow')));
const AlbumUploadPage=  Loadable(lazy(() => import('pages/albums/albumUpload')));
const AboutPage=  Loadable(lazy(() => import('pages/staticPages/about')));
const AlbumEditPage = Loadable(lazy(() => import('pages/albums/albumEdit')));
const PhotoEditPage = Loadable(lazy(() => import('pages/albums/PhotoEdit')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <AlbumsPage />
    },
    {
      path: '/album/add',
      element: <AlbumAddPage />
    },
    {
      path: '/album/show',
      element: <AlbumShowPage/>
    },
    {
      path: '/album/upload',
      element: <AlbumUploadPage/>
    },
    {
      path: '/album/edit',
      element: <AlbumEditPage />
    },
    {
      path: '/photo/edit',
      element: <PhotoEditPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    }
  ]
};

export default MainRoutes;

import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout.tsx'
import { HomePage } from './pages/HomePage/HomePage.tsx'
import { PosterList } from './components/modules/PosterList/PosterList.tsx'
import { PosterDetails } from './components/modules/PosterDetails/PosterDetails.tsx'
import { PosterPage } from './pages/PosterPage/PosterPage.tsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx'

export const App = () => {
   return (
     <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/posters" element={<PosterPage />}>
            <Route path=":genreSlug" element={<PosterList />} />
            <Route path=":genreSlug/:posterSlug" element={<PosterDetails />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
     </Routes>
   )
}

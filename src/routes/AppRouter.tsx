import { BrowserRouter,  } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { DetailScreen } from '../components/detail/DetailScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { TutorialScreen } from '../components/tutorial/TutorialScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detail" element={<DetailScreen />} />
        <Route path="tutorial" element={ <TutorialScreen /> } />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

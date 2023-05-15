import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import AboutPage from './pages/AboutPage';
import GameDevPortfolioPage from './pages/GameDevPortfolioPage';
import WebDevPortfolioPage from './pages/WebDevPortfolioPage';
import ContactPage from './pages/ContactPage';
import FormSubmissionConfirmationPage from './pages/FormSubmissionConfirmationPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNavbar />
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/game-dev' element={<GameDevPortfolioPage />} />
          <Route path='/web-dev' element={<WebDevPortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/formSubmissionResponse/:responseSuccess' element={<FormSubmissionConfirmationPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

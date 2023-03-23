import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainProjectsSection from './components/MainProjectsSection';
import SideProjectsSection from './components/SideProjectsSection';
import ExperimentalProjectsSection from './components/ExperimentalProjectsSection';
import HeaderNavbar from './components/HeaderNavbar';

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <div className='container'>
        <MainProjectsSection />
        <hr />
        <SideProjectsSection />
        <hr />
        <ExperimentalProjectsSection />
      </div>
    </div>
  );
}

export default App;

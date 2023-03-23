import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainProjectsSection from './components/MainProjectsSection';
import SideProjectsSection from './components/SideProjectsSection';
import ExperimentalProjectsSection from './components/ExperimentalProjectsSection';

function App() {
  return (
    <div className="App container">
      <MainProjectsSection />
      <hr />
      <SideProjectsSection />
      <hr />
      <ExperimentalProjectsSection />
    </div>
  );
}

export default App;

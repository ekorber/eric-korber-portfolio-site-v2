import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainProjectsSection from './components/MainProjectsSection';
import SideProjectsSection from './components/SideProjectsSection';

function App() {
  return (
    <div className="App container">
      <MainProjectsSection />
      <hr />
      <SideProjectsSection />
    </div>
  );
}

export default App;

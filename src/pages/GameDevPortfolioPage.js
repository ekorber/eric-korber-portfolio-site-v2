import MainProjectsSection from '../components/MainProjectsSection';
import SideProjectsSection from '../components/SideProjectsSection';
import ExperimentalProjectsSection from '../components/ExperimentalProjectsSection';

function GameDevPortfolioPage() {
    return (
        <div className='container'>
          <MainProjectsSection />
          <hr />
          <SideProjectsSection />
          <hr />
          <ExperimentalProjectsSection />
        </div>
    );
}

export default GameDevPortfolioPage;
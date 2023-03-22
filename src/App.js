import HalfPageShowcasePiece from './components/HalfPageShowcasePiece';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App container">
      
      <HalfPageShowcasePiece
        title="Rekill - Demo Footage"
        url="https://www.youtube.com/embed/Q1dYVwZQlZI"
        description="This is a first-person shooter demo made in Unreal Engine 5, with a style inspired by the legendary Doom series. It features multiple weapons, some of which deal extra damage to certain enemies, a levelling system with upgrades, varied enemy types with melee and ranged attacks, weak points on certain enemies, and multiple maps to play on. I used Blender to model and animate all the weapons and monsters, and Quixel Mixer to texture them."
        useAdditionalText={true}
        additionalText={<strong>Download for free on <a href="https://erickorber.itch.io/rekill" target="_blank" rel="noreferrer">Itch.io</a>.</strong>}
      />
      
    </div>
  );
}

export default App;

import './App.css';
import Header from './Header.js'
import CreatureGallery from './CreatureGallery.js'
import creatures from './data.js'

function App() {
  return (
    <div className="main">
      <Header/>
      <CreatureGallery creatures={creatures}/>
    </div>
  );
}

export default App;

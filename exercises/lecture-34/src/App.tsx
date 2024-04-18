import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
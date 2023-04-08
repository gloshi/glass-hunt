import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <>
    <div className="App">
      <Header />

      <AppRoutes/>
      
    </div>
    <Footer />
    </>
  );
}

export default App;

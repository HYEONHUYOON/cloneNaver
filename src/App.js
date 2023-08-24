import './App.css';
import Header from './components/Header/header-main'
import Body from './components/Body/body-main'
import Footer from './components/Footer/footer-main'

function App() {
  return (
    <div className="App">
      <header>
          <Header/>
      </header>

      <div className = "Body">
          <Body/>
      </div>

      <div className = "Footer">
          <Footer/>
      </div>
    </div>
  );
}

export default App;

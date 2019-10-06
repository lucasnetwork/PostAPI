import React from 'react';
import Routes from './config/routes'
import Header from './components/template/Header'
import Footer from './components/template/Footer'
import './css/index.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

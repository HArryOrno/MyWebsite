import React from 'react';
import MainSection from './MainSection/MainSection';
import SideBar from './SideBar/SideBar';
import './Style/Style.css';

function App() {
  return (
    <div className="App">
          <header className="SiteHeader">
              <h1>All about me - All the time</h1>
              <h2>Welcome to my peronsal site!</h2>
              <nav className="SiteHeader__NavBar">
              </nav>
          </header>

          <main className="PageWrap">
              {< SideBar />}


              {<MainSection />}
          </main>
    </div>
  );
}

export default App;

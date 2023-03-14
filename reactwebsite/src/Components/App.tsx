import React from 'react';
import MainSection from './MainSection/MainSection';
import SideBar from './SideBar/SideBar';
import './Style/Style.css';

const App: React.FC = () => {

    const [selectedState, setSelectedState] = React.useState<string>('');

    const changeSelected = (event: React.SyntheticEvent) => {
        const targetedState = event.target as HTMLSelectElement;
        setSelectedState(targetedState.value)
    }

    return (
        <div className="App">
            <header className="SiteHeader">
                <h1>All you need to know about me - All the time</h1>
                <h2>Welcome to my peronsal site!</h2>
                {/*<nav className="SiteHeader__NavBar">*/}
                {/*    <select value={selectedState} onChange={changeSelected}>*/}
                {/*        <option value="CV">CV</option>*/}
                {/*        <option value="CALCULATOR">Calculator (Not yet implemented)</option>*/}
                {/*    </select>*/}
                {/*</nav>*/}
            </header>

            <main className="CV">
                {< SideBar />}


                {<MainSection />}
            </main>
        </div>
    );

}

export default App;

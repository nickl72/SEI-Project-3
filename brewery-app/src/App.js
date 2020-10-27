import { Redirect, Route } from 'react-router';

import Header from './components/Header';
import Homepage from './components/Homepage';
import ShowPage from './components/ShowPage';
import AboutPage from './components/AboutPage';
import VerifyAge from './components/VerifyAge';
import KidsPage from './components/KidsPage';

import { useSelector } from 'react-redux';
import { selectVerifyAge } from './features/verifyAgeSlice';


function App() {
  const ofAge = useSelector(selectVerifyAge)
  return (
    <div className="App">
      {ofAge ? 
      <>
          <Header />
          <main>
            <Route exact path="/" component={Homepage} />
            <Route 
              path="/show"
              render={(props) => <ShowPage />}
              />
            <Route path="/about" component={AboutPage} />
          </main>
        </>
        :
        ofAge ===null ? <VerifyAge /> : <Redirect to='/kids' />}
        <Route path='/kids' component={KidsPage} />
        </div>
  );
}

export default App;

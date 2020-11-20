import { Redirect, Route, Switch } from 'react-router';

import Header from './components/Header';
import Homepage from './components/Homepage';
import ShowPage from './components/ShowPage';
import AboutPage from './components/AboutPage';
import VerifyAge from './components/VerifyAge';
import KidsPage from './components/KidsPage';
import Footer from "./components/Footer";

import { useSelector } from 'react-redux';
import { selectVerifyAge } from './features/verifyAgeSlice';


import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const ofAge = useSelector(selectVerifyAge)
  return (
    <DndProvider backend={HTML5Backend}>
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
              <Route path='/kids' component={KidsPage} />
            </main>
            <Footer />
          </>
          :
          ofAge === null ?
            <Switch>
              <Route path='/kids' component={KidsPage} />
              <Route path='/' component={VerifyAge} />
            </Switch>
            : 
            <>
            <Redirect to='/kids' />
            <Route path='/kids' component={KidsPage} />
            </>
          }
          {/* { !ofAge && } */}
      </div>
    </DndProvider>
  );
}

export default App;

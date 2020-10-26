import { Route } from 'react-router';

// import Header from './components/Header';
import Homepage from './components/Homepage';
import ShowPage from './components/ShowPage';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <main>
        <Route exact path="/" component={Homepage} />
        <Route 
          path="/show/:brewid"
          render={(props) => <ShowPage /*PropsHere*/ />}
          />
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;

import ApiTest from './components/ApiTest';
import MapContainer from './components/MapContainer';

function App() {
  return (
    <div className="App">
      <ApiTest />
      <MapContainer />
      
      <script defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4af27NRq5CVPXSz-lPlNKr4rf6DAC2xY&callback=initMap">
      </script>
    </div>
  );
}

export default App;

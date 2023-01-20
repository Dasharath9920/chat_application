import './App.css';
import Dashboard from './components/Home/Dashboard';
import Sidebar from './components/Sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

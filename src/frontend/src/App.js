import './App.css';
import DropdownList from './components/DropdownList';
import Users from './components/Users';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users/>
       <DropdownList/>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <h1>Basic Projects</h1>
        <div className='underline'></div>
      </header>
      <main>
        <List />
      </main>
    </>
  );
}

export default App;

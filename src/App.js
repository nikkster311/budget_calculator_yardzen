import './App.css';
import ItemsList from './components/ItemsList';
import Budget from './components/Budget';
import Header from './components/Header';


function App() {
  return (
    <div className='container'>
      <Header />
      <Budget />
      <ItemsList />

    </div>
  );
}

export default App;

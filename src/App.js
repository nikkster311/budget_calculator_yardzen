import './App.css';
import ItemsList from './components/ItemsList';
import Budget from './components/Budget';
import Header from './components/Header';
// import Firestore from './components/Firestore';


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

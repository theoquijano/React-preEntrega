import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <div className=' hero hero-body is-primary'>
        <NavBar/>
      </div>
      <section>
        <ItemListContainer greeting={"Bienvenidos!!"}/>
      </section>
    </div>
  );
}

export default App;

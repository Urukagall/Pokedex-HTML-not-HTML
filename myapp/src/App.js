import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import Pokedex from './pages/Pokedex';
import ModalComponentCreate from './components/ModalComponentCreate';
import PokeGame from './pages/PokeGame';

//App.js
export default function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Pokemon /> 
        </Route>
        <Route exact path="/Pokedex"> 
          <Pokedex /> 
        </Route>
        <Route exact path="/ModalComponentCreate"> 
          <ModalComponentCreate /> 
        </Route>
        <Route exact path="/Game"> 
          <PokeGame /> 
        </Route>
      </Switch>
  </Router>
}

<Route path="article/:id" children={<Article />} />

function Article(){
  let { id } = useParams();
  
  //useEffect + fetch pour retourner toutes les données de l'article 

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
import Home from "./pages/Home";
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

//App.js
export default function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
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
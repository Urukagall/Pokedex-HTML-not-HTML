import { React } from "react";
import GetAll from "../components/GetAll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetAllPokedex from "../components/GetAllPokedex";
import { Grid, Segment } from "semantic-ui-react";

export default function Home(props){
        return <Grid columns='equal'>
            <Grid.Column>
            <Segment> <GetAll /> </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment> <GetAllPokedex /> </Segment>
            </Grid.Column>
        </Grid>
    // const [ pokemons, setPokemons ] = useState([]);

    // //va s'executer seulement au lancement du composant (dep: [])
    // useEffect(() => {
    // // récupérer la liste des users seulement au chargement du composant ! 
    // const pokemonsFetched = getAll();
    // const pokedexFetched = getAllPokedex();
    // pokemonsFetched
    //     .then(result => setPokemons(result))
    //     .catch(error=>console.error("Erreur avec notre API :",error.message));
    // },[]);

    // return <div className="pokemon-list">
    //     <div class="flex">
    //     {
    //         pokemons.map((pokemon,key) =>{
    //         return <div key={key} className="bloc-pokemon">
    //             <h2>{pokemon.name}</h2>
    //             <Image src={pokemon.img} size='small' />
    //             <Button onClick={()=>addToPokedex(pokemon)} color='red'>Capturer</Button>
    //         </div>
    //         })
    //     }
    //     </div>
    // </div>;
}
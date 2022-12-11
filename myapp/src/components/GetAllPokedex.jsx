import { useEffect, useState, React } from "react";
import { deleteFromPokedex, getAllPokedex } from "../api/pokemon";
import { Button, Card, Image } from 'semantic-ui-react'
export default function GetAll(props){
const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokedexFetched = getAllPokedex();
    pokedexFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
        <h2>Pokedex</h2>
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
                return<Card>
                    <Image src={pokemon.img} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{pokemon.name}</Card.Header>
                    <Card.Description>
                        <ul>{pokemon.type.map((type,key)=><li>{type.type}</li>)}</ul>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>deleteFromPokedex(pokemon)} color='red'>Rejeter</Button>
                    </Card.Content>
                </Card>
            })
        }
        </div>
    </div>;
}
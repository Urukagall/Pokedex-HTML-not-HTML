import { useEffect, useState, React } from "react";
import { addToPokedex, getAll } from "../api/pokemon";
import { Button, Card, Image } from 'semantic-ui-react'
export default function GetAll(props){
const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);

    return <div className="pokemon-list">
        <h2>Liste des Pokemon</h2>
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <Card>
                    <Image src={pokemon.img} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{pokemon.name}</Card.Header>
                    <Card.Description>
                        <ul>{pokemon.type.map((type,key)=><li>{type.type}</li>)}</ul>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>addToPokedex(pokemon)} color='red'>Capturer</Button>
                    </Card.Content>
                </Card>
            </div>
            })
        }
        </div>
    </div>;
}
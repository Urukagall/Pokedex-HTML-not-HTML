import { useEffect, useState, React } from "react";
import { addToPokedex, deleteFromPokemon, getAll, updateFromPokemon } from "../api/pokemon";
import { Button, Card, Image } from 'semantic-ui-react'
import FormComponent from "./FormComponent";
import ModalComponent from "./ModalComponent";
export default function GetAll(props){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);

    return <div className="pokemon-list">
        <h2>Liste des Pokemon</h2>
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
                return <Card>
                    <Image src={pokemon.img} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>{pokemon.name}</Card.Header>
                    <Card.Description>
                        <ul>{pokemon.type.map((type,key)=><li>{type.type}</li>)}</ul>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>{addToPokedex(pokemon);setDeleteCount(deleteCount+1)}} color='red'>Capturer</Button>
                        <Button onClick={()=>{deleteFromPokemon(pokemon);setDeleteCount(deleteCount+1)}} color='red'>Supprimer</Button>
                        <br /><br />
                        <ModalComponent pokemonName={pokemon.name} pokemonImage = {pokemon.img}/>
                    </Card.Content>
                </Card>
            })
        }
        </div>
    </div>;
}
import { useEffect, useState, React } from "react";
import { addToPokedex, deleteFromPokemon, getAll, updateFromPokemon } from "../api/pokemon";
import { Button, Card, Image } from 'semantic-ui-react'
import FormComponent from "./FormComponent";
import ModalComponent from "./ModalComponent";
export default function GetAll(props){
const [ pokemons, setPokemons ] = useState([]);
    const isUpdate = false;
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
                return <Card>
                    <Image src={pokemon.img} wrapped ui={false}/>
                    <Card.Content>
                    <Card.Header>{pokemon.name}</Card.Header>
                    <Card.Description>
                        <ul>{pokemon.type.map((type,key)=><li>{type.type}</li>)}</ul>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>addToPokedex(pokemon)} color='red'>Capturer</Button>
                        <Button onClick={()=>deleteFromPokemon(pokemon)} color='red'>Supprimer</Button>
                        <br /><br />
                        <ModalComponent name="{pokemon.name}"/>
                    </Card.Content>
                </Card>
            })
        }
        </div>
    </div>;
}
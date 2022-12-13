import { useEffect, useState, React } from "react";
import { addToPokedex, deleteFromPokemon, getAll, updateFromPokemon } from "../api/pokemon";
import { Button, ButtonGroup, Card, Grid, Image, Segment } from 'semantic-ui-react'
import ModalComponent from "./ModalComponent";

var choiceType = null;

export default function GetAll(props){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);
    const [ choiceType, setchoiceType ] = useState(null);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);

    return <div className="pokemon-list">
        <Grid centered>
            <Grid.Row>
            <Grid.Column width={3}>
                <Segment className="card-background"> <h2 className="ui center aligned container">Liste des Pokemon</h2> </Segment>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Steel");setDeleteCount(deleteCount+1)}} color="teal">Steel</Button></Grid.Column>
                <Grid.Column width={1}><Button color="red">Figthing</Button></Grid.Column>
                <Grid.Column width={1}><Button color="violet">Dragon</Button></Grid.Column>
                <Grid.Column width={1}><Button color="grey">Normal</Button></Grid.Column>
                <Grid.Column width={1}><Button color="orange">Fire</Button></Grid.Column>
                <Grid.Column width={1}><Button color="blue">Water</Button></Grid.Column>
                <Grid.Column width={1}><Button color="purple">Flying</Button></Grid.Column>
                <Grid.Column width={1}><Button color="green">Grass</Button></Grid.Column>
                <Grid.Column width={1}><Button color="purple">Poison</Button></Grid.Column>
                <Grid.Column width={1}><Button color="yellow">Electric</Button></Grid.Column>
                <Grid.Column width={1}><Button color="brown">Ground</Button></Grid.Column>
                <Grid.Column width={1}><Button color="pink">Psychic</Button></Grid.Column>
                <Grid.Column width={1}><Button color="brown">Rock</Button></Grid.Column>
                <Grid.Column width={1}><Button color="teal">Ice</Button></Grid.Column>
                <Grid.Column width={1}><Button color="olive">Bug</Button></Grid.Column>
                <Grid.Column width={1}><Button color="violet">Ghost</Button></Grid.Column>
                <Grid.Column width={1}><Button color="brown">Dark</Button></Grid.Column>
                <Grid.Column width={1}><Button color="pink">Fairy</Button></Grid.Column>
                <Grid.Column width={1}><Button color="teal">???</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType(null);setDeleteCount(deleteCount+1)}} color="red">All</Button></Grid.Column>
            </Grid.Row>
        </Grid>
        <div class="flex">
            <Grid>
                <Grid.Row>
                    {   
                        pokemons.map((pokemon) =>{
                            console.log(choiceType,pokemon.type.length)
                            if (pokemon.type[0].type == choiceType || choiceType == null) {
                                return (<Grid.Column width={4}>
                                    <Segment basic>
                                        <Card className="card-background">
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
                                    </Segment>
                                </Grid.Column>)
                            } else{
                                
                            }
                                    

                                })
                            }
                            
            </Grid.Row>
            </Grid>
        </div>
    </div>;
}
import { useEffect, useState, React } from "react";
import { addToPokedex, deleteFromPokemon, getAll, updateFromPokemon } from "../api/pokemon";
import { Button, ButtonGroup, Card, Grid, Image, Segment } from 'semantic-ui-react'
import ModalComponent from "./ModalComponent";

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
            <Grid.Column width={2}>
                <Segment className="card-background"> <h3 className="ui center aligned container">Tri par type</h3> </Segment>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Steel");setDeleteCount(deleteCount+1)}} color="teal">Steel</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Figthing");setDeleteCount(deleteCount+1)}} color="red">Figthing</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Dragon");setDeleteCount(deleteCount+1)}} color="violet">Dragon</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Normal");setDeleteCount(deleteCount+1)}} color="grey">Normal</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Fire");setDeleteCount(deleteCount+1)}} color="orange">Fire</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Water");setDeleteCount(deleteCount+1)}} color="blue">Water</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Flying");setDeleteCount(deleteCount+1)}} color="purple">Flying</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Grass");setDeleteCount(deleteCount+1)}} color="green">Grass</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Poison");setDeleteCount(deleteCount+1)}} color="purple">Poison</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Electric");setDeleteCount(deleteCount+1)}} color="yellow">Electric</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Ground");setDeleteCount(deleteCount+1)}} color="brown">Ground</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Psychic");setDeleteCount(deleteCount+1)}} color="pink">Psychic</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Rock");setDeleteCount(deleteCount+1)}} color="brown">Rock</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Ice");setDeleteCount(deleteCount+1)}} color="teal">Ice</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Bug");setDeleteCount(deleteCount+1)}} color="olive">Bug</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Ghost");setDeleteCount(deleteCount+1)}} color="violet">Ghost</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Dark");setDeleteCount(deleteCount+1)}} color="brown">Dark</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("Fairy");setDeleteCount(deleteCount+1)}} color="pink">Fairy</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType("???");setDeleteCount(deleteCount+1)}} color="teal">???</Button></Grid.Column>
                <Grid.Column width={1}><Button onClick={()=>{setchoiceType(null);setDeleteCount(deleteCount+1)}} color="red">All</Button></Grid.Column>
            </Grid.Row> 
        </Grid>
        <div class="flex">
            <Grid>
                <Grid.Row>
                    {   
                        pokemons.map((pokemon) =>{
                            console.log(choiceType,pokemon.type.length)
                            if (pokemon.type.length == 1) {
                                if (pokemon.type[0].type == choiceType || choiceType == null) {
                                    return (<Grid.Column width={4}>
                                        <Segment basic>
                                            <Card className="card-background">
                                                <Image src={pokemon.img} wrapped ui={false} className="card-image-background"/>
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
                                }
                            }else if (pokemon.type.length == 2){
                                if (pokemon.type[0].type == choiceType || pokemon.type[1].type == choiceType || choiceType == null) {
                                    return (<Grid.Column width={4}>
                                        <Segment basic>
                                            <Card className="card-background">
                                                <Image src={pokemon.img} wrapped ui={false} className="card-image-background"/>
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
                                }
                            }
                        })
                    }
                            
            </Grid.Row>
            </Grid>
        </div>
    </div>;
}
import { useEffect, useState, React } from "react";
import { deleteFromPokemon, getAll } from "../api/pokemon";
import { Button, Card, Grid, Image, Segment } from 'semantic-ui-react'
import ModalComponent from "./ModalComponent";

export default function PanelAdminComponent(props){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);
    const [ choiceType, setChoiceType ] = useState(null);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);
    return <div className="pokemon-list">
        <Grid centered doubling columns={11}>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Segment className="card-background"> <h2 className="ui center aligned container">Panel Admin </h2> </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Segment className="card-background"> <h3 className="ui center aligned container">Sort by type</h3> </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Steel");setDeleteCount(deleteCount+1)}} color="teal">Steel</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Fighting");setDeleteCount(deleteCount+1)}} color="red">Fighting</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Dragon");setDeleteCount(deleteCount+1)}} color="violet">Dragon</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Normal");setDeleteCount(deleteCount+1)}} color="grey">Normal</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Fire");setDeleteCount(deleteCount+1)}} color="orange">Fire</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Water");setDeleteCount(deleteCount+1)}} color="blue">Water</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Flying");setDeleteCount(deleteCount+1)}} color="purple">Flying</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Grass");setDeleteCount(deleteCount+1)}} color="green">Grass</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Poison");setDeleteCount(deleteCount+1)}} color="purple">Poison</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Electric");setDeleteCount(deleteCount+1)}} color="yellow">Electric</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Ground");setDeleteCount(deleteCount+1)}} color="brown">Ground</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Psychic");setDeleteCount(deleteCount+1)}} color="pink">Psychic</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Rock");setDeleteCount(deleteCount+1)}} color="brown">Rock</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Ice");setDeleteCount(deleteCount+1)}} color="teal">Ice</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Bug");setDeleteCount(deleteCount+1)}} color="olive">Bug</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Ghost");setDeleteCount(deleteCount+1)}} color="violet">Ghost</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Dark");setDeleteCount(deleteCount+1)}} color="brown">Dark</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("Fairy");setDeleteCount(deleteCount+1)}} color="pink">Fairy</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("???");setDeleteCount(deleteCount+1)}} color="teal">???</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType("ABSOLUTE GIGACHAD");setDeleteCount(deleteCount+1)}} color="yellow">ABSOLUTE GIGACHAD</Button></Segment></Grid.Column>
                <Grid.Column><Segment basic><Button onClick={()=>{setChoiceType(null);setDeleteCount(deleteCount+1)}} color="red">All</Button></Segment></Grid.Column>
            </Grid.Row> 
        </Grid>
        <div class="flex">
            <Grid doubling columns={4}>
                <Grid.Row>
                    {   
                        pokemons.map((pokemon) =>{
                            if (pokemon.type.length === 1) {
                                if (pokemon.type[0].type === choiceType || choiceType === null) {
                                    return (<Grid.Column>
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
                                                    <Button onClick={()=>{deleteFromPokemon(pokemon);setDeleteCount(deleteCount+1)}} color='red'>Abandon</Button>
                                                    <ModalComponent pokemonName={pokemon.name} pokemonImage = {pokemon.img}/>
                                                </Card.Content>
                                            </Card>
                                        </Segment>
                                    </Grid.Column>)
                                }
                            }else if (pokemon.type.length === 2){
                                if (pokemon.type[0].type === choiceType || pokemon.type[1].type === choiceType || choiceType === null) {
                                    return (<Grid.Column>
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
                                                    <Button onClick={()=>{deleteFromPokemon(pokemon);setDeleteCount(deleteCount+1)}} color='red'>Abandon</Button>
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
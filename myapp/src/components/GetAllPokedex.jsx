import { useEffect, useState, React } from "react";
import { deleteFromPokedex, getAllPokedex } from "../api/pokemon";
import { Button, Card, Grid, Image, Segment } from 'semantic-ui-react'

export default function GetAllPokedex(props){
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);
    const [ choiceType, setChoiceType ] = useState(null);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
        const pokemonsFetched = getAllPokedex();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);

    return <div className="pokedex-list">
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Segment className="card-background"> <h2 className="ui center aligned container">List of Pokemon</h2> </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Segment className="card-background"> <h3 className="ui center aligned container">Sort by type</h3> </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Segment basic className="segment-margin-top"><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Steel");setDeleteCount(deleteCount+1)}} color="teal">Steel</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Fighting");setDeleteCount(deleteCount+1)}} color="red">Fighting</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Dragon");setDeleteCount(deleteCount+1)}} color="violet">Dragon</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Normal");setDeleteCount(deleteCount+1)}} color="grey">Normal</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Fire");setDeleteCount(deleteCount+1)}} color="orange">Fire</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Water");setDeleteCount(deleteCount+1)}} color="blue">Water</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Flying");setDeleteCount(deleteCount+1)}} color="purple">Flying</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Grass");setDeleteCount(deleteCount+1)}} color="green">Grass</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Poison");setDeleteCount(deleteCount+1)}} color="purple">Poison</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Electric");setDeleteCount(deleteCount+1)}} color="yellow">Electric</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Ground");setDeleteCount(deleteCount+1)}} color="brown">Ground</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Psychic");setDeleteCount(deleteCount+1)}} color="pink">Psychic</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Rock");setDeleteCount(deleteCount+1)}} color="brown">Rock</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Ice");setDeleteCount(deleteCount+1)}} color="teal">Ice</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Bug");setDeleteCount(deleteCount+1)}} color="olive">Bug</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Ghost");setDeleteCount(deleteCount+1)}} color="violet">Ghost</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Dark");setDeleteCount(deleteCount+1)}} color="brown">Dark</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("Fairy");setDeleteCount(deleteCount+1)}} color="pink">Fairy</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("???");setDeleteCount(deleteCount+1)}} color="teal">???</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType("ABSOLUTE GIGACHAD");setDeleteCount(deleteCount+1)}} color="yellow">ABSOLUTE GIGACHAD</Button></Grid.Column></Segment>
                <Segment basic><Grid.Column width={2}><Button onClick={()=>{setChoiceType(null);setDeleteCount(deleteCount+1)}} color="red">All</Button></Grid.Column></Segment>
            </Grid.Row> 
        </Grid>
        <div class="flex">
            <Grid>
                <Grid.Row>
                    {   
                        pokemons.map((pokedex) =>{
                            if (pokedex.type.length === 1) {
                                if (pokedex.type[0].type === choiceType || choiceType === null) {
                                    return (<Grid.Column width={4}>
                                        <Segment basic>
                                            <Card className="card-background">
                                                <Image src={pokedex.img} wrapped ui={false} className="card-image-background"/>
                                                <Card.Content>
                                                    <Card.Header>{pokedex.name}</Card.Header>
                                                    <Card.Description>
                                                        <ul>{pokedex.type.map((type,key)=><li>{type.type}</li>)}</ul>
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <Button onClick={()=>{deleteFromPokedex(pokedex);setDeleteCount(deleteCount+1)}} color='red'>Abandon</Button>
                                                </Card.Content>
                                            </Card>
                                        </Segment>
                                    </Grid.Column>)
                                }
                            }else if (pokedex.type.length === 2){
                                if (pokedex.type[0].type === choiceType || pokedex.type[1].type === choiceType || choiceType === null) {
                                    return (<Grid.Column width={4}>
                                        <Segment basic>
                                            <Card className="card-background">
                                                <Image src={pokedex.img} wrapped ui={false} className="card-image-background"/>
                                                <Card.Content>
                                                    <Card.Header>{pokedex.name}</Card.Header>
                                                    <Card.Description>
                                                        <ul>{pokedex.type.map((type,key)=><li>{type.type}</li>)}</ul>
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <Button onClick={()=>{deleteFromPokedex(pokedex);setDeleteCount(deleteCount+1)}} color='red'>Abandon</Button>
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
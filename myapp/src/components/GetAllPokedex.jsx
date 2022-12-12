import { useEffect, useState, React } from "react";
import { deleteFromPokedex, getAllPokedex } from "../api/pokemon";
import { Button, Card, Grid, Image, Segment } from 'semantic-ui-react';

export default function GetAllPokedex(props){
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const pokedexFetched = getAllPokedex();
        pokedexFetched
            .then(result => setPokemons(result))
            .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);

    return <div className="pokedex-list">
        <Grid centered>
            <Grid.Column width={2}>
                <Segment className="card-background"> <h2 className="ui center aligned container">Pokedex</h2> </Segment>
            </Grid.Column>
        </Grid>
        <div class="flex">
            <Grid>
                <Grid.Row>
                    {
                        pokemons.map((pokedex,key) =>{
                            return <Grid.Column width={4}>
                                <Segment basic>
                                    <Card className="card-background">
                                        <Image src={pokedex.img} wrapped ui={false}/>
                                        <Card.Content>
                                            <Card.Header>{pokedex.name}</Card.Header>
                                            <Card.Description>
                                                <ul>{pokedex.type.map((type,key)=><li>{type.type}</li>)}</ul>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Button onClick={()=>{deleteFromPokedex(pokedex);setDeleteCount(deleteCount+1)}} color='red'>Supprimer</Button>
                                        </Card.Content>
                                    </Card>
                                </Segment>
                            </Grid.Column>
                        })
                    }
            </Grid.Row>
            </Grid>
        </div>
    </div>;
}
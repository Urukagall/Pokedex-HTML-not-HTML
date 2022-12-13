import React, { Component, useEffect, useState } from 'react'
import {  } from 'react-router-dom'
import { Button, Card, Grid, Image, Segment } from 'semantic-ui-react'
import { addToPokedex, deleteFromPokemon, getAll } from "../api/pokemon";

export default function PokeGameComponent(){

    
    
    const [ pokemons, setPokemons ] = useState([]);
    const [ deleteCount, setDeleteCount ] = useState(0);

    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[deleteCount]);

    const pokeArray = []
    const pokeArrayName = []

    pokemons.map((pokemon) =>{ 
        pokeArrayName.push(pokemon.name)
        pokeArray.push(pokemon.img)
    })

    const randomPoke = Math.floor(Math.random() * pokemons.length);

    return (

        
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Segment className="card-background"> <h2 className="ui center aligned container"></h2> </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                    <Image size='massive' src="https://cdn.discordapp.com/attachments/1052126650646675456/1052253282275430491/Land.png" centered/>
                    <Image size='medium' src={pokeArray[randomPoke]} wrapped className='absolute card-image-game' centered/>
                {/* <Card className="card-background" fluid>
                    <Image size='tiny' src={pokeArray[randomPoke]} wrapped ui={false} className="card-image-game-background"/>
                    <Card.Content>
                        <Card.Header>A wild pokemon appear</Card.Header>
                        <Card.Description>
                            What do you want to do 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                         <Button onClick={()=>{addToPokedex(pokemon);setDeleteCount(deleteCount+1)}} color='red'>Capturer</Button>
                        <Button onClick={()=>{setDeleteCount(deleteCount+1)}} color='red'>Fuir</Button> 
                    </Card.Content>
                </Card> */}
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>   
                    <Button onClick={()=>{addToPokedex({name: pokeArrayName[randomPoke]});setDeleteCount(deleteCount+1)}} color='red'>Capture</Button>
                </Grid.Column>
                <Grid.Column>
                    <Button onClick={()=>{setDeleteCount(deleteCount+1)}} color='red'>Run</Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column>
                
            </Grid.Column>
        </Grid>
    )

}
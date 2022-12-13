import { React } from "react";
import { Grid } from "semantic-ui-react";
import HeaderComponent from "../components/HeaderComponent";
import PokeGameComponent from "../components/PokeGameComponent";

export default function PokeGame(props){
    return (<Grid columns='equal'>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={16}><HeaderComponent /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}><PokeGameComponent /></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
    </Grid>)
}
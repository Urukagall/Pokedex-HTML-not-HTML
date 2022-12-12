import { React } from "react";
import GetAllPokedex from "../components/GetAllPokedex";
import { Grid, Segment } from "semantic-ui-react";
import HeaderComponent from "../components/HeaderComponent";

export default function Pokedex(props){
    return <Grid columns='equal'>
        <Grid.Row>
        <Grid.Column width={16}><HeaderComponent /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}></Grid.Column>
            <GetAllPokedex />
        </Grid.Row>
    </Grid>
}
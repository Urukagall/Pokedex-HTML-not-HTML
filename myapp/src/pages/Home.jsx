import { React } from "react";
import GetAllPokedex from "../components/GetAllPokedex";
import { Grid, Segment } from "semantic-ui-react";
import GetAll from "../components/GetAll";

export default function Home(props){
    return <Grid columns='equal'>
        <Grid.Column>
            <Segment> <GetAll /> </Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment> <GetAllPokedex /> </Segment>
        </Grid.Column>
    </Grid>
}
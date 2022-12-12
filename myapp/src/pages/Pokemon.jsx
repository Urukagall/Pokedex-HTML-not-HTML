import { React } from "react";
import { Grid, Segment } from "semantic-ui-react";
import GetAll from "../components/GetAll";
import HeaderComponent from "../components/HeaderComponent";

export default function Pokemon(props){
    return (<Grid columns='equal'>
        <Grid.Row>
        <Grid.Column width={16}><HeaderComponent /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={6}></Grid.Column>
            <GetAll />
        </Grid.Row>
    </Grid>
    )
}
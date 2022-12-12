import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

// https://react-hook-form.com/get-started

const options = [
  { key: 'Normal', text: 'Normal', value: 'Normal' },
  { key: 'Fire', text: 'Fire', value: 'Fire' },
  { key: 'Fighting', text: 'Fighting', value: 'Fighting' },
  { key: 'Water', text: 'Water', value: 'Water' },
  { key: 'Flying', text: 'Flying', value: 'Flying' },
  { key: 'Grass', text: 'Grass', value: 'Grass' },
  { key: 'Poison', text: 'Poison', value: 'Poison' },
  { key: 'Electric', text: 'Electric', value: 'Electric' },
  { key: 'Ground', text: 'Ground', value: 'Ground' },
  { key: 'Psychic', text: 'Psychic', value: 'Psychic' },
  { key: 'Rock', text: 'Rock', value: 'Rock' },
  { key: 'Ice', text: 'Ice', value: 'Ice' },
  { key: 'Bug', text: 'Bug', value: 'Bug' },
  { key: 'Dragon', text: 'Dragon', value: 'Dragon' },
  { key: 'Ghost', text: 'Ghost', value: 'Ghost' },
  { key: 'Dark', text: 'Dark', value: 'Dark' },
  { key: 'Steel', text: 'Steel', value: 'Steel' },
  { key: 'Fairy', text: 'Fairy', value: 'Fairy' },
  { key: '???', text: '???', value: '???' },
 ]

export default function FormComponent({pokemonName, pokemonImage}){

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
    //On peut transformer les données en JSON pour les envoyer dans notre appel
    //JSON.stringify(data);
  }

  return <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field required>
      <label>Nouveau Nom</label>
      <Form.Input placeholder='Nouveau Nom' {...register("firstName")} />
    </Form.Field>
    <Form.Field required>
      <label>Nouvelle Image</label>
      <Form.Input placeholder='Nouvelle Image'/>
    </Form.Field>
    <Form.Field required>
      <Form.Select
        fluid
        label='Type 1'
        options={options}
        placeholder='Type 1'
      />
    </Form.Field>
    <Form.Field required>
      <Form.Select
        fluid
        label='Type 2'
        options={options}
        placeholder='Type 2'
      />
    </Form.Field>
    <Button type='submit'>Submit</Button>

  </Form>
}

import React, { useState } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import { createToPokemon} from '../api/pokemon';

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

export default function FormComponent({pokemonName}){
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    triggerValidation,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    if (data.name != null && data.name != "" && data.img != null && data.img != "" && data.type1 != null) {
      createToPokemon(data);
      window.location.reload(false);
    }
  };

  // console.log(watch("example"));

  return (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label>Nom</label>
      <Form.Input placeholder='Nouveau Nom' onChange={async (e, { name, value }) => {
            setValue("name", value);
            await triggerValidation({ name });
          }}
          error={errors.firstName ? true : false} />
    </Form.Field>
    <Form.Field >
      <label>Image</label>
      <Form.Input placeholder='Nouvelle Image' onChange={async (e, { name, value }) => {
            setValue("img", value);
            await triggerValidation({ name });
          }}
          error={errors.firstName ? true : false} />
    </Form.Field>
    <Form.Field>
      <Form.Select
        fluid
        label='Type 1'
        options={options}
        placeholder='Type 1'
        onChange={async (e, { name, value }) => {
          setValue("type1", value);
          await triggerValidation({ name });
        }}
        error={errors.firstName ? true : false} />
    </Form.Field>
    <Form.Field >
      <Form.Select
        fluid
        label='Type 2'
        options={options}
        placeholder='Type 2'
        onChange={async (e, { name, value }) => {
          setValue("type2", value);
          await triggerValidation({ name });
        }}
        error={errors.genderSelect ? true : false}
      />
    </Form.Field>
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <Button type='submit'>Submit</Button>

  </Form>)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FormComponent />, rootElement);

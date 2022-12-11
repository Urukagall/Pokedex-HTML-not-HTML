import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export default function FormComponent(props){
  return <Form>
    <Form.Field>
      <label>Nouveau Nom</label>
      <input placeholder='Nouveau Nom' />
    </Form.Field>
    <Form.Field>
      <label>Nouvelle Image</label>
      <input placeholder='Nouvelle Image' />
    </Form.Field>
    <Form.Field>
      <Form.Select
        fluid
        label='Type 1'
        options={options}
        placeholder='Type 1'
      />
    </Form.Field>
    <Form.Field>
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

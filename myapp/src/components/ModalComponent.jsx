import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import FormComponent from './FormComponent'

export default function ModalComponent({pokemonName, pokemonImage}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='red'>Modifier</Button>}
    >
      <Modal.Header>Modification de {pokemonName}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src = {pokemonImage} wrapped />
        <Modal.Description>
          <FormComponent pokemonName = {pokemonName} pokemonImage = {pokemonImage}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

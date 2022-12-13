import React from 'react'
import { Button, Modal, Image } from 'semantic-ui-react'
import FormComponent from './FormComponent'

export default function ModalComponent({pokemonName, pokemonImage}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color='red'>Modify</Button>}
    >
      <Modal.Header className='modal-background-border'>Modify {pokemonName}</Modal.Header>
      <Modal.Content image className='modal-background-middle'>
        <Image size='medium' src = {pokemonImage} />
        <Modal.Description>
          <FormComponent pokemonName = {pokemonName}/>
        </Modal.Description >
      </Modal.Content>
      <Modal.Actions className='modal-background-border'>
      </Modal.Actions>
    </Modal>
  )
}

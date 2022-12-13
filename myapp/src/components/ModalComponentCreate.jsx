import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import FormComponentCreate from './FormComponentCreate'

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button basic inverted>Create</Button>}
    >
      <Modal.Header className="modal-background-border">Create</Modal.Header>
      <Modal.Content className="modal-background-middle" image>
        <Image size='medium' src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12ecb7ae-7059-48df-a4f8-2e3fb7858606/d47rmjf-de88a574-49c8-4dcf-9df4-7e11722e8bec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyZWNiN2FlLTcwNTktNDhkZi1hNGY4LTJlM2ZiNzg1ODYwNlwvZDQ3cm1qZi1kZTg4YTU3NC00OWM4LTRkY2YtOWRmNC03ZTExNzIyZThiZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.loswJAzDdppbY9aZ-eQs3DKvAdY7W91eosZhapx7gFU" />
        <Modal.Description>   
          <FormComponentCreate/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions className="modal-background-border">
      </Modal.Actions>
    </Modal>
  )
}

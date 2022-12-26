import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import styled from "styled-components"

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px
`
const DescriptionInput = styled.input`
    height: 300px;
    width: 465px;
`

function ModalFocusAfterClose({toggle, open}){

  return (
      <Modal isOpen={open}>
        <ModalBody>
            <ModalContainer>
                <h2>
                    Novo Comunicado 
                </h2>
                <input 
                type="text" 
                placeholder="Título"
                />
                <DescriptionInput 
                type="text"
                placeholder="Descrição"
                />
                <input 
                type="text"
                placeholder="Questionário"            
                />
            </ModalContainer>  
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            x
          </Button>
        </ModalFooter>
      </Modal>
  );
}
export default ModalFocusAfterClose;
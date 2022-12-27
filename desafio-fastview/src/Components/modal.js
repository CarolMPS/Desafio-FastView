import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { BsChatTextFill, BsXLg } from "react-icons/bs";
import {ModalContainer, DescriptionInput, ModalTitleContainer} from "./style";

function ModalFocusAfterClose({toggle, open}){

  return (
      <Modal isOpen={open}>
        <ModalBody>
            <ModalContainer>
              <ModalTitleContainer>
                <h2>
                    Novo Comunicado 
                </h2>
                <div>
                <Button 
                color="primary" 
                onClick={toggle}
                >
                  <BsXLg />
                </Button>
                </div>
              </ModalTitleContainer>
                
                <input 
                type="text" 
                placeholder="Título"
                />
                <DescriptionInput 
                placeholder="Descrição"
                />
                <input 
                type="text"
                placeholder="Questionário"            
                />
            </ModalContainer>  
        </ModalBody>
        <ModalFooter>
          <Button 
            color="primary" 
            onClick={toggle}
            >
            <BsChatTextFill/>
          </Button>
        </ModalFooter>
      </Modal>
  );
}
export default ModalFocusAfterClose;
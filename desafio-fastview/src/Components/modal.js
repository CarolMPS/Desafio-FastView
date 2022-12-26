import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter

} from 'reactstrap';

function ModalFocusAfterClose({toggle, open}){

  return (
      <Modal isOpen={open}>
        <ModalBody>
          Observe the &ldquo;Open&ldquo; button. It will be focused after close
          when &ldquo;returnFocusAfterClose&ldquo; is true and will not be
          focused if &ldquo;returnFocusAfterClose&ldquo; is false.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
  );
}

export default ModalFocusAfterClose;
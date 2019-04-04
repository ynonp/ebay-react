import React, { useState } from 'react';
// same as:
// const useState = React.useState;
import ReactDOM from 'react-dom';

function ModalDialog(props) {
  return (
    <div className='modal-dialog'>
      {props.children}
      <button onClick={props.close}>Close</button>
    </div>
  );
}



function App(props) {  
  const [showModal, setShowModal] = useState(false);
  function hideModal() {
    setShowModal(false);
  }

  return (
    <>
    <div className={`container ${showModal ? 'with-modal' : ''}`}>
      <h1>Modal Demo</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {
        showModal &&
        <ModalDialog close={hideModal}>
          <h2>Hello Modal WOrld</h2>
        </ModalDialog>
      }
    </div>
    <div className='overlay'></div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('main'));

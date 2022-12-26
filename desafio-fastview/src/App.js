import React, { useState } from "react";
import TheTable from "./Components/table";
import ModalFocusAfterClose from "./Components/modal";


function App() {
    const [open, setOpen] = useState(false);
  
    const toggle = () => setOpen(!open);
    
  return (
    
    <div>
      <button onClick={toggle}>ABRE</button>
      <ModalFocusAfterClose toggle={toggle} open={open}/>
      <TheTable />
    </div>
  );
}

export default App;

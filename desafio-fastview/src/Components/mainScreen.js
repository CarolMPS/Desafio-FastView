import React, { useState } from "react";
import TheTable from "./table";
import ModalFocusAfterClose from "./modal"
import { FaPlus } from "react-icons/fa";
import { BsFillPrinterFill, BsFillFileEarmarkXFill } from "react-icons/bs";
import {Header, MainContainer, ListContainer, TableContainer } from "./style";

function MainScreen() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
  return (
    <div>
      <Header>
        <button>
          <BsFillFileEarmarkXFill/>
        </button>
        <button>
          <BsFillPrinterFill/>
        </button>
        <button onClick={toggle}>
          <FaPlus/>
        </button>
      </Header>
      <MainContainer>
        <ListContainer>
          <h1>Lista</h1>
          <select>
            <option>
              Ativos
            </option>
            <option>
              Inativos
            </option>
          </select>
        </ListContainer>
        <ModalFocusAfterClose toggle={toggle} open={open}/>
        <TableContainer>
          <TheTable />
        </TableContainer>
      </MainContainer>
      
    </div>
  );
}
  
export default MainScreen;
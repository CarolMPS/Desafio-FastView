import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: end;
justify-content:end;
margin: 0 4% 0 0%;
`;

export const MainContainer = styled.main`
margin: 4%;
background-color: #E6E7E9 ;
padding: 4%;
text-align: center;
`;

export const ListContainer = styled.div`
display: flex;
flex-direction: row;
gap: 4%;
padding-bottom: 4px;
`;

export const TableContainer = styled.div`
background-color: white;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px
`;

export const DescriptionInput = styled.input`
    height: 300px;
    width: 465px;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
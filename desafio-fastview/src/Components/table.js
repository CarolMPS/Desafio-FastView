import React from "react";
import { Table } from 'reactstrap';
import { informacoes } from "../informacoes";


class TheTable extends React.Component(){
    render (){
    return(
        <div>
            <Table size="sm" hover >
                <thead>
                    <tr>
                    <th>
                        TÍTULO
                    </th>
                    <th>
                        LOJAS
                    </th>
                    <th>
                        USUÁRIO
                    </th>
                    <th>
                        DATA
                    </th>
                    <th>
                        TERMOS E CONDI.
                    </th>
                    <th>
                        ENVIADOS
                    </th>
                    <th>
                        LIDOS
                    </th>
                    <th>
                        PENDENTES
                    </th>
                    <th>
                        RECEBIDOS SEM LEITURA
                    </th>
                    <th>
                        AÇÕES
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
    }
}
export default TheTable;
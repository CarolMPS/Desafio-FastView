import React from "react";
import { Table } from 'reactstrap';
import { FaEye, FaWindowClose } from 'react-icons/fa'
import { informacoes } from "../informacoes";

function TheTable() {

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
                    {informacoes.map((info)=>{
                            return(
                                <tr>
                                    <th scope="row">
                                        {info.titulo}
                                    </th>
                                    <td>
                                        {info.lojas}
                                    </td>
                                    <td>
                                        {info.usuario}
                                    </td>
                                    <td>
                                        {info.data}
                                    </td>
                                    <td>
                                        {info.termosECondicoes}
                                    </td>
                                    <td>
                                        {info.enviados}
                                    </td>
                                    <td>
                                        {info.lidos}
                                    </td>
                                    <td>
                                        {info.pendentes}
                                    </td>
                                    <td>
                                        {info.recebidosSemLeitura}
                                    </td>
                                    <td>
                                        <button>
                                            < FaEye />
                                        </button>
                                        <button>
                                            < FaWindowClose />
                                        </button> 
                                    </td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </Table>
            </div>
        )
}

export default TheTable;
import React from 'react';
import '../styles/table.css';

function Table() {

    const data = [
        { col1: 'Falta de energia elétrica', col2: '75%', col3: 'Sim'},
        { col1: 'Fio partido', col2: '75%', col3: 'Sim'},
        { col1: 'Falta de água', col2: '15%', col3: 'Não'},
        { col1: 'Falta de serviço número 1', col2: '15%', col3: 'Não'},
        { col1: 'Falta de serviço número 2', col2: '15%', col3: 'Não'},
        { col1: 'Falta de serviço número 3', col2: '15%', col3: 'Não'},
        { col1: 'Falta de serviço número 4 ', col2: '15%', col3: 'Não'},
      ];

    return (
        <>
            <table>
                <thead>
                <tr className='table-head'>
                    <th>Assunto mais falado</th>
                    <th>% Negativo</th>
                    <th>Acionar COI</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                    <td className='td-name'>{row.col1}</td>
                    <td>{row.col2}</td>
                    <td className={`square ${row.col3 === 'Sim' ? 'green' : 'red'}`}>{row.col3}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;


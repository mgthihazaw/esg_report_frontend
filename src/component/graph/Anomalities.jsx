import React from 'react'

const Anomalities = ({ dataAnomalities }) => {
    
    return (
        <div className="table-container">
            <h2>ABNORMALITIES</h2>
            <div className="filter-container">
                <select className="filter-dropdown">
                    <option value="total">Total</option>
                </select>
            </div>
            <table>
                <tbody>
                    {dataAnomalities && dataAnomalities.map((data,idx) => (
                        <tr key={idx}>
                            <td><span className="title">{data.name}</span> </td>
                            <td><span className="status status-open">{ data.status === 1 ? "Plug is open" : "Plug is closed"}</span></td>
                            <td>{ data.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Anomalities
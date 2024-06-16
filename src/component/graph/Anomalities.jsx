import React from 'react'

const Anomalities = () => {
  return (
    <div class="table-container">
        <h2>ABNORMALITIES</h2>
        <div class="filter-container">
            <select class="filter-dropdown">
                <option value="total">Total</option>
            </select>
        </div>
        <table>
            <tbody>
                <tr>
                    <td><span class="title">Laptop Charger</span> Plug is open</td>
                    <td><span class="status status-open">Plug open</span></td>
                    <td>21/04/2023 18:39</td>
                </tr>
                <tr>
                    <td><span class="title">Laptop Charger</span> Plug is closed</td>
                    <td><span class="status status-closed">Plug closed</span></td>
                    <td>21/04/2023 17:50</td>
                </tr>
                <tr>
                    <td><span class="title">Laptop Charger</span> Plug is open</td>
                    <td><span class="status status-open">Plug open</span></td>
                    <td>20/04/2023 17:07</td>
                </tr>
                <tr>
                    <td><span class="title">Laptop Charger</span> Plug is closed</td>
                    <td><span class="status status-closed">Plug closed</span></td>
                    <td>20/04/2023 17:01</td>
                </tr>
                <tr>
                    <td><span class="title">Laptop Charger</span> Plug is open</td>
                    <td><span class="status status-open">Plug open</span></td>
                    <td>20/04/2023 16:04</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Anomalities
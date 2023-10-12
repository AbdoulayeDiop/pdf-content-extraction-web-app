import React from 'react'
import Loading from '../shared/Loading/Loading'
import './TableContents.css'

function TableContents({isLoading, fileContents}) {
    if (Object.keys(fileContents).length == 0){
        if (isLoading) {
            return (
                <div>
                    {isLoading && <div className="loading-container"><Loading /></div>}
                </div>
            )
        }
        return;
    }

    return (
        <div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>File Name</th>
                <th>Invoice number</th>
                <th>Provider name</th>
                <th>Customer name</th>
                <th>Invoice date</th>
                <th>Due date</th>
                <th>Tax%</th>
                <th>Tax amount</th>
                <th>Net amount</th>
                <th>Gross amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            { Object.keys(fileContents).map((filename) => (
                <tr>
                    <td>
                        {filename}
                    </td>
                    <td>
                        {fileContents[filename]['Invoice number']}
                    </td>
                    <td>
                        {fileContents[filename]["Provider name"]}
                    </td>
                    <td>
                        {fileContents[filename]["Customer name"]}
                    </td>
                    <td>
                        {fileContents[filename]["Invoice date"]}
                    </td>
                    <td>
                        {fileContents[filename]["Due date"]}
                    </td>
                    <td>
                        {fileContents[filename]["Tax%"]}
                    </td>
                    <td>
                        {fileContents[filename]["Tax amount"]}
                    </td>
                    <td>
                        {fileContents[filename]["Net amount"]}
                    </td>
                    <td>
                        {fileContents[filename]["Gross Amount"]}
                    </td>
                    <td>
                        {fileContents[filename]["Currency"]}
                    </td>
                </tr>
            ))}
            </tbody>
            
        </table>
        {isLoading && <div className="loading-container"><Loading /></div>}
        </div>
    )
}

export default TableContents;
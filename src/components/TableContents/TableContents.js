import React from 'react'
import './TableContents.css'

function TableContents({fileContents}) {
    if (fileContents.length == 0){
        return
        // return (
        //     <div>
        //         Not able to extract document contents
        //     </div>
        // )
    }

    return (
        <div>
        <table className="table">
            <thead>
            <tr>
                <th>Invoice number</th>
                <th>Provider name</th>
                <th>Customer name</th>
                <th>Tax%</th>
                <th>Tax amount</th>
                <th>Net amount</th>
                <th>Gross amount</th>
                <th>Currency</th>
                <th>Invoice date</th>
                <th>Due date</th>
            </tr>
            </thead>
            <tbody>
                { Object.keys(fileContents).forEach((filename) => {
                    console.log(filename)
                    return (
                        <tr key={filename}>
                            <td>
                                <span>{fileContents[filename]["Invoice number"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Provider name"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Customer name"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Tax%"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Tax amount"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Net amount"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Gross Amount"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Currency"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Invoice date"]}</span>
                            </td>
                            <td>
                                <span>{fileContents[filename]["Due date"]}</span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default TableContents;
import React from 'react'

function TableContents({fileContents}) {

    if (!fileContents){
        return (
            <div>
                Not able to extract document contents
            </div>
        )
    }

    return (
        <div>
        <table>
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
                { fileContents.map((name, content) => (
                <tr key={name}>
                    <td>
                        <span>{content["Invoice number"]}</span>
                    </td>
                    <td>
                        <span>{content["Provider name"]}</span>
                    </td>
                    <td>
                        <span>{content["Customer name"]}</span>
                    </td>
                    <td>
                        <span>{content["Tax%"]}</span>
                    </td>
                    <td>
                        <span>{content["Tax amount"]}</span>
                    </td>
                    <td>
                        <span>{content["Net amount"]}</span>
                    </td>
                    <td>
                        <span>{content["Gross Amount"]}</span>
                    </td>
                    <td>
                        <span>{content["Currency"]}</span>
                    </td>
                    <td>
                        <span>{content["Invoice date"]}</span>
                    </td>
                    <td>
                        <span>{content["Due date"]}</span>
                    </td>
                </tr>

                ))}
            </tbody>
        </table>
        </div>
    )
}

export default TableContents;
import {React, useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header';
import Uploader from './components/Uploader/Uploader';
import TableContents from './components/TableContents/TableContents';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [fileContents, setFileContents] = useState([]);

    const showFileContents = () => {
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
            </div>
        )
    }

    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Uploader setFileContents={setFileContents}/>
                {showFileContents()}
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
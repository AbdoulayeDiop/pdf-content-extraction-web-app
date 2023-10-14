import {React, useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/shared/Header/Header';
import Uploader from './components/Uploader/Uploader';
import { API_URL } from './config';
import { handleResponse } from './helpers';
import TableContents from './components/TableContents/TableContents';
import Loading from './components/shared/Loading/Loading';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    const [fileList, setFileList] = useState([]);
    const [fileContents, setFileContents] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // 👇 files is not an array, but it's iterable, spread to get an array of files
    const files = fileList ? [...fileList] : [];
  
    const handleUploadClick = () => {
        setError(null)
        if (fileList.length == 0) {
            setError("No Selected file")
            return;
        }
        
        // 👇 Create new FormData object and append files
        const data = new FormData();
        files.forEach((file, i) => {
            data.append(`file`, file);
        });
        // 👇 Uploading the files using the fetch API to the server
        setIsLoading(true)
        
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(`${API_URL}`, {
        //             method: 'POST',
        //             body: data,
        //         });
        //         if (!response.ok || !response.body) {
        //             throw response.statusText;
        //         }
        
        //         const reader = response.body.getReader();
        //         const decoder = new TextDecoder();
        //         var responseText = '';
        //         const newFileContents = {};
        
        //         while (true) {
        //             const { value, done } = await reader.read();
        //             if (done) {
        //                 setIsLoading(false);
        //                 break;
        //             }
        
        //             const decodedChunk = decoder.decode(value, { stream: true });
        //             responseText = responseText.concat(decodedChunk);
        //             responseText.split("\n").map(text => {
        //                 try {
        //                     const obj = JSON.parse(text);
        //                     newFileContents[obj.name] = obj.contents;
        //                     setFileContents(newFileContents)
        //                 } catch (error) {
        //                     console.log(error)
        //                 }
        //             });
        //         }
        //     } catch (error) {
        //         setIsLoading(false);
        //         // Handle other errors
        //     }
        // };

        // fetchData();

        fetch(`${API_URL}`, {
            method: 'POST',
            body: data,
        })
        .then(handleResponse)
        .then((response) => {
            setFileContents(response);
            setIsLoading(false)
        })
        .catch((error) => {
            setIsLoading(false)
            setError(error.errorMessage)
        });
    };

    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Uploader setFileList={setFileList} handleUploadClick={handleUploadClick}/>
                <TableContents fileContents={fileContents} />
                {isLoading && <div className="loading-container"><Loading /></div>}
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
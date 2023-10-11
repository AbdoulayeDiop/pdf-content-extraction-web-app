
import {React, useState} from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import TableContents from '../TableContents/TableContents';
import Loading from '../shared/Loading/Loading';

function Uploader({setFileContents}) {
    const [fileList, setFileList] = useState([]);
  
    const handleFileChange = (e) => {
      setFileList(e.target.files);
    };
  
    const handleUploadClick = () => {
        if (!fileList) {
            return;
        }
    
        // 👇 Create new FormData object and append files
        const data = new FormData();
        files.forEach((file, i) => {
            data.append(`file`, file);
        });
  
        // 👇 Uploading the files using the fetch API to the server
        fetch(`${API_URL}`, {
            method: 'POST',
            body: data,
        })
        .then(handleResponse)
        .then((data) => {
            setFileContents(data);
        })
        .catch((error) => {return error.errorMessage});
    };
  
    // 👇 files is not an array, but it's iterable, spread to get an array of files
    const files = fileList ? [...fileList] : [];
  
    return (
        <div className="row g-3 d-flex justify-content-center">
            <div className="col-auto">
                <input type="file" onChange={handleFileChange} multiple />
            </div>
            <div className="col-auto">
                <button onClick={handleUploadClick} className="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    );
  }
  
  export default Uploader;
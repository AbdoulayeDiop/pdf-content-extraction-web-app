
import {React, useState} from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import TableContents from '../TableContents/TableContents';
import Loading from '../shared/Loading/Loading';

function Uploader({showFileContents}) {
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
            console.log(file.name)
        });
  
      // 👇 Uploading the files using the fetch API to the server
      fetch(`${API_URL}`, {
        method: 'POST',
        body: data,
      })
        .then(handleResponse)
        .then((data) => {showFileContents(data)})
        .catch((error) => {
            this.setState({ error : error.errorMessage, loading: false });
        });
    };
  
    // 👇 files is not an array, but it's iterable, spread to get an array of files
    const files = fileList ? [...fileList] : [];
  
    return (
        <div class="row g-3 d-flex justify-content-center">
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input type="file" onChange={handleFileChange} multiple />
            </div>
            <div class="col-auto">
                <button onClick={handleUploadClick} class="btn btn-primary mb-3">Submit</button>
            </div>
        </div>
    );
  }
  
  export default Uploader;
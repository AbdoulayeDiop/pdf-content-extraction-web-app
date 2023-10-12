
import {React, useState} from 'react';
import TableContents from '../TableContents/TableContents';
import Loading from '../shared/Loading/Loading';

function Uploader({setFileList, handleUploadClick}) {  
    const handleFileChange = (e) => {
      setFileList(e.target.files);
    };

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
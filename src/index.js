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

    function showFileContents(data) {
        setFileContents(data)
    }

    return (
        <BrowserRouter>
            <div>
                <Header></Header>
                <Uploader showFileContents={showFileContents}/>

            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
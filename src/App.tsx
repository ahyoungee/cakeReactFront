import React from 'react';
// import logo from './logo.svg';
// import { Button } from '@material-ui/core';
// import MyButton from './components/Button';
import CustomPaginationActionsTable from './components/Table';
import ValidationTextFields from './components/SearchForm';
import ButtonAppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <ButtonAppBar />
        <h1>
          申し込み一覧
        </h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <Button variant="outlined" color="secondary">Hello World</Button> */}
      </header>
      <body>
        <ValidationTextFields />
        <br />
        <CustomPaginationActionsTable />
      </body>
    </div>
  );
}

export default App;

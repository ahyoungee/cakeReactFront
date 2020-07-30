import React from 'react';
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

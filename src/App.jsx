import {useState} from "react";



import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table"
import {Modal} from "./components/Modal"

function App() {
  const [modalOpen, setModalOpen] =useState(false);
  return (
    <div className="App">
      <Table/>
      <button className='btn'>Add</button>
      {modalOpen && <Modal/>}
      
    </div>
  );
}

export default App;

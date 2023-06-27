import {useState} from "react";



import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table"
import {Modal} from "./components/Modal"

function App() {
  const [modalOpen, setModalOpen] =useState(false);

const rows=[
  (page:"Page 1",description:"This is the first page",status:"live")

];

  return (
    <div className="App">
      <Table/>
      <button className='btn' onClick={()=>setModalOpen(true)}>
        Add
        </button>
      {modalOpen && (
      <Modal 
        closeModal={()=>{
          setModalOpen(false);
      }}
      />
      
    </div>
  );
}

export default App;

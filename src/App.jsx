import {useState} from "react";



import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table"
import {Modal} from "./components/Modal"

function App() {
  const [modalOpen, setModalOpen] =useState(false);

const [rows,setRows]=useState([
  {page:"Page 1",description:"This is the first page",status:"live"},
  {page:"Page 2",description:"This is the Second page",status:"draft"},
  {page:"Page 3",description:"This is the third page",status:"error"},

]);

  return (
    <div className="App">
      <Table rows={rows}/>
      <button className='btn' onClick={()=>setModalOpen(true)}>
        Add
        </button>
      {modalOpen && (
      <Modal 
        closeModal={()=>{
          setModalOpen(false);
      }}
      />
      )}
      
    </div>
  );
}

export default App;

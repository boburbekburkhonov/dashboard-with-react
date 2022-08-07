import { useState, useRef } from 'react'
import Navbar from './Component/Navbar';
import FetchApi from './Component/FetchApi'
import Todo from './Component/Todo';
import TodoList from './Component/TodoList';
import DefaultPage from './Component/DefaultPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import dataContext from './Component/Context/dataContext';

function App() {

  const[values, setValue] = useState([]);
  const all = useRef()
  const allValue = all.current;


  console.log();
  return (
    <dataContext.Provider value = {{values, setValue, allValue}}>
        <div ref={all} className="App d-flex flex-wrap">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<DefaultPage />} />
            <Route path='apinews' element={<FetchApi />} />
            <Route path='todo' element={<Todo />} />
            <Route path='todolist' element={<TodoList data={values} />} />
          </Routes>
        </BrowserRouter>
      </div>
      </dataContext.Provider>

  )
}

export default App

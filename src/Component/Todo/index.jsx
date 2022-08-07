import React, { useState, useRef, useContext } from 'react';
import dataContext from '../Context/dataContext';

function index(props) {

  const val = useRef();

  const {values} = useContext(dataContext)
  const {setValue} = useContext(dataContext)

  function submitTodos(e) {
    e.preventDefault()
    const inputValue = val.current.value
    val.value = null;

    if(inputValue === ''){
      alert('dsd')
    } else {
      const item ={
        id: Date.now(),
        text: inputValue,
        isCompleted: false,
      }

      setValue([...values, item])

      val.current.value = null;

    }
  }

  return (
      <>
        <div className='w-75 mx-auto'>
          <h1 className='w-100 alert text-center alert-info'>What will you do today?</h1>
          <form onSubmit={(e) => submitTodos(e)} className='form'>
            <input ref={val} className='form-control w-50 mx-auto' type="text" placeholder='todos...' />
          </form>
        </div>
      </>
  );
}

export default index;
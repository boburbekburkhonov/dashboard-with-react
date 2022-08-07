import React, { useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import close from '../../assets/images/xmark-solid.svg'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const nav = useRef()
  const btn = useRef();
  const {allValue} = useContext(dataContext);


  function removeAdd(){
    nav.current.classList.remove('d-none')
    btn.current.classList.add('d-none')
  }

  function addRemove() {
    nav.current.classList.add('d-none')
    btn.current.classList.remove('d-none')
  }


  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 27){
      nav.current?.classList.add('d-none')
      btn.current?.classList.remove('d-none')
    }
  })

  return (
    <>
    <nav ref={nav} className='sitenav d-none'>
      <div className="container">
        <div className='d-flex justify-content-between'>
          <Link className='link' to='/' href="#">
            <img src={logo} alt="logo" width='35' height='39' />
          </Link>

          <img onClick={() => addRemove()} className='close' src={close} alt="close" width='30' height='30' />
        </div>

        <div className='sitenav-line'>

        </div>

        <ul className='sitenav-list list-unstyled m-0 p-0'>
          <li className='sitenav-item'>
            <Link to='apinews' className='sitenav-link sitenav-link-api text-decoration-none' href="#">
              APINew
            </Link>
          </li>

          <li className='sitenav-item'>
            <Link to='todo' className='sitenav-link sitenav-link-todo sitenav-link-api text-decoration-none' href="#">
              Todo
            </Link>
          </li>

          <li className='sitenav-item'>
            <Link to='todolist' className='sitenav-link sitenav-link-api text-decoration-none' href="#">
              TodoList
            </Link>
          </li>
        </ul>
      </div>

    </nav>
    <button onClick={() => removeAdd()} ref={btn} className='hamburger'></button>
    </>
  );
}

export default index;
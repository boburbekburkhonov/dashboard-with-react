import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import './main.css'

function index(props) {
  return (
    <nav className='sitenav'>
      <div className="container">
        <Link to='/' href="#">
          <img src={logo} alt="logo" width='35' height='39' />
        </Link>

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
  );
}

export default index;
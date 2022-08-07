import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination'
import dataContext from '../Context/dataContext';
import Loader from '../Loader'
import './main.css'

function index(props) {

  const[data, setData] = useState([]);
  const[loader, setLoader] = useState(false);
  const[current, setCurrent] = useState(1);
  const[total] = useState(10);

  const firstIndex = current * total;
  const lastIndex = firstIndex - total;
  const dataSlice = data.slice(lastIndex, firstIndex)

  const fetData = async () => {
    setLoader(false);
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await request.json();
    setData(result)
    setLoader(true);
  }

  useEffect(() => {
    fetData()
  }, [])

  function click(num){
    setCurrent(num)
  }

  return (
      <dataContext.Provider value={{data, total, click, current, setCurrent}}>
        {loader ?
        <div className='api-news d-flex flex-column justify-content-center'>
        {dataSlice.map((item, ind) => {
          return <p key={ind} className='alert alert-info card w-75 m-0 mt-2 p-2'>
                    {item.title}
                  </p>
        })}
        <Pagination />
      </div>
        :

        <Loader />
        }
      </dataContext.Provider>
  );
}

export default index;
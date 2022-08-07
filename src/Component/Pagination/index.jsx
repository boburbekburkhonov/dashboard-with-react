import React, { useContext } from 'react';
import dataContext from '../Context/dataContext';


function index(props) {

  const {data} = useContext(dataContext);
  const {total} = useContext(dataContext);
  const {click} = useContext(dataContext);
  const {current} = useContext(dataContext);
  const {setCurrent} = useContext(dataContext);

  const dot = []

  for(let i = 1; i <= Math.ceil(data.length / total); i++){
    dot.push(i)
  }

  return (
    <>
      <nav className='mt-4' aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <button onClick={() => setCurrent(current - 1)} className={`
            page-link ${current <= 1 ? 'disabled' : 'button'}`}>Prev</button>
          </li>
          {dot.map((item, ind) => {
           return  <li onClick={() => click(item)} key={ind} className="page-item">
                    <button className="page-link" href="#">
                      {item}
                    </button>
                  </li>
          })}
          <li className="page-item">
            <button onClick={() => setCurrent(current + 1)} className={`
            page-link ${current >= 10 ? 'disabled' : 'button'}`}>Next</button>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default index;
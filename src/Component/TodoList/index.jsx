import React, { useContext } from 'react';
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const {values} = useContext(dataContext);
  const {setValue} = useContext(dataContext);

  function remove(num) {
    const filter = values.filter(item => item.id !== num);

    setValue(filter)
  }

  function checked(num) {
    const find = values.find(item => item.id === num);
    find.isCompleted = !find.isCompleted

    setValue([...values])
  }


  return (
    <>
        <table className="table mt-4 w-75 mx-auto table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Todo</th>
              <th>Done</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {values.map((item, index) => {
              return <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td className={`h6 ${item.isCompleted ? 'text-decoration-line-through text-danger' : 'text-dark'}`}>{item.text}</td>
                      <td>
                        <input onClick={() => checked(item.id)} type="checkbox" />
                      </td>
                      <td>
                        <button onClick={() => remove(item.id)} className='btn btn-danger'>Remove</button>
                      </td>
                    </tr>
            })}
          </tbody>
        </table>
    </>
  );
}

export default index;
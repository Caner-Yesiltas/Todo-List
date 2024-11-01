import React from 'react';
import { IoIosRemoveCircle } from 'react-icons/io';
import { FaEdit } from 'react-icons/fa';

const Todo = () => {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', border:'1px solid lightgrey'}}   >
        
        First Todo
      <div>
        <IoIosRemoveCircle className='todo-icons' />
        <FaEdit  className='todo-icons' />
      </div>
        
        </div>

    </div>
  );
};

export default Todo;

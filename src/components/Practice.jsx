import React from 'react';

export default function Practice() {
  const [task, setTask] = React.useState('');
  const [taskList, setTaskList] = React.useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTaskList(prev => [...prev, task]);
    setTask('');
  };

  const handleDelete = index => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };
  return (
    <div>
      <input
        type='text'
        placeholder='enter task'
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {taskList.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

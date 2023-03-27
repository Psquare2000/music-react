import React, { useState } from 'react';

function InputTable() {
  const [values, setValues] = useState([
    { id: 1, label: 'Field 1', value: '' },
    { id: 2, label: 'Field 2', value: '' },
    { id: 3, label: 'Field 3', value: '' },
    { id: 4, label: 'Field 4', value: '' },
    { id: 5, label: 'Field 5', value: '' },
    { id: 6, label: 'Field 6', value: '' },
    { id: 7, label: 'Field 7', value: '' },
    { id: 8, label: 'Field 8', value: '' },
    { id: 9, label: 'Field 9', value: '' },
    { id: 10, label: 'Field 10', value: '' },
  ]);

  const handleChange = (event, id) => {
    const newValues = values.map((value) => {
      if (value.id === id) {
        return { ...value, value: event.target.value };
      } else {
        return value;
      }
    });
    setValues(newValues);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {values.map((value) => (
          <tr key={value.id}>
            <td>{value.label}</td>
            <td>
              <input
                type="text"
                value={value.value}
                onChange={(event) => handleChange(event, value.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InputTable;

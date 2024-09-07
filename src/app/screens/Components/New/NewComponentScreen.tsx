import React, { useState } from 'react';
import InputField from '../../../components/inputs/InputField';

const NewComponentScreen = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <InputField title="Name" placeholder="Enter component name" onChange={setName} value={name} />
    </div>
  );
};

export default NewComponentScreen;

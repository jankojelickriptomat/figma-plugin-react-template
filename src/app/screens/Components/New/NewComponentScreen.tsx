import React, { useState } from 'react';
import InputField from '../../../components/inputs/InputField';
import Cta from '../../../components/buttons/Cta';

const NewComponentScreen = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [figmaSelection, setFigmaSelection] = useState('');

  const submitNewComponenet = () => {
    console.log({ name, code, figmaSelection });
  };

  return (
    <div>
      <InputField title="Name" placeholder="Enter component name" onChange={setName} value={name} />
      <InputField title="Code" placeholder="Paste component code" onChange={setCode} value={code} />
      <InputField
        title="Figma selection"
        placeholder="Paste Figma selection"
        onChange={setFigmaSelection}
        value={figmaSelection}
      />
      <Cta title="Submit" onClick={submitNewComponenet} />
    </div>
  );
};

export default NewComponentScreen;

import React, { useEffect, useState } from 'react';
import InputField from '../../../components/inputs/InputField';
import Cta from '../../../components/buttons/Cta';

const NewComponentScreen = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [figmaSelection, setFigmaSelection] = useState('');

  const submitNewComponenet = () => {
    console.log({ name, code, figmaSelection });
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'selection-change') {
        const selection = event?.data?.pluginMessage?.selection;
        console.log('selection', selection);
        if (selection?.length) {
          setFigmaSelection(selection[0].id);
        }
      }
    };
  }, []);

  return (
    <div>
      <InputField title="Name" placeholder="Enter component name" onChange={setName} value={name} />
      <InputField title="Code" placeholder="Paste component code" onChange={setCode} value={code} />
      <InputField
        title="Selected component ID"
        placeholder="Selected component ID"
        onChange={setFigmaSelection}
        value={figmaSelection}
      />
      <Cta title="Submit" onClick={submitNewComponenet} />
    </div>
  );
};

export default NewComponentScreen;

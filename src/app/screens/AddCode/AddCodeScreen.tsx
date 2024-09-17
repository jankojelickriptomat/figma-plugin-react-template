import React, { useEffect, useState } from 'react';
import InputField from '../../components/inputs/InputField';
import { FIGMA_EVENT_TYPE } from '../../types/EventType';
import Cta from '../../components/buttons/Cta';
import { Text } from '@chakra-ui/react';
import { ComponentProp } from '../../types/ComponentProp';

const AddCodeScreen = () => {
  const [nodeId, setNodeId] = useState('');
  const [name, setName] = useState('');
  const [importLine, setImportLine] = useState('');
  const [addPropInput, setAddPropInput] = useState({ visible: false, value: '' });
  const [props, setProps] = useState<Record<string, ComponentProp>>({});

  useEffect(() => {
    window.onmessage = (event) => {
      const msg = event.data.pluginMessage;
      if (msg?.type === FIGMA_EVENT_TYPE['selection-change']) {
        const nodes = event.data.pluginMessage.nodes;
        const component = nodes[0];
        setNodeId(component.id);
        setName(component.name);
      }
    };
  }, []);

  const submitComponent = () => {};

  const addProp = () => {};

  return (
    <div style={{ padding: 15 }}>
      <InputField title="Selected component ID (auto)" value={nodeId} />
      <InputField title="Component name" value={name} onChange={setName} />
      <InputField title="Import Line" value={importLine} onChange={setImportLine} />
      {addPropInput.visible ? <></> : <Cta title="Add prop" />}
      <Cta title="Submit" onClick={submitComponent} />
    </div>
  );
};

export default AddCodeScreen;

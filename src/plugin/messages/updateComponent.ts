import { Message } from '../controller';
import { MessageMap } from '../messages';

export const isUpdateComponentMessage = (msg: Message<keyof MessageMap>): msg is Message<'update-component'> => {
  return msg.type === 'update-component';
};

export const handleUpdateComponentMessage = (msg: Message<'update-component'>) => {
  let node = figma.getNodeById(msg.data.id);
  node.name = msg.data.name;
  Object.assign(node, { data: msg.data });
  console.log('COMPONENT UPDATED');
};

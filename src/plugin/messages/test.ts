import { Message } from '../controller';
import { MessageMap } from '../messages';

export const isTestMessage = (msg: Message<keyof MessageMap>): msg is Message<'test'> => {
  return msg.type === 'test';
};

export const handleTestMessage = async (msg: Message<'test'>) => {
  await figma.loadFontAsync({ family: 'Poppins', style: 'Regular' });
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

  const text = figma.createText();
  text.fontName = { family: 'Poppins', style: 'Regular' };
  text.characters = msg.data.message;
  text.fills = [
    {
      type: 'SOLID',
      color: { r: 1, g: 0.5, b: 0 }, // Orange color
    },
  ];

  const nodes = [text];
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
  figma.ui.postMessage({
    type: 'test',
    message: 'Displayed text to user',
  });
};

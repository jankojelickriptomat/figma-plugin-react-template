import { m } from 'framer-motion';
import { MessageMap } from './messages';
import { handleTestMessage, isTestMessage } from './messages/test';

export type Message<T extends keyof MessageMap> = {
  type: T;
  data: MessageMap[T];
};

figma.showUI(__html__, { width: 500, height: 700 });

figma.ui.onmessage = async (msg: Message<keyof MessageMap>) => {
  if (isTestMessage(msg)) handleTestMessage(msg);

  // switch (msg.type) {
  //   case 'test' as keyof MessageMap:
  //     // codeBlock.code = msg.data;
  //     figma.currentPage.appendChild(codeBlock);
  //     break;
  //   case 'create-rectangles':
  //     const nodes = [];

  //     for (let i = 0; i < msg.data.count; i++) {
  //       const rect = figma.createRectangle();
  //       rect.x = i * 150;
  //       rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  //       figma.currentPage.appendChild(rect);
  //       nodes.push(rect);
  //     }

  //     figma.currentPage.selection = nodes;
  //     figma.viewport.scrollAndZoomIntoView(nodes);

  //     // This is how figma responds back to the ui
  //     figma.ui.postMessage({
  //       type: 'create-rectangles',
  //       message: `Created ${msg.count} Rectangles`,
  //     });
  //     break;
  //   default:
  //     return;
  // }
  // if (msg.type === 'create-rectangles') {
  //   const nodes = [];

  //   for (let i = 0; i < msg.data.count; i++) {
  //     const rect = figma.createRectangle();
  //     rect.x = i * 150;
  //     rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  //     figma.currentPage.appendChild(rect);
  //     nodes.push(rect);
  //   }

  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);

  //   // This is how figma responds back to the ui
  //   figma.ui.postMessage({
  //     type: 'create-rectangles',
  //     message: `Created ${msg.count} Rectangles`,
  //   });
  // }

  // figma.closePlugin();
};

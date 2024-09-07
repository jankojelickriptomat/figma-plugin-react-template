import { MessageMap } from './messages';
import { selectionChangeListener } from './listeners/selectionChangeListener';
import { messageListener } from './listeners/messageListener';

export type Message<T extends keyof MessageMap> = {
  type: T;
  data: MessageMap[T];
};

figma.showUI(__html__, { width: 500, height: 700 });

selectionChangeListener();
messageListener();

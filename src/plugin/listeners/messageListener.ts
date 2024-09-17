import { Message } from '../controller';
import { MessageMap } from '../messages';
import { handleTestMessage, isTestMessage } from '../messages/test';
import { handleUpdateComponentMessage, isUpdateComponentMessage } from '../messages/updateComponent';

export const messageListener = () => {
  figma.ui.onmessage = async (msg: Message<keyof MessageMap>) => {
    if (isTestMessage(msg)) handleTestMessage(msg);
    if (isUpdateComponentMessage(msg)) handleUpdateComponentMessage(msg);
  };
};

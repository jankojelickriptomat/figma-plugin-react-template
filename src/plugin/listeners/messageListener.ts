import { Message } from '../controller';
import { MessageMap } from '../messages';
import { handleTestMessage, isTestMessage } from '../messages/test';

export const messageListener = () => {
  figma.ui.onmessage = async (msg: Message<keyof MessageMap>) => {
    if (isTestMessage(msg)) handleTestMessage(msg);

    // figma.closePlugin();
  };
};

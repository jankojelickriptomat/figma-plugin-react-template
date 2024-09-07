export const sendMessageToFigma = <T extends keyof MessageMap>(type: T, data: MessageMap[T]) => {
  parent.postMessage({ pluginMessage: { type, data } }, '*');
};

export interface MessageMap {
  test: { message: string };
  'create-rectangles': {
    count: number;
  };
}

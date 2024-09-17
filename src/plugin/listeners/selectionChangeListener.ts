import { FIGMA_EVENT_TYPE } from '../../app/types/EventType';

export const selectionChangeListener = () => {
  figma.on('selectionchange', () => {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) {
      const nodes = selection.map((node) => ({
        id: node.id,
        name: node.name,
      }));
      figma.ui.postMessage({ type: FIGMA_EVENT_TYPE['selection-change'], nodes });
    }
  });
};

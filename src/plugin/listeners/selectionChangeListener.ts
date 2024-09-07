export const selectionChangeListener = () => {
  figma.on('selectionchange', () => {
    const selection = figma.currentPage.selection;
    if (selection.length > 0) figma.ui.postMessage({ type: 'selection-change', selection });
  });
};

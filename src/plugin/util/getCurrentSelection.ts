export const getCurrentSelection = () => {
  // Get the current selection
  const selectedNodes = figma.currentPage.selection;

  // Check if any nodes are selected
  if (selectedNodes.length > 0) {
    console.log('Selected nodes:', selectedNodes);
  } else {
    console.log('No nodes selected');
  }

  // Optionally, you can loop through each selected node and log their types or names
  selectedNodes.forEach((node) => {
    console.log(`Node type: ${node.type}, Node name: ${node.name}`);
  });
};

import React from 'react';
import '../../styles/ui.css';
import Cta from '../../components/buttons/Cta';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function LandingScreen() {
  const textbox = React.useRef<HTMLInputElement>(undefined);
  const navigate = useNavigate();

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      <Cta
        title="Mobile app"
        onClick={() => {
          navigate('/components');
        }}
      />
      <Cta title="Web app" />
    </Box>
  );
}

export default LandingScreen;

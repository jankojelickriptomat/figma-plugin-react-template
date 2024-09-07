import React from 'react';
import '../../styles/ui.css';
import Cta from '../../components/buttons/Cta';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { sendMessageToFigma } from '../../../plugin/messages';

function LandingScreen() {
  const navigate = useNavigate();

  const sendTestMessage = () => {
    sendMessageToFigma('test', { message: 'this is a test message' });
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      console.log(event, 'event');
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Cta
        title="Mobile app"
        onClick={() => {
          navigate('/components');
        }}
      />
      <Cta title="Web app" onClick={() => {}} />
      <Cta title="Test message" onClick={sendTestMessage} />
    </Box>
  );
}

export default LandingScreen;

import React from 'react';
import Cta from '../../../components/buttons/Cta';
import { useNavigate } from 'react-router-dom';

const ComponentScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Cta
        title="Add new components"
        onClick={() => {
          navigate('/components/new');
        }}
      />
    </div>
  );
};

export default ComponentScreen;

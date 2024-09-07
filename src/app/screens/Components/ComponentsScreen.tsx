import React from 'react';
import Cta from '../../components/buttons/Cta';
import { useNavigate, useParams } from 'react-router-dom';

const ComponentsScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Cta
        title="Add new component"
        onClick={() => {
          navigate('/components/new');
        }}
      />
    </div>
  );
};

export default ComponentsScreen;

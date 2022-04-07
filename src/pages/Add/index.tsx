import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { InputContainer } from 'components';

const Container = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  align-items: center;
`;

export const Add = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <InputContainer onAdd={() => navigate('/')} />
    </Container>
  );
};

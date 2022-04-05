import styled from 'styled-components';
import { InputContainer } from 'components/InputContainer';
import { ToDoListProvider } from 'contexts';
import { TodoList } from './ToDoList';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const App = () => {
  return (
    <ToDoListProvider>
      <Container>
        <Contents>
          <TodoList />
          <InputContainer />
        </Contents>
      </Container>
    </ToDoListProvider>
  );
};

export default App;

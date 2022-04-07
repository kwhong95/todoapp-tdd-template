import { useContext } from 'react';
import styled from 'styled-components';
import { TodoItem } from 'components/ToDoItem';
import { ToDoListContext } from 'contexts';

const Container = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

export const TodoList = () => {
  const { toDoList, deleteToDo } = useContext(ToDoListContext);

  return (
    <Container data-testid="toDoList">
      {toDoList.map((item, idx) => (
        <TodoItem key={item} id={idx} label={item} onDelete={() => deleteToDo(idx)} />
      ))}
    </Container>
  );
};

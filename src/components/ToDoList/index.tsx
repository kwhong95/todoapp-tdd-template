import styled from 'styled-components';
import { TodoItem } from 'components/ToDoItem';

const Container = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

interface Props {
  readonly toDoList: string[];
  readonly deleteToDo: (index: number) => void;
}

export const TodoList = ({ toDoList, deleteToDo }: Props) => {
  return (
    <Container>
      {toDoList.map((item, idx) => (
        <TodoItem key={item} label={item} onDelete={() => deleteToDo(idx)} />
      ))}
    </Container>
  );
};

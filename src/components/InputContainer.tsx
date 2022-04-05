import styled from 'styled-components';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

const Container = styled.div`
  display: flex;
`;

interface Props {
  readonly toDo?: string;
  readonly onChange?: (text: string) => void;
  readonly onAdd?: () => void;
}

export const InputContainer = ({ toDo, onChange, onAdd }: Props) => {
  return (
    <Container>
      <Input placeholder="할 일을 입력해 주세요" value={toDo} onChange={onChange} />
      <Button label="추가" onClick={onAdd} />
    </Container>
  );
};

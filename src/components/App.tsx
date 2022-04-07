import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { PageHeader } from 'components';
import { ToDoListProvider } from 'contexts';
import { List, Add, Detail, NotFound } from 'pages';

const Container = styled.div`
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
};

export default App;

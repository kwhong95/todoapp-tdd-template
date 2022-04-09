import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { ToDoListProvider } from 'contexts';
import { Detail } from '.';

describe('<Detail />', () => {
  it('renders component correctly', () => {
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const { container } = render(
      <ToDoListProvider>
        <MemoryRouter initialEntries={['/detail/0']}>
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      </ToDoListProvider>,
    );

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();

    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('deletes ToDo data', () => {
    localStorage.setItem('ToDoList', '["ToDo 1"]');

    const TestComponent = () => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    render(
      <ToDoListProvider>
        <MemoryRouter initialEntries={['/', '/detail/0']}>
          <TestComponent />
          <Routes>
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </MemoryRouter>
      </ToDoListProvider>,
    );

    const url = screen.getByText('/detail/0');
    expect(url).toBeInTheDocument();

    const toDoItem = screen.getByText('ToDo 1');
    expect(toDoItem).toBeInTheDocument();
    const button = screen.getByText('삭제');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(url.textContent).toBe('/');
    expect(toDoItem).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});

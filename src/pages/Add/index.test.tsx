import { MemoryRouter, useLocation } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToDoListProvider } from 'contexts';
import 'jest-styled-components';

import { Add } from '.';

describe('<Add />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/add']}>
        <Add />
      </MemoryRouter>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('add a new ToDo and redirect to the root page', () => {
    const TestComponent = () => {
      const { pathname } = useLocation();
      return (
        <ToDoListProvider>
          <div>{pathname}</div>
          <Add />
        </ToDoListProvider>
      );
    };

    render(
      <MemoryRouter initialEntries={['/add']}>
        <TestComponent />
      </MemoryRouter>,
    );

    const pathName = screen.getByText('/add');
    expect(pathName).toBeInTheDocument();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    const button = screen.getByText('추가');

    fireEvent.change(input, { target: { value: 'New ToDo' } });
    fireEvent.click(button);

    expect(pathName.textContent).toBe('/');
    expect(localStorage.getItem('ToDoList')).toBe('["New ToDo"]');
  });
});

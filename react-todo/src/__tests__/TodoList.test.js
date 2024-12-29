import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';  // Adjust the import path if necessary

test('renders TodoList component', () => {
  render(<TodoList />);
  // Check if the title is rendered
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('displays demo todos initially', () => {
  render(<TodoList />);
  // Check if the demo todos are displayed
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('can toggle todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText(/Delete/i)[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).toBeNull();
});

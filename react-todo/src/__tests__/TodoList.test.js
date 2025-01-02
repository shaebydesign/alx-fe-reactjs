import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Test initial render
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);

  // Check if the initial todos are displayed
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument();
});

// Test adding a new todo
test('can add a new todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add/i);

  // Simulate user input and click on the Add button
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  // Verify that the new todo is displayed
  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

// Test toggling a todo's completion
test('can toggle todo completion', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText(/Learn React/i);

  // Ensure the todo is not completed initially
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');

  // Simulate a click to toggle completion
  fireEvent.click(todoItem);

  // After clicking, the todo should have a line-through style
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  // Simulate another click to toggle back to not completed
  fireEvent.click(todoItem);

  // After the second click, the todo should not have a line-through style
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

// Test deleting a todo
test('can delete a todo', () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText(/Learn React/i);
  const deleteButton = screen.getByText(/Delete/i);

  // Simulate a click on the delete button
  fireEvent.click(deleteButton);

  // Verify that the todo item is removed from the document
  expect(todoItem).not.toBeInTheDocument();
});

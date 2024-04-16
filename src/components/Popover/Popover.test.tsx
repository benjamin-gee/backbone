import { render, screen } from '@testing-library/react';
import { Popover } from './Popover';

test('renders learn react link', () => {
  render(<Popover/>);
  const linkElement = screen.getByText("Welcome to backbone");
  expect(linkElement).toBeInTheDocument();
});

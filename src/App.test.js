import { render, screen } from '@testing-library/react';
import App from './App';

function sum(a, b) {
  return a + b;
}

test('renders learn react link', () => {
  expect(sum(1, 2)).toBe(3);
});

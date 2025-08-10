/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import Hero from '../sections/Hero';

describe('Hero', () => {
  it('renders primary headings', () => {
    render(<Hero />);
    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h1).toHaveTextContent(/DOUGLAS.?PC/i); // tolerate nbsp
    expect(h2).toHaveTextContent(/TECHNOLOGY/i);
  });
});

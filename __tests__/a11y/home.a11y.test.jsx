/* eslint-env jest */
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Hero from '../../sections/Hero';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('Hero has no a11y violations', async () => {
    const { container } = render(<Hero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

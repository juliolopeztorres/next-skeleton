import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const spanTitle = screen.getByTestId('page-title');

    expect(spanTitle.textContent).toContain('Home');
  });
});

import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe('HomePage', () => {
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  test('displays main content', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/shop the best tech/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/shop now/i)
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { describe, test, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders without crashing', () => {
    render(<App />);
  });

  test('loads cart from localStorage', () => {
    localStorage.setItem('cart', JSON.stringify([]));
    render(<App />);
    expect(localStorage.getItem('cart')).toBeTruthy();
  });
});

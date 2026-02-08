import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem';
import { describe, test, expect, vi } from 'vitest';

describe('CartItem', () => {
  const mockRemove = vi.fn();

  const item = {
    cartId: 1,
    name: 'Test Item',
    price: 9.99,
  };

  test('renders item info', () => {
    render(<CartItem item={item} onRemove={mockRemove} />);

    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
  });

  test('calls remove handler', () => {
    render(<CartItem item={item} onRemove={mockRemove} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockRemove).toHaveBeenCalledWith(1);
  });
});

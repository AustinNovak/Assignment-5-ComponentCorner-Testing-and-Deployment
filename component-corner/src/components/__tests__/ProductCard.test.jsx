import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    description: 'Test description',
    price: 19.99,
    image: 'test.jpg',
  };

  it('renders product info and button', () => {
    render(
      <ProductCard
        product={product}
        onAddToCart={() => {}}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  it('calls addToCart when clicked', () => {
    const mockAddToCart = vi.fn();

    render(
      <ProductCard
        product={product}
        onAddToCart={mockAddToCart}
      />
    );

    fireEvent.click(
      screen.getByRole('button', { name: /add to cart/i })
    );

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});

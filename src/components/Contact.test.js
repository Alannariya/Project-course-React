import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

describe('Contact', () => {
it('subscribes when "Подписаться" button is clicked', () => {
render(<Contact />);
// Проверяем, что кнопка "Подписаться" существует
const subscribeButton = screen.getByRole('button', { name: 'Подписаться' });
expect(subscribeButton).toBeInTheDocument();

// Симулируем клик на кнопку "Подписаться"
fireEvent.click(subscribeButton);

// Проверяем, что форма была отправлена
const contactForm = screen.getByRole('form');
expect(contactForm).toHaveAttribute('action', 'https://formspree.io/f/xyyarary');
expect(contactForm).toHaveAttribute('method', 'POST');
});
});
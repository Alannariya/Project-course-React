import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('closes sidebar when close button is clicked', () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    
    // Проверяем, что сайдбар открыт
    expect(screen.getByTestId('sidebar')).toHaveClass('show-sidebar');
    
    // Находим кнопку для закрытия сайдбара
    const closeButton = screen.getByRole('button', { name: 'Close' });
    
    // Симулируем клик на кнопку закрытия
    fireEvent.click(closeButton);
    
    // Проверяем, что сайдбар закрыт
    expect(screen.getByTestId('sidebar')).not.toHaveClass('show-sidebar');
  });
});
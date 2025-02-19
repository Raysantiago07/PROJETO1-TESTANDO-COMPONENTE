import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contador from './Contador';

describe('Componente Contador', () => {
  it('deve exibir a contagem inicial como 0', () => {
    const { getByText } = render(<Contador />);
    expect(getByText('Contagem: 0')).toBeInTheDocument();
  });

  it('deve incrementar a contagem quando o botão "Incrementar" for clicado', () => {
    const { getByText } = render(<Contador />);
    fireEvent.click(getByText('Incrementar'));
    expect(getByText('Contagem: 1')).toBeInTheDocument();
  });

  it('deve decrementar a contagem quando o botão "Decrementar" for clicado', () => {
    const { getByText } = render(<Contador />);
    fireEvent.click(getByText('Decrementar'));
    expect(getByText('Contagem: -1')).toBeInTheDocument();
  });
});

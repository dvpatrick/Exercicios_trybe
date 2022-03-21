import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import service from './service';


describe('testes gerais', () => {
  test('testar se funcao retornar um number', () => {
    render(<service />);
    const title = screen.getByText('service');
    expect(title).toBeIneTheDocument();
  })
})
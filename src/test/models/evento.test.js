import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando modelo de Evento', () => {
  const objetoEvento = {
    nome: 'Lançamento do livro',
    descricao: 'Lançamento do livro Programando com JavaScript',
    data: '2024-01-01',
    autor_id: 1,
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(
      expect.objectContaining({
        nome: expect.any(String),
        descricao: expect.any(String),
        data: expect.any(String),
        autor_id: expect.any(Number),
      }),
    );
  });
});

import Evento from '../models/evento.js';

class EventosController {
  static liberaAcessoEvento = () => process.env.EVENTO_FLAG === 'true';

  static listarEventos = async (req, res) => {
    if (this.liberaAcessoEvento()) {
      try {
        const resultado = await Evento.pegarEventos();
        return res.status(200).json(resultado);
      } catch (err) {
        return res.status(500).json(err.message);
      }
    } else {
      return res.status(404).send();
    }
  };
}

export default EventosController;
import express from 'express';

const routes = express.Router();

routes.post('/treinometro', async (req, res) => {
  await req.producer.send({
    topic: 'calculate-score',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  return res.json({ ok: true });
});

export default routes;
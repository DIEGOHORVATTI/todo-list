import type { RequestHandler } from 'express'
import { deleteColumnService } from './service'

export const deleteBoardController: RequestHandler = async (req, res) => {
  await deleteColumnService({
    id: req.params?.id
  })

  return res.status(202).json({ message: 'Quadro deletado com sucesso' })
}

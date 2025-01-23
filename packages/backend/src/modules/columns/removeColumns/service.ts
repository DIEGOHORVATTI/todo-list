import { HTTPError } from '@/errors/httpError'

import { KanbanColumn } from '@/models/KanbanColumn'

import * as Z from 'zod'

const deleteDomainSchema = Z.object({
  id: Z.string()
})

export const deleteColumnService = async (data: { id: string }) => {
  const { id } = deleteDomainSchema.parse(data)

  const columnsExists = await KanbanColumn.findOne({ _id: id })

  if (!columnsExists) throw new HTTPError('Column not found', 404)

  return KanbanColumn.deleteOne({ _id: id })
}

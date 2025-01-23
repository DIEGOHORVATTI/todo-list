import { z } from 'zod'

import { router, publicProcedure } from '../trpc'
import { ColumnSchema } from '@/models/KanbanColumn'

import { createColumnService } from '@/modules/columns/createColumns/service'
import { getAllColumnsService } from '@/modules/columns/getAllColumns/service'
import { updateColumnService } from '@/modules/columns/updateColumns/service'
import { deleteColumnService } from '@/modules/columns/removeColumns/service'

export const columnRouter = router({
  getAll: publicProcedure.query(async () => {
    return await getAllColumnsService()
  }),

  create: publicProcedure.input(ColumnSchema).mutation(async ({ input }) => {
    return await createColumnService(input)
  }),

  update: publicProcedure.input(ColumnSchema.extend({ id: z.string() })).mutation(async ({ input }) => {
    return await updateColumnService(input)
  }),

  delete: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
    return await deleteColumnService(input)
  })
})

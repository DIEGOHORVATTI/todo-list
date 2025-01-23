import { z } from 'zod'

import { router, publicProcedure } from '../trpc'
import { BoardSchema } from '@/models/KanbanBoard'

import { createBoardService } from '@/modules/boards/createBoards/service'
import { getAllBoardsService } from '@/modules/boards/getAllBoards/service'
import { updateBoardService } from '@/modules/boards/updateBoard/service'
import { deleteBoardService } from '@/modules/boards/removeBoard/service'

export const boardRouter = router({
  getAll: publicProcedure.query(async () => {
    return await getAllBoardsService()
  }),

  create: publicProcedure.input(BoardSchema).mutation(async ({ input }) => {
    return await createBoardService(input)
  }),

  update: publicProcedure.input(BoardSchema.extend({ id: z.string() })).mutation(async ({ input }) => {
    return await updateBoardService(input)
  }),

  delete: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
    return await deleteBoardService(input)
  })
})

import { router } from '../trpc'
import { boardRouter } from './board.router'
import { columnRouter } from './column.router'
import { taskRouter } from './task.router'
import { uploadRouter } from './upload.router'

export const appRouter = router({
  board: boardRouter,
  column: columnRouter,
  task: taskRouter,
  upload: uploadRouter
})

export type AppRouter = typeof appRouter
